const pkg = require('./package')
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const middlewares = require('./middlewares')
const httpPlease = require('connect-http-please')
const url = require('url')
const proxy = require('proxy-middleware')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(function (req, res, next) {
  req.headers['accept-encoding'] = 'identity'
  return next()
})

const accountName = process.env.LI_ACCOUNT || pkg.accountName
const filesPath = process.env.LI_UPLOAD_PATH || pkg.filesPath
const port = process.env.PORT || pkg.port || 3000
const portalHost = `www.${accountName}.com.br`
let localHost = `${accountName}.localhost`
let portalProxyOptions = url.parse(`http://${portalHost}/`)

if (port !== 80) {
  localHost += `:${port}`
}

portalProxyOptions = url.parse(`https://${portalHost}/`)
portalProxyOptions.preserveHost = true
portalProxyOptions.cookieRewrite = localHost

app.use((req, res, next) => 
  middlewares.rewriteLocationHeader(req, res, next, portalHost, localHost)
)

app.use(function(req, res, next) {
  req.headers.host = portalHost
  return next()
})

app.use((req, res, next) => 
  middlewares.replaceHtmlBody(req, res, next, accountName, filesPath, port)
)

app.use((err, req, res, next) => 
  middlewares.errorHandler(err, req, res, next)
)

app.use(httpPlease(portalHost, false))
app.use(proxy(portalProxyOptions))

app.listen(port, function() {
  console.log(`App running on http://${localHost}\n`)
})
