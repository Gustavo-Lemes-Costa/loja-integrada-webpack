import { injetarEstilo } from '../../utils/dom.js';

/**
 * Estilos CSS para o carrinho
 */
const ESTILOS_CARRINHO = `
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

/**
 * Aplica os estilos CSS ao carrinho
 * @returns {boolean} Sucesso da operação
 */
export function aplicarEstilosCarrinho() {
  const estilo = injetarEstilo('mercosul-cart-custom-styles', ESTILOS_CARRINHO);
  if (estilo) {
    console.log('Estilos do carrinho injetados no <head>');
    return true;
  }
  return false;
}