/**
 * Configuração da barra de topo
 */

// Configuração da barra de topo
const config = {
  link: "https://linktr.ee/mercosulatendimento",
  texto: " Compre pelo Whatsapp (41) 99912-0921 ou clique aqui! "
};

/**
 * Configura a barra de topo
 */
export function configurarBarraTopo() {
  try {
    // Definir variável global para acesso por outros scripts
    window.barraTopo = config;
    
    console.log('Configuração da barra de topo aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar barra de topo:', error);
    return false;
  }
}