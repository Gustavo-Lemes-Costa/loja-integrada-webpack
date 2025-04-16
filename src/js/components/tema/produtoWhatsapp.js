/**
 * Configuração do botão de WhatsApp nos produtos
 */

// Configuração do botão WhatsApp
const config = {
  mensagem: "Fique à Vontade! Nossas Soluções Estão a Um Clique de Distância!.",
  textoBotao: "Pedido via WhatsApp",
  ativaListagem: 'sim',
  ativaProduto: 'sim'
};

/**
 * Configura o botão de WhatsApp em produtos e listagens
 */
export function configurarProdutoWhatsapp() {
  try {
    // Definir variável global para acesso por outros scripts
    window.produtoWhatsapp = config;
    
    console.log('Configuração de WhatsApp nos produtos aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar WhatsApp nos produtos:', error);
    return false;
  }
}