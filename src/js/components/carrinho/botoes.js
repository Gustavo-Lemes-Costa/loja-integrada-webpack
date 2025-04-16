import { selecionarElementos, encontrarElementosPorTexto } from '../../utils/dom.js';

// Inicializa o registro de estado global se não existir
function inicializarEstado() {
  window.mercosulModificacoesAplicadas = window.mercosulModificacoesAplicadas || {
    botoesModificados: new Set()
  };
  return window.mercosulModificacoesAplicadas;
}

/**
 * Modifica o botão Finalizar Compra
 * @returns {number} Número de botões modificados
 */
export function modificarBotaoFinalizarCompra() {
  const estado = inicializarEstado();
  
  // Seletores para encontrar o botão finalizar compra
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
  
  // Encontrar via seletores
  let botoesEncontrados = selecionarElementos(seletores);
  
  // Encontrar via texto
  const botoesPorTexto = encontrarElementosPorTexto(
    'button, a.botao, input[type="submit"]', 
    ['Finalizar', 'finalizar']
  );
  
  // Juntar todos os resultados e remover duplicatas
  botoesEncontrados = [...new Set([...botoesEncontrados, ...botoesPorTexto])];
  
  // Filtrar apenas botões não modificados
  const botoesNovos = botoesEncontrados.filter(botao => 
    !botao.hasAttribute('data-modificado-por') && 
    !estado.botoesModificados.has(botao)
  );
  
  if (botoesNovos.length === 0) {
    return 0;
  }
  
  // Aplicar modificações
  botoesNovos.forEach(botao => {
    try {
      // Adicionar classe
      botao.classList.add('botao-finalizar-compra-modificado');
      
      // Aplicar estilos inline para garantir
      botao.style.backgroundColor = '#28a745';
      botao.style.color = 'white';
      botao.style.borderColor = '#218838';
      
      // Marcar como modificado
      botao.setAttribute('data-modificado-por', 'script-mercosul');
      estado.botoesModificados.add(botao);
    } catch (error) {
      console.error('Erro ao modificar botão:', error);
    }
  });
  
  return botoesNovos.length;
}