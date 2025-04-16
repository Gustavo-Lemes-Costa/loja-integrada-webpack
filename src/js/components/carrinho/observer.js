/**
 * Configura um observer para detectar mudanças no DOM e aplicar modificações
 * @param {Function} callback - Função a ser chamada quando detectar mudanças
 * @param {number} [timeout=10000] - Tempo em ms para desconectar o observer
 * @returns {MutationObserver} Observer configurado
 */
export function configurarObservadorCarrinho(callback, timeout = 10000) {
  let observerAtivo = true;
  let ultimaModificacao = Date.now();
  
  const observer = new MutationObserver((mutations) => {
    // Evitar execuções muito frequentes
    if (!observerAtivo) return;
    
    const agora = Date.now();
    if (agora - ultimaModificacao < 500) return;
    
    observerAtivo = false;
    ultimaModificacao = agora;
    
    // Executar callback
    callback();
    
    // Reativar após delay
    setTimeout(() => {
      observerAtivo = true;
    }, 1000);
  });
  
  // Iniciar observação
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributeFilter: ['class']
  });
  
  // Configurar desconexão automática
  if (timeout > 0) {
    setTimeout(() => {
      observer.disconnect();
      console.log(`Observer desconectado após ${timeout/1000} segundos`);
    }, timeout);
  }
  
  return observer;
}