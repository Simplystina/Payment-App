{
    status: 200,
    statusText: 'OK',
    headers: AxiosHeaders {       
      'content-type': 'text/html',
      'content-length': '4099',   
      connection: 'close',
      'last-modified': 'Thu, 30 Mar 2023 17:55:21 GMT',
      'x-amz-server-side-encryption': 'AES256',
      'x-amz-version-id': 'GVSkxHY7doT5NUcQ7FL06QrZB7lGEWCO',
      'accept-ranges': 'bytes',
      server: 'AmazonS3',
      date: 'Sat, 01 Apr 2023 19:28:22 GMT',
      'cache-control': 'no-cache',
      etag: '"fe565eb5c735b7e35d581ed754487916"',
      'x-cache': 'Error from cloudfront',
      via: '1.1 2b298af2bb6f21ab0dee9e764d8bcb28.cloudfront.net (CloudFront)',
      'x-amz-cf-pop': 'AMS54-C1',
      'x-amz-cf-id': 'YiferDFJgTENUUW4Stsop9LAq5POOOyMkMGUbQjMFLyTbdsbwAGNKA==',
      age: '334'
    },
    config: {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: [ 'xhr', 'http' ],
      transformRequest: [ [Function: transformRequest] ],
      transformResponse: [ [Function: transformResponse] ],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: [Function], Blob: [class Blob] },
      validateStatus: [Function: validateStatus],
      headers: AxiosHeaders {
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'axios/1.3.4',
        'Accept-Encoding': 'gzip, compress, deflate, br'
      },
      method: 'get',
      url: ' https://checkout.paystack.com/sdmauj9g57afb2b',
      data: undefined
    },
    request: <ref *1> ClientRequest {
      _events: [Object: null prototype] {
        abort: [Function (anonymous)],
        aborted: [Function (anonymous)],
        connect: [Function (anonymous)],
        error: [Function (anonymous)],
        socket: [Function (anonymous)],
        timeout: [Function (anonymous)],
        finish: [Function: requestOnFinish]
      },
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        secureConnecting: false,
        _SNICallback: null,
        servername: 'checkout.paystack.com',
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object: null prototype],
        _eventsCount: 10,
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: 'checkout.paystack.com',
        _closeAfterHandlingError: false,
        _readableState: [ReadableState],
        _maxListeners: undefined,
        _writableState: [WritableState],
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: [TLSWrap],
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular *1],
        [Symbol(res)]: [TLSWrap],
        [Symbol(verified)]: true,
        [Symbol(pendingSession)]: null,
        [Symbol(async_id_symbol)]: 13,
        [Symbol(kHandle)]: [TLSWrap],
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]: null,
        [Symbol(kBuffer)]: null,
        [Symbol(kBufferCb)]: null,
        [Symbol(kBufferGen)]: null,
        [Symbol(kCapture)]: false,
        [Symbol(kSetNoDelay)]: false,
        [Symbol(kSetKeepAlive)]: true,
        [Symbol(kSetKeepAliveInitialDelay)]: 60,
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(connect-options)]: [Object]
      },
      _header: 'GET /sdmauj9g57afb2b HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'User-Agent: axios/1.3.4\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: checkout.paystack.com\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: Agent {
        _events: [Object: null prototype],
        _eventsCount: 2,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: 'https:',
        options: [Object: null prototype],
        requests: [Object: null prototype] {},
        sockets: [Object: null prototype],
        freeSockets: [Object: null prototype] {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        scheduling: 'lifo',
        maxTotalSockets: Infinity,
        totalSocketCount: 1,
        maxCachedSessions: 100,
        _sessionCache: [Object],
        [Symbol(kCapture)]: false
      },
      socketPath: undefined,
      method: 'GET',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/sdmauj9g57afb2b',
      _ended: true,
      res: IncomingMessage {
        _readableState: [ReadableState],
        _events: [Object: null prototype],
        _eventsCount: 4,
        _maxListeners: undefined,
        socket: [TLSSocket],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [Array],
        rawTrailers: [],
        joinDuplicateHeaders: undefined,
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 200,
        statusMessage: 'OK',
        client: [TLSSocket],
        _consuming: true,
        _dumped: false,
        req: [Circular *1],
        responseUrl: 'https://checkout.paystack.com/sdmauj9g57afb2b',
        redirects: [],
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: [Object],
        [Symbol(kHeadersCount)]: 32,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0
      },
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'checkout.paystack.com',
      protocol: 'https:',
      _redirectable: Writable {
        _writableState: [WritableState],
        _events: [Object: null prototype],
        _eventsCount: 3,
        _maxListeners: undefined,
        _options: [Object],
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 0,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function (anonymous)],
        _currentRequest: [Circular *1],
        _currentUrl: 'https://checkout.paystack.com/sdmauj9g57afb2b',
        [Symbol(kCapture)]: false
      },
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: true,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype] {
        accept: [Array],
        'user-agent': [Array],
        'accept-encoding': [Array],
        host: [Array]
      },
      [Symbol(errored)]: null,
      [Symbol(kUniqueHeaders)]: null
    },
    data: `<!doctype html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html" charset="utf-8"><title>Paystack Checkout</title><link rel="shortcut icon" type="image/x-icon" href="./favicon.png"/><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&subset=arabic&display=swap" rel="stylesheet"><meta name="robots" content="noindex"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2"><meta name="title" content="Paystack Checkout"><meta name="description" content="Make a payment online to one of Paystack's 60,000 merchants"><meta name="referrer" content="no-referrer-when-downgrade"><meta property="og:type" content="website"><meta property="og:locale" content="en_us"><meta property="og:url" content="https://checkout.paystack.com"><meta property="og:title" content="Make a payment online to one of Paystack's 60,000 merchants"><meta property="og:site_name" content="Paystack"><meta property="og:see_also" content="https://twitter.com/paystack"><meta property="og:see_also" content="https://www.facebook.com/PaystackHQ"><meta property="og:see_also" content="https://www.instagram.com/PaystackHQ"><meta property="og:see_also" content="https://github.com/PaystackHQ"><meta property="og:image" content="./static/opengraph.png"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@paystack"><meta name="twitter:creator" content="@paystack"><meta name="twitter:title" content="Make a payment online to one of Paystack's 60,000 merchants"><meta name="twitter:image" content="./static/opengraph.png"><meta name="theme-color" content="#ffffff"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="white"><meta name="apple-mobile-web-app-title" content="Paystack Checkout"><link rel="apple-touch-icon" href="./static/icons/icon152.png"><meta name="msapplication-TileImage" content="./static/icons/icon144.png"><meta name="msapplication-TileColor" content="#000000"><style>.root {\n` +
      '      position: relative;\n' +
      '      min-height: 100%;\n' +
      '      width: 100%;\n' +
      '      background: #fafafa;\n' +
      '    }\n' +
      '    @media all and (max-width: 529px) {\n' +
      '      .root {\n' +
      '        background: none;\n' +
      '      }\n' +
      '    }\n' +
      '    .root.root--in-iframe {\n' +
      '      background: none;\n' +
      '    }\n' +
      '    noscript {\n' +
      '      display: inherit;\n' +
      '      text-align: center;\n' +
      '      margin-top: 50px;\n' +
      '      color: #333;\n' +
      '    }\n' +
      '    noscript h1 {\n' +
      '      font-size: 1.3em;\n' +
      '    }\n' +
      '    noscript h1, noscript p {\n' +
      '      text-rendering: optimizeLegibility;\n' +
      "      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n" +
      "       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n" +
      '    }</style><script defer="defer" src="/js/runtime.f05d63f0.js"></script><script defer="defer" src="/js/date-fns.a4c4d247.js"></script><script defer="defer" src="/js/libphonenumber-js.5c12e852.js"></script><script defer="defer" src="/js/datadog/browser-rum.fc55e6b8.js"></script><script defer="defer" src="/js/gsap.99fa4224.js"></script><script defer="defer" src="/js/rollbar.6e95e6c4.js"></script><script defer="defer" src="/js/chunk-vendors.8d1e47c2.js"></script><script defer="defer" src="/js/app.ef3ae821.js"></script><link href="/css/app.12c319b6.css" rel="stylesheet"></head><body><div id="root" class="root"><div id="app"></div></div><noscript><h1>Sorry, your browser does not support Javascript!</h1><p>Please enable it to pay online with Paystack</p></noscript><script>function removeBackground() {\n' +
      "      const appLoader = document.getElementById('app-loader');\n" +
      '      if (appLoader) {\n' +
      '        appLoader.parentNode.removeChild(appLoader);\n' +
      '      }\n' +
      "      base.classList.add('base--no-bg');\n" +
      '    };</script><script>window.paystackEnvironment = "production";\n' +
      '    const isIframe = window.parent.location !== window.location;\n' +
      '    if (isIframe) {\n' +
      "      const root = document.getElementById('root');\n" +
      "      root.classList.add('root--in-iframe');\n" +
      '    }</script></body></html>'
  }