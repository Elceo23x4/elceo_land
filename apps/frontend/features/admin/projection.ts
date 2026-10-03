/** Display-only whitelists. Each schema is tied to pinned source in M5_ADMIN_SOURCE_EVIDENCE.md. */
export type DisplayValue=string|number|boolean|null|DisplayValue[]|{[key:string]:DisplayValue};
export type Schema='string'|'number'|'boolean'|{nullable:Schema}|{list:Schema}|{fields:Readonly<Record<string,Schema>>};
export const nullable=(schema:Schema):Schema=>({nullable:schema});
export const list=(schema:Schema):Schema=>({list:schema});
export const fields=(shape:Readonly<Record<string,Schema>>):Schema=>({fields:shape});
export function project(value:unknown,schema:Schema):DisplayValue|undefined{
 if(typeof schema==='string')return typeof value===schema&&(schema!=='number'||Number.isFinite(value))?value as string|number|boolean:undefined;
 if('nullable'in schema)return value===null?null:project(value,schema.nullable);
 if('list'in schema){if(!Array.isArray(value))return undefined;const result:DisplayValue[]=[];for(const item of value){const p=project(item,schema.list);if(p===undefined)return undefined;result.push(p);}return result;}
 if(!value||typeof value!=='object'||Array.isArray(value))return undefined;
 const result:Record<string,DisplayValue>={};for(const [key,child]of Object.entries(schema.fields)){const p=project(Reflect.get(value,key),child);if(p===undefined)return undefined;result[key]=p;}return result;
}
export const words=(value:string)=>value.replace(/([a-z])([A-Z])/g,'$1 $2').replaceAll('_',' ');
export const textFields=(...keys:string[])=>Object.fromEntries(keys.map(k=>[k,'string' as const]));
export const numberFields=(...keys:string[])=>Object.fromEntries(keys.map(k=>[k,'number' as const]));

export function matchesContext(value:DisplayValue,context:Readonly<Record<string,string|undefined>>):boolean{
 if(value===null||typeof value!=='object')return true;
 if(Array.isArray(value))return value.every(item=>matchesContext(item,context));
 for(const [key,expected]of Object.entries(context))if(expected!==undefined&&key in value&&value[key]!==null&&value[key]!==expected)return false;
 return Object.values(value).every(child=>matchesContext(child,context));
}
