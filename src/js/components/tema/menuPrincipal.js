/**
 * Configuração do menu principal
 */

// Configuração do menu
const config = {
  categoriasMenu: 4,
  tituloMenu: "Todos os departamentos"
};

/**
 * Configura o menu principal
 */
export function configurarMenuPrincipal() {
  try {
    // Definir variável global para acesso por outros scripts
    window.menuPrincipal = config;
    
    console.log('Configuração do menu principal aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar menu principal:', error);
    return false;
  }
}