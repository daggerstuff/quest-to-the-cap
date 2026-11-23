export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Target GitHub Pages upstream for quest-to-the-cap
    const upstreamUrl = new URL(url.pathname + url.search, "https://daggerstuff.github.io");

    const reqHeaders = new Headers(request.headers);
    reqHeaders.set("Host", "lock.pixelthis.app");

    try {
      const upstreamResponse = await fetch(upstreamUrl.toString(), {
        method: request.method,
        headers: reqHeaders,
        redirect: "follow"
      });

      const response = new Response(upstreamResponse.body, upstreamResponse);
      response.headers.set("Access-Control-Allow-Origin", "*");
      response.headers.set("X-Served-By", "lock.pixelthis.app");
      return response;
    } catch (err) {
      return new Response("Gateway error fetching lock screen: " + err.message, {
        status: 502,
        headers: { "Content-Type": "text/plain" }
      });
    }
  }
};
