/**
 * Configuração da barra de topo
 */

// Configuração da barra de topo
const config = {
  link: "https://linktr.ee/mercosulatendimento",
  texto: " Compre pelo Whatsapp clicando aqui!!! "
};

/**
 * Configura a barra de topo
 */
export function configurarBarraTopo() {
  try {
    // Remove qualquer elemento antigo com a classe .top-header para evitar efeito fantasma
    const removeTopHeader = () => {
      document.querySelectorAll('.top-header').forEach(el => el.remove());
    };
    // Remove imediatamente
    removeTopHeader();
    // Observer para remoção dinâmica
    const observer = new MutationObserver(removeTopHeader);
    observer.observe(document.body, { childList: true, subtree: true });
    // Fallback: remove a cada 500ms por 10s
    let tentativas = 0;
    const maxTentativas = 20;
    const interval = setInterval(() => {
      removeTopHeader();
      tentativas++;
      if (tentativas >= maxTentativas) clearInterval(interval);
    }, 500);

    // Cria e insere a barra de topo personalizada
    const criarBarraTopo = () => {
      // Detecta se está na página do carrinho e em desktop
      const isCarrinho = window.location.pathname.includes('/carrinho');
      const isDesktop = window.innerWidth >= 1024;
      // Remove barra antiga se já existir
      const antiga = document.getElementById('barra-topo-personalizada');
      if (antiga) antiga.remove();
      // Só insere a barra se NÃO estiver no carrinho em desktop
      if (!(isCarrinho && isDesktop)) {
        const barra = document.createElement('div');
        barra.id = 'barra-topo-personalizada';
        barra.style.cssText = `
          width: 100%;
          background: #1e7e34;
          color: #fff;
          text-align: center;
          height: 50px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 500;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          box-shadow: 0 2px 6px rgba(0,0,0,0.07);
        `;
        barra.innerHTML = `<a href="${config.link}" target="_blank" rel="noopener" style="color: #fff; text-decoration: none;">${config.texto}</a>`;
        document.body.prepend(barra);
        document.body.style.paddingTop = '50px';
      } else {
        // Remove padding se não for para mostrar a barra
        document.body.style.paddingTop = '';
      }
    };
    criarBarraTopo();
    // Atualiza ao redimensionar (ex: usuário muda tamanho da janela)
    window.addEventListener('resize', criarBarraTopo);
    // Definir variável global para acesso por outros scripts
    window.barraTopo = config;
    
    console.log('Configuração da barra de topo aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar barra de topo:', error);
    return false;
  }
}