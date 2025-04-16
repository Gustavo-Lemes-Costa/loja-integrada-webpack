/**
 * Configuração da oferta regressiva
 */

// Configuração da oferta regressiva
const config = {
  menu: true,
  listagem: true,
  nomeCategoria: "Super Ofertas",
  dataFinal: "04/30/2025",
  tituloSubmenu: "Ofertas Selecionadas da Semana",
  subTituloSubmenu: "Ofertas de aniversário aproveite! ATÉ 30% OFF"
};

/**
 * Configura a oferta regressiva
 */
export function configurarOfertaRegressiva() {
  try {
    // Definir variável global para acesso por outros scripts
    window.ofertaRegressiva = config;
    
    console.log('Configuração da oferta regressiva aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar oferta regressiva:', error);
    return false;
  }
}