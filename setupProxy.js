const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Função para modificar conteúdo da resposta para substituir URLs absolutas
  const modifyResponse = (proxyRes, req, res) => {
    // Permitir CORS
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    
    // Remover headers de segurança que podem causar problemas
    delete proxyRes.headers['content-security-policy'];
    delete proxyRes.headers['x-frame-options'];
    
    // Verificar se a resposta é HTML
    if (proxyRes.headers['content-type'] && 
        proxyRes.headers['content-type'].includes('text/html')) {
      
      let body = '';
      proxyRes.on('data', (chunk) => {
        body += chunk;
      });
      
      proxyRes.on('end', () => {
        // Substituir URLs absolutas por relativas
        body = body.replace(/https:\/\/www\.mercosulvendas\.com\.br\//g, '/');
        
        // Corrigir scripts que usam const (sintaxe ES6) se necessário
        body = body.replace(/const\s+/g, 'var ');
        
        // Ajustar scripts de analytics que podem estar causando problemas
        body = body.replace(/(www\.googletagmanager\.com|analytics\.google\.com)/g, 
                           'localhost:9999'); // URL inválida para bloquear requisições
        
        // Remover scripts de Hotjar (está causando erros)
        body = body.replace(/<script.*?hotjar.*?<\/script>/g, '');
        
        // Injetar script para ajudar no debug
        body = body.replace('</body>', `
          <script>
            console.log("Página do carrinho carregada via proxy local");
            // Corrigir erros de elementos nulos
            window.addEventListener('error', function(e) {
              if (e.message.includes("Cannot read properties of null")) {
                console.warn("Erro de elemento nulo evitado:", e.message);
                e.preventDefault();
              }
            });
          </script>
          </body>
        `);
        
        res.end(body);
      });
    }
  };

  // Proxy principal para a página de carrinho
  app.use(
    '/carrinho',
    createProxyMiddleware({
      target: 'https://www.mercosulvendas.com.br',
      changeOrigin: true,
      secure: false,
      selfHandleResponse: true, // Importante para modificar a resposta
      onProxyRes: modifyResponse
    })
  );
  
  // Outros proxies necessários
  const simpleProxy = {
    target: 'https://www.mercosulvendas.com.br',
    changeOrigin: true,
    secure: false
  };
  
  // Proxy para checkout
  app.use('/checkout', createProxyMiddleware(simpleProxy));
  
  // Proxy para API
  app.use('/api', createProxyMiddleware(simpleProxy));
  
  // Proxy para arquivos estáticos
  app.use('/arquivos', createProxyMiddleware(simpleProxy));
  
  // Proxy para imagens
  app.use('/img', createProxyMiddleware(simpleProxy));
  
  // Proxy para CSS
  app.use('/css', createProxyMiddleware(simpleProxy));
  
  // Proxy para JS
  app.use('/js', createProxyMiddleware(simpleProxy));
  
  // Proxy genérico para outros recursos
  app.use(
    '**/*.png',
    createProxyMiddleware({
      target: 'https://www.mercosulvendas.com.br',
      changeOrigin: true,
      secure: false,
      pathRewrite: (path) => {
        // Remover o domínio localhost da URL, se presente
        return path.replace(/^\/mercosulvendas\.localhost:3000/, '');
      }
    })
  );
  
  // Proxy para recursos estáticos genéricos
  app.use(
    '**/*.jpg',
    createProxyMiddleware(simpleProxy)
  );
};