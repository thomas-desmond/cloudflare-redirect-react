export async function onRequest(context) {
    try {
        const url = new URL(context.request.url);
        if (url.pathname === '/cloudflare') {
            return Response.redirect('https://cloudflare.com', 301);
        }
      return await context.next();
    } catch (err) {
      return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    }
  }