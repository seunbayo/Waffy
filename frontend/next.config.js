const isProd = process.env.NODE_ENV === "production";

module.exports = {
      assetPrefix: isProd ? "waffy-2h89t9.spheron.app" : "",
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}


