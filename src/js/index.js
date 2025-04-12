const test = 'Testing webpack loja integrada template...';
console.warn(test);

// Importar componentes
import { initWhatsAppButton } from './components/whatsapp';
import { initPromocaoButton } from './components/promocao';
import { removeInfoEstoque } from './components/estoque';
import { modificarPaginaCarrinho } from './components/carrinho';

// Inicializar componentes
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar botão WhatsApp
    initWhatsAppButton();
    
    // Inicializar botão de promoções
    initPromocaoButton();
    
    // Remover informações de estoque
    removeInfoEstoque();
    
    // Modificações na página de carrinho
    modificarPaginaCarrinho();
    
    // Inicializar outros componentes conforme necessário
});

// Hot module replacement para desenvolvimento
if (module.hot) {
    module.hot.accept();
}

