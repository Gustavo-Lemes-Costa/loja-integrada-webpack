/**
 * Configuração da mensagem de pagamento via PIX
 */

// Configuração do texto de PIX
const config = {
  texto: "Comprou, Pagou no Pix, Economizou!"
};

/**
 * Configura a mensagem de PIX
 */
export function configurarPix() {
  try {
    // Definir variável global para acesso por outros scripts
    window.pix = config;
    
    console.log('Configuração de PIX aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar PIX:', error);
    return false;
  }
}