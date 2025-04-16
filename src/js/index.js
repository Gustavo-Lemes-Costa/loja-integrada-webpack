const test = 'Testing webpack loja integrada template...';
console.warn(test);

// Importar componentes
import { initWhatsAppButton } from './components/whatsapp';
import { initPromocaoButton } from './components/promocao.js';
import { removeInfoEstoque } from './components/estoque';
import { modificarPaginaCarrinho } from './components/carrinho.js';
import { inicializarTema } from './components/tema.js';
import { inicializarConfigTema } from './components/temaConfig.js';

// Inicializar componentes
document.addEventListener('DOMContentLoaded', () => {
    // Primeiro inicializa as configurações
    inicializarConfigTema();
    
    // Depois inicializa componentes que dependem dessas configurações
    inicializarTema();
    
    // Inicializar botão WhatsApp
    initWhatsAppButton();
    
    // Inicializar botão de promoções
    initPromocaoButton();
    
    // Remover informações de estoque
    removeInfoEstoque();
    
    // Modificações na página de carrinho
    modificarPaginaCarrinho();
    
    // Inicializar outros componentes conforme necessário

    // Modificar página de carrinho (quando for a página de carrinho)
    if (window.location.pathname.includes('/carrinho/')) {
        modificarPaginaCarrinho();
    }
});

// Hot module replacement para desenvolvimento
if (module.hot) {
    module.hot.accept();
}

