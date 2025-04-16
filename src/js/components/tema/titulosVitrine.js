/**
 * Configuração dos títulos da vitrine
 */

// Configuração dos títulos
const config = {
  destaques: "Ofertas Selecionadas de Aniversário Aproveite Agora!",
  mais_vendidos: "mais vendidos",
  lancamentos: "Novidade no Site"
};

/**
 * Configura os títulos da vitrine
 */
export function configurarTitulosVitrine() {
  try {
    // Definir variável global para acesso por outros scripts
    window.titulosVitrine = config;
    
    console.log('Configuração dos títulos da vitrine aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar títulos da vitrine:', error);
    return false;
  }
}