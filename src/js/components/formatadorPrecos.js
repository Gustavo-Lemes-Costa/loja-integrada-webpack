/**
 * Formatador de Preços Unificado
 * Combina todas as funcionalidades de formatação de preços em um único componente
 * Implementa desconto de 10% para PIX e parcelamento em 8x
 * Evita execução na página do carrinho
 */

// Variáveis de controle global para o módulo
let observer = null;
let intervalId = null;
const elementosProcessados = new WeakSet();
let formatadosTotal = 0;
let verificacoesSemNovos = 0;

/**
 * Inicializa o componente de formatação de preços
 * @returns {boolean} - Se a inicialização foi bem-sucedida
 */
export function inicializarFormataPrecos() {
    // Verificação robusta da página do carrinho
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index') ||
        window.location.href.includes('/carrinho')) {
        console.log('Página de carrinho detectada - formatador de preços não será executado');
        return false;
    }
    
    // Para compatibilidade com código existente
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciarFormatadorOtimizado);
    } else {
        iniciarFormatadorOtimizado();
    }
    
    return true;
}

// Aliases para compatibilidade com código existente
export const inicializarFormatadorPrecos = inicializarFormataPrecos;

/**
 * Inicia o formatador de preços com otimizações
 */
function iniciarFormatadorOtimizado() {
    // Segunda verificação para garantir que não estamos na página do carrinho
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index') ||
        window.location.href.includes('/carrinho')) {
        return;
    }
    
    console.log('Inicializando formatador de preços unificado');
    
    injetarEstilos();
    const formatadosInicial = processarElementos();
    console.log(`Formatação inicial: ${formatadosInicial} elementos de preço formatados`);
    
    configurarObservadorOtimizado();
    iniciarVerificacaoPeriodica();
    
    // Garantir que intervalos sejam limpos após algum tempo
    setTimeout(() => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        console.log('Formatador de preços finalizado por tempo limite (30s)');
    }, 30000);
}

/**
 * Formata o valor para exibição em reais
 * @param {number} valor - O valor a ser formatado
 * @returns {string} - Valor formatado como moeda
 */
function formatarValor(valor) {
    return valor.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Formata os preços de um elemento
 * @param {HTMLElement} el - Elemento contendo preços
 * @returns {boolean} - Se o elemento foi formatado com sucesso
 */
function formatarPrecos(el) {
    // Proteção contra carrinho - verificação tripla
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index') ||
        window.location.href.includes('/carrinho')) {
        return false;
    }
    
    // Skip se já formatado
    if (elementosProcessados.has(el) || el.querySelector('.novo-layout')) {
        return false;
    }
    
    // Registrar este elemento como processado
    elementosProcessados.add(el);
    
    let valorBase, valorOriginal;

    try {
        // Obter preços do elemento
        const precoOriginal = el.querySelector('.preco-venda');
        const precoParcelado = el.querySelector('.preco-promocional.cor-principal, .preco-venda.cor-principal');
        
        valorOriginal = precoOriginal ? 
            parseFloat(precoOriginal.innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
            null;
            
        valorBase = precoParcelado ? 
            parseFloat(precoParcelado.innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
            valorOriginal;

        // Se não conseguiu extrair um valor válido, não seguir
        if (!valorBase || isNaN(valorBase)) {
            return false;
        }

        // Calcular desconto de 10% para PIX
        const valorPix = valorBase - (valorBase * 0.10);

        // Criar o novo layout de preços
        let novoLayout = document.createElement("div");
        novoLayout.classList.add("novo-layout");

        // Mostrar preço original se for diferente do preço base
        if (valorOriginal && valorOriginal !== valorBase) {
            let precoDe = document.createElement("div");
            precoDe.classList.add("preco-de");
            precoDe.innerHTML = `De: <strong><s>${formatarValor(valorOriginal)}</s></strong> por `;
            novoLayout.appendChild(precoDe);
        }

        // Adicionar preço com desconto PIX
        let precoPixContainer = document.createElement("div");
        precoPixContainer.classList.add("preco-principal");
        precoPixContainer.innerHTML = `<strong>${formatarValor(valorPix)} no Pix</strong>`;
        novoLayout.appendChild(precoPixContainer);

        // Adicionar informação de parcelamento em 8x
        let precoParceladoContainer = document.createElement("div");
        precoParceladoContainer.classList.add("preco-parcelado");
        precoParceladoContainer.innerHTML = `ou <strong>${formatarValor(valorBase)}</strong> em <strong>8x</strong> de <strong>${formatarValor(valorBase / 8)}</strong>`;
        novoLayout.appendChild(precoParceladoContainer);

        // Substituir o conteúdo original
        el.innerHTML = "";
        el.appendChild(novoLayout);
        
        return true;
    } catch (error) {
        console.error('Erro ao formatar preço:', error);
        return false;
    }
}

/**
 * Insere os estilos CSS necessários para a formatação de preços
 */
function injetarEstilos() {
    const style = document.createElement('style');
    style.textContent = `
        .novo-layout {
            font-family: Arial, sans-serif !important;
            line-height: 1.3 !important;
        }

        .preco-de {
            color: #888 !important;
            font-size: 14px !important;
            text-decoration: line-through !important;
            display: block !important;
            margin-bottom: 3px !important;
        }

        .preco-principal {
            font-size: 28px !important;
            font-weight: bold !important;
            color: #333333 !important;
            display: block !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
            font-weight: 700 !important;
        }

        .preco-principal strong {
            color: #00a650 !important; /* Verde para preço PIX */
        }

        .preco-parcelado {
            font-size: 16px !important;
            color: #666666 !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
        }

        .preco-parcelado strong {
            color: #3483fa !important; /* Azul para valores parcelados */
            font-weight: 700 !important;
        }

        /* Estilos para mobile */
        @media (max-width: 600px) {
            .preco-principal {
                font-size: 24px !important;
            }
            .preco-parcelado {
                font-size: 14px !important;
            }
            .preco-de {
                font-size: 10px !important;
            }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Configura o observador para monitorar mudanças no DOM de forma otimizada
 */
function configurarObservadorOtimizado() {
    // Não configurar o observador na página do carrinho
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index')) {
        return;
    }
    
    observer = new MutationObserver((mutations) => {
        // Verificação no callback do observer
        if (window.location.pathname.includes('/carrinho')) {
            return;
        }
        
        let novosPrecosDetectados = false;
        
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Elemento DOM
                        // Verificar se o novo nó contém elementos de preço ou é um preço
                        const ehPreco = node.classList && 
                            (node.classList.contains('preco-produto') || 
                             node.classList.contains('destaque-avista'));
                            
                        const contemPrecos = node.querySelectorAll && 
                            node.querySelectorAll('.preco-produto, .destaque-avista').length > 0;
                        
                        if (ehPreco || contemPrecos) {
                            novosPrecosDetectados = true;
                        }
                    }
                });
            }
        });
        
        // Processar apenas se detectar novos preços
        if (novosPrecosDetectados) {
            processarElementos();
        }
    });
    
    // Iniciar observer otimizado
    observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: false,
        characterData: false
    });
}

/**
 * Processa todos os elementos de preço não formatados da página
 * @returns {number} - Número de elementos formatados nesta chamada
 */
function processarElementos() {
    // Verificação para garantir que não estamos na página do carrinho
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index')) {
        return 0;
    }
    
    const elementos = document.querySelectorAll('.preco-produto:not(.processado), .destaque-avista:not(.processado)');
    
    if (elementos.length > 0) {
        let formatadosNessaRodada = 0;
        
        elementos.forEach(el => {
            if (formatarPrecos(el)) {
                el.classList.add('processado');
                formatadosNessaRodada++;
                formatadosTotal++;
            }
        });
        
        if (formatadosNessaRodada > 0) {
            console.log(`Formatados ${formatadosNessaRodada} novos elementos de preço (total: ${formatadosTotal})`);
        }
        
        return formatadosNessaRodada;
    }
    
    return 0;
}

/**
 * Inicia a verificação periódica para elementos que possam ter sido adicionados 
 * sem disparar o MutationObserver
 */
function iniciarVerificacaoPeriodica() {
    const MAX_VERIFICACOES = 5;
    
    intervalId = setInterval(() => {
        const formatados = processarElementos();
        
        if (formatados === 0) {
            verificacoesSemNovos++;
            
            // Se não encontrar novos elementos por várias verificações, diminuir frequência
            if (verificacoesSemNovos >= MAX_VERIFICACOES) {
                clearInterval(intervalId);
                
                // Reduzir frequência das verificações
                intervalId = setInterval(() => {
                    const aindaFormatados = processarElementos();
                    
                    // Parar completamente se não achar mais elementos para formatar após 10 verificações
                    if (aindaFormatados === 0) {
                        verificacoesSemNovos++;
                        
                        if (verificacoesSemNovos >= MAX_VERIFICACOES + 10) {
                            clearInterval(intervalId);
                            intervalId = null;
                            if (observer) {
                                observer.disconnect();
                                observer = null;
                            }
                            console.log('Formatador de preços finalizado após todos os elementos terem sido processados');
                        }
                    } else {
                        verificacoesSemNovos = 0;
                    }
                }, 3000); // Verificar a cada 3 segundos
                
                console.log('Reduzindo frequência de verificação do formatador de preços');
            }
        } else {
            verificacoesSemNovos = 0;
        }
    }, 1000);
}

/**
 * Formata um preço individual (para uso externo)
 * @param {HTMLElement} elemento - O elemento de preço para formatar 
 * @returns {boolean} - Se a formatação foi bem-sucedida
 */
export function formatarPrecoIndividual(elemento) {
    // Verificação robusta da página do carrinho
    if (window.location.pathname.includes('/carrinho') || 
        window.location.pathname.includes('/carrinho/index')) {
        return false;
    }
    
    return formatarPrecos(elemento);
}

// Inicialização automática se o script for carregado diretamente
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        // Verificação adicional para garantir funcionamento adequado
        if (!window.location.pathname.includes('/carrinho') && 
            !window.location.pathname.includes('/carrinho/index')) {
            inicializarFormataPrecos();
        }
    });
}