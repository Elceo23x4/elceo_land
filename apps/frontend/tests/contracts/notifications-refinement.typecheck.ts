import type {ReadInput} from '../../lib/api/transport';
const defaultWindow:ReadInput<'GET /api/notifications/inbox'>={};
const largerWindow:ReadInput<'GET /api/notifications/inbox'>={query:{limit:100}};
// @ts-expect-error The frozen route exposes no cursor.
const inventedCursor:ReadInput<'GET /api/notifications/inbox'>={query:{cursor:'invented'}};
// @ts-expect-error The inbox limit is numeric.
const wrongLimit:ReadInput<'GET /api/notifications/inbox'>={query:{limit:'100'}};
// @ts-expect-error This query refinement must not widen unrelated operations.
const widened:ReadInput<'GET /api/notifications/summary'>={query:{limit:100}};
void [defaultWindow,largerWindow,inventedCursor,wrongLimit,widened];
