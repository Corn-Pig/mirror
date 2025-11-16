const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://wiki.backroomszh.org/";//your website url
  
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
