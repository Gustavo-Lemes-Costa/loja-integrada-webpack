/**
 * Módulo principal para personalização do carrinho
 * Orquestra os diferentes componentes e funcionalidades
 */
import { aplicarEstilosCarrinho } from './carrinho/estilos.js';
import { modificarBotaoFinalizarCompra } from './carrinho/botoes.js';
import { configurarObservadorCarrinho } from './carrinho/observer.js';
import { melhorarLayoutCarrinho } from './carrinho/layout.js';

/**
 * Função principal que aplica todas as modificações ao carrinho
 */
export function modificarPaginaCarrinho() {
  // Verificar se estamos na página de carrinho
  if (!window.location.pathname.includes('/carrinho/index')) {
    return;
  }
  
  console.log('Iniciando personalização do carrinho');
  
  // 1. Aplicar estilos CSS
  aplicarEstilosCarrinho();
  
  // 2. Melhorar o layout geral
  melhorarLayoutCarrinho();
  
  // 3. Modificar os botões
  const botoesModificados = modificarBotaoFinalizarCompra();
  console.log(`${botoesModificados} botões modificados inicialmente`);
  
  // 4. Configurar observer para detectar mudanças dinâmicas
  configurarObservadorCarrinho(() => {
    // Reaplica modificações quando o DOM muda
    const botoesModificados = modificarBotaoFinalizarCompra();
    if (botoesModificados > 0) {
      console.log(`${botoesModificados} novos botões modificados após mudança no DOM`);
    }
  });
}