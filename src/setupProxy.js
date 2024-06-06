import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.foxithub.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // remove /api prefix when forwarding request
      },
    })
  );
}
