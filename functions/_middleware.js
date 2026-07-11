export async function onRequest({ request, next, env }) {
  const response = await next();

  // Only intercept 404s — let assets (JS, CSS, images) pass through normally
  if (response.status === 404) {
    return env.ASSETS.fetch(new URL('/', request.url).toString());
  }

  return response;
}
