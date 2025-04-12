/**
 * Função para aplicar modificações estéticas na página de carrinho
 */
export function modificarPaginaCarrinho() {
  // Verifica se estamos na página de carrinho
  if (window.location.pathname.includes('/carrinho/index')) {
    console.log('Aplicando modificações estéticas na página de carrinho');
    
    // Injetar o CSS diretamente no head, somente se ainda não existir
    if (!document.getElementById('mercosul-cart-custom-styles')) {
      const style = document.createElement('style');
      style.id = 'mercosul-cart-custom-styles';
      style.innerHTML = `
        /* Estilos para elementos do carrinho */
        .cabecalho-carrinho {
          background-color: #f5f5f5 !important;
          padding: 20px !important;
          border-radius: 8px !important;
          margin-bottom: 20px !important;
        }
        
        .tabela-carrinho {
          border-radius: 8px !important;
          overflow: hidden !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
        }
        
        /* Estilo para o botão finalizar compra */
        .botao-finalizar-compra-modificado {
          background-color: #28a745 !important; /* Verde - cor original */
          color: white !important;
          border-color: #218838 !important;
          transition: all 0.3s ease !important;
        }
        
        .botao-finalizar-compra-modificado:hover {
          background-color: #218838 !important;
          transform: scale(1.05) !important;
        }
      `;
      document.head.appendChild(style);
      console.log('Estilos injetados diretamente no <head>');
    }
    
    // Flag global para controlar a aplicação
    window.mercosulModificacoesAplicadas = window.mercosulModificacoesAplicadas || {
      botoesModificados: new Set()
    };
    
    // Função específica para modificar o botão Finalizar Compra diretamente
    function modificarBotaoFinalizarCompra() {
      // Usar vários seletores diferentes para tentar encontrar o botão
      const seletores = [
        '.botao.principal.grande.finalizar-compra',
        '.botao.principal.grande[title*="Finalizar"]',
        '.botao.principal.grande[value*="Finalizar"]',
        '.carrinho-checkout .botao.principal.grande',
        '#finalizarCompra',
        'form .principal.grande.right',
        'button.principal.grande',
        'input[type="submit"].principal.grande',
        'a.botao.principal.grande',
        '.right .botao.principal'
      ];
      
      // Buscar todos os botões que possam ser o botão de finalizar compra
      let botoesEncontrados = [];
      seletores.forEach(seletor => {
        const elementos = document.querySelectorAll(seletor);
        if (elementos.length > 0) {
          elementos.forEach(el => botoesEncontrados.push(el));
        }
      });
      
      // Tentar também encontrar por texto
      document.querySelectorAll('button, a.botao, input[type="submit"]').forEach(el => {
        const texto = el.textContent || el.value || el.title || '';
        if (texto.includes('Finalizar') || texto.includes('finalizar')) {
          botoesEncontrados.push(el);
        }
      });
      
      // Remover duplicatas
      botoesEncontrados = [...new Set(botoesEncontrados)];
      
      // Verificar se há botões novos que ainda não foram modificados
      let botoesNovos = botoesEncontrados.filter(botao => 
        !botao.hasAttribute('data-modificado-por') && 
        !window.mercosulModificacoesAplicadas.botoesModificados.has(botao)
      );
      
      // Se não houver botões novos, não fazer nada
      if (botoesNovos.length === 0) {
        return;
      }
      
      console.log(`Modificando ${botoesNovos.length} botões no carrinho`);
      
      // Aplicar modificações apenas em botões que ainda não foram modificados
      botoesNovos.forEach((botao, index) => {
        try {
          // Adicionar classe para aplicação de estilo
          botao.classList.add('botao-finalizar-compra-modificado');
          
          // Aplicar estilo diretamente no elemento para garantir
          botao.style.backgroundColor = '#28a745';  // Verde - cor original
          botao.style.color = 'white';
          botao.style.borderColor = '#218838';
          
          // Adicionar atributo data para identificação
          botao.setAttribute('data-modificado-por', 'script-mercosul');
          
          // Registrar o botão como modificado
          window.mercosulModificacoesAplicadas.botoesModificados.add(botao);
        } catch (error) {
          console.error(`Erro ao modificar botão:`, error);
        }
      });
    }
    
    // Executar a modificação do botão uma vez
    modificarBotaoFinalizarCompra();
    
    // Configurar um MutationObserver com flags para evitar loop infinito
    let observerAtivo = true;
    let ultimaModificacao = Date.now();
    
    const observer = new MutationObserver((mutations) => {
      // Evitar execuções muito frequentes
      if (!observerAtivo) return;
      
      const agora = Date.now();
      if (agora - ultimaModificacao < 500) return; // Limitar a uma vez a cada 500ms
      
      observerAtivo = false;
      ultimaModificacao = agora;
      
      // Procurar novos botões
      modificarBotaoFinalizarCompra();
      
      // Reativar o observer após um pequeno delay
      setTimeout(() => {
        observerAtivo = true;
      }, 1000);
    });
    
    // Iniciar observação com opções mais restritas
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributeFilter: ['class'] // Observar apenas mudanças de classe
    });
    
    // Parar de observar após 10 segundos para economizar recursos
    setTimeout(() => {
      observer.disconnect();
      console.log('Observer desconectado após 10 segundos');
    }, 10000);
  }
}