/**
 * Configuração da newsletter
 */

// Configuração da newsletter
const config = {
  texto: 'Tudo em Portas e Janelas você encontra aqui! Cadastre-se agora',
  cupom: ' '
};

/**
 * Configura a newsletter
 */
export function configurarNewsletter() {
  try {
    // Definir variável global para acesso por outros scripts
    window.newsletter = config;
    
    console.log('Configuração da newsletter aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar newsletter:', error);
    return false;
  }
}