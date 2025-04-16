/**
 * Configuração do contador regressivo
 */

// Configuração do contador
const config = {
  createTimerValue: "04/30/2025"
};

/**
 * Configura o contador regressivo
 */
export function configurarCounterTime() {
  try {
    // Definir variável global para acesso por outros scripts
    window.counterTime = config;
    
    console.log('Configuração do contador regressivo aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar contador regressivo:', error);
    return false;
  }
}