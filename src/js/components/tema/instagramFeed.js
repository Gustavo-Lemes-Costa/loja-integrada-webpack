/**
 * Configuração do feed do Instagram
 */

// Configuração do feed
const config = {
  ativa: false,
  usuario: "mercosulportasejanelas"
};

/**
 * Configura o feed do Instagram
 */
export function configurarInstagramFeed() {
  try {
    // Definir variável global para acesso por outros scripts
    window.instagramFeed = config;
    
    console.log('Configuração do feed do Instagram aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar feed do Instagram:', error);
    return false;
  }
}