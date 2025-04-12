rewriteLocationHeader = (req, res, next, portalHost, localHost) => {
  let writeHead = res.writeHead

  res.writeHead = function (statusCode, headers) {
    if (headers && headers.location) {
      headers.location = headers.location
      .replace('https', 'http')
      .replace(portalHost, localHost)
    }

    res.writeHead = writeHead
    return res.writeHead(statusCode, headers)
  }

  return next()
}

replaceHtmlBody = (req, res, next, accountName, filesPath, port) => {
  ignoreReplace = [/\.js(\?.*)?$/, /\.css(\?.*)?$/, /\.svg(\?.*)?$/, /\.ico(\?.*)?$/, /\.woff(\?.*)?$/, /\.png(\?.*)?$/, /\.jpg(\?.*)?$/, /\.jpeg(\?.*)?$/, /\.gif(\?.*)?$/, /\.pdf(\?.*)?$/]
  let data, end, proxiedHeaders, proxiedStatusCode, write, writeHead

  if (ignoreReplace.some(function (ignore) {
    return ignore.test(req.url)
  })) {
    return next()
  }

  data = ''
  write = res.write
  end = res.end
  writeHead = res.writeHead
  proxiedStatusCode = null
  proxiedHeaders = null
  
  res.writeHead = function (statusCode, headers) {
    proxiedStatusCode = statusCode
    return proxiedHeaders = headers
  }
  
  res.write = function (chunk) {
    return data += chunk
  }
  
  res.end = function (chunk, encoding) {
    if (chunk) {
      data += chunk
    }

    if (data) {
      data = data.replace(new RegExp(`www.${accountName}.com.br`, 'g'), `${accountName}.localhost:${port}`)
      data = data.replace(new RegExp(`https://www.${accountName}`, 'g'), `http://${accountName}.localhost`)
      data = data.replace(new RegExp(`https://${accountName}`, 'g'), `http://${accountName}`)
      data = data.replace(new RegExp(`${filesPath}`, 'g'), ``)
    }

    res.write = write
    res.end = end
    res.writeHead = writeHead
    
    if (proxiedStatusCode && proxiedHeaders) {
      proxiedHeaders['content-length'] = Buffer.byteLength(data)
      delete proxiedHeaders['content-security-policy']
      res.writeHead(proxiedStatusCode, proxiedHeaders)
    }
    
    return res.end(data, encoding)
  }

  return next()
}

errorHandler = (err, req, res, next) => {
  let errString, ref, ref1
  errString = (ref = (ref1 = err.code) != null ? ref1.red : void 0) != null ? ref : err.toString().red
  return console.log(errString, req.url.yellow)
}

module.exports = {
  rewriteLocationHeader,
  replaceHtmlBody,
  errorHandler
}
