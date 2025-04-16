/**
 * Configuração dos horários de operação
 */

/**
 * Configura os horários de operação
 */
export function configurarOperacaoHorarios() {
  try {
    // Usando jQuery para modificar o horário de operação
    $(document).ready(function() {
      $('#operation p').html('Seg a Sex das 8:30h às 18:00h <br> Sab das 9:00h às 13:00h');
    });
    
    console.log('Configuração dos horários de operação aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar horários de operação:', error);
    return false;
  }
}