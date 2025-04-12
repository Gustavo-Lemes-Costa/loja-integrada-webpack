/**
 * Função para adicionar botão personalizado de OFERTAS DA SEMANA
 * Substitui o item de oferta padrão por um botão estilizado
 */
export function initPromocaoButton() {
  // Função para substituir o elemento padrão pelo botão personalizado
  function replaceLiWithButton() {
    // Seleciona o elemento <li> que você deseja substituir
    const oldLi = document.querySelector('.item-oferta');

    if (oldLi) {
      // Cria um novo elemento <li>
      const newLi = document.createElement('li');

      // Cria um novo elemento <button> e adiciona ao novo <li>
      const newButton = document.createElement('button');
      newButton.textContent = 'OFERTAS DA SEMANA';
      newButton.className = 'black-friday-button';
      newButton.onclick = function() {
        window.location.href = 'https://www.mercosulvendas.com.br/super-ofertas-do-mes';
      };
      newLi.appendChild(newButton);

      // Substitui o elemento <li> antigo pelo novo <li>
      oldLi.parentNode.replaceChild(newLi, oldLi);
      
      // Indica que a substituição foi bem-sucedida
      return true;
    }
    
    // Elemento não encontrado ainda
    return false;
  }

  // Tenta substituir imediatamente
  if (!replaceLiWithButton()) {
    // Se não conseguiu, configura um observador para monitorar mudanças no DOM
    const observer = new MutationObserver(function(mutations) {
      if (replaceLiWithButton()) {
        // Se conseguiu substituir, desconecta o observer
        observer.disconnect();
      }
    });
    
    // Configura o observer para todo o documento
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
    
    // Adiciona um backup com setTimeout (limita a 10 tentativas = 5 segundos)
    let tentativas = 0;
    const maxTentativas = 10;
    
    function tentarNovamente() {
      if (tentativas >= maxTentativas) {
        return; // Desiste após o número máximo de tentativas
      }
      
      if (replaceLiWithButton()) {
        observer.disconnect(); // Desconecta o observer se bem-sucedido
      } else {
        tentativas++;
        setTimeout(tentarNovamente, 500);
      }
    }
    
    // Inicia as tentativas
    setTimeout(tentarNovamente, 500);
  }

  console.log("Botão de promoção adicionado com sucesso!");
}