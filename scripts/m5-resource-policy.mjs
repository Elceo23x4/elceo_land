// Post-GC retained-resource constitution. Tolerances are noise budgets, not spread tests.
export const resourcePolicy = Object.freeze({ repeats: 6, idleMs: 1500,
  heap: { growth: 2 * 1024 * 1024, lateGrowth: 128 * 1024, slope: 32 * 1024 },
  nodes: { growth: 32, lateGrowth: 8, slope: 2 },
  listeners: { growth: 4, lateGrowth: 2, slope: .5 },
});
export function evaluateResources(samples) {
  if (samples.length !== resourcePolicy.repeats + 1) throw new Error('Require warm baseline plus six repeat samples');
  const results = {};
  for (const key of ['heap','nodes','listeners']) {
    const values = samples.map(s => s[key]);
    if (values.some(v => !Number.isFinite(v) || v <= 0)) throw new Error(`Missing counter: ${key}`);
    const late = values.slice(-5);
    const mean = late.reduce((a,b) => a+b,0) / late.length;
    const slope = late.reduce((sum,y,x) => sum + (x-2)*(y-mean),0) / 10;
    const positiveSteps = late.slice(1).filter((v,i) => v > late[i]).length;
    const lateDelta = late.at(-1) - late[0];
    const delta = values.at(-1) - values[0];
    const limit = resourcePolicy[key];
    const sustained = lateDelta > limit.lateGrowth && (slope > limit.slope || positiveSteps >= 3);
    results[key] = { warm: values[0], final: values.at(-1), delta, lateDelta, slope, positiveSteps,
      pass: delta <= limit.growth && !sustained };
  }
  return { policy: resourcePolicy, counters: results, pass: Object.values(results).every(r => r.pass) };
}
