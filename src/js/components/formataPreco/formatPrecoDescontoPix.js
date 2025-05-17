/**
 * Componente para formatar preços com desconto de PIX
 * Implementa novo layout para exibição de preços em toda a loja
 */

let observer;

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
 */
function formatarPrecos(el) {
    // Check context
    const isCartPage = window.location.pathname.includes('/carrinho');
    const isCartItem = el.closest('.col-item-unit-price');
    
    let valorBase, valorOriginal;

    // Cart page pricing
    if (isCartPage && isCartItem) {
        valorBase = parseFloat(isCartItem.getAttribute('data-item-unit-valor'));
        valorOriginal = el.querySelector('.preco-venda') ? 
            parseFloat(el.querySelector('.preco-venda').innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
            null;
    } 
    // Main page and destaque-avista pricing
    else {
        const precoOriginal = el.querySelector('.preco-venda');
        const precoParcelado = el.querySelector('.preco-promocional.cor-principal, .preco-venda.cor-principal');
        
        valorOriginal = precoOriginal ? 
            parseFloat(precoOriginal.innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
            null;
            
        valorBase = precoParcelado ? 
            parseFloat(precoParcelado.innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
            valorOriginal;
    }

    if (valorBase) {
        const valorPix = valorBase - (valorBase * 0.10);

        let novoLayout = document.createElement("div");
        novoLayout.classList.add("novo-layout");

        if (valorOriginal) {
            let precoDe = document.createElement("div");
            precoDe.classList.add("preco-de");
            precoDe.innerHTML = `De: <strong><s>${formatarValor(valorOriginal)}</s></strong> por `;
            novoLayout.appendChild(precoDe);
        }

        let precoPixContainer = document.createElement("div");
        precoPixContainer.classList.add("preco-principal");
        precoPixContainer.innerHTML = `<strong>${formatarValor(valorPix)} no Pix</strong>`;
        novoLayout.appendChild(precoPixContainer);

        let precoParceladoContainer = document.createElement("div");
        precoParceladoContainer.classList.add("preco-parcelado");
        precoParceladoContainer.innerHTML = `ou <strong>${formatarValor(valorBase)}</strong> em <strong>8x</strong> de <strong>${formatarValor(valorBase / 8)}</strong>`;

        novoLayout.appendChild(precoParceladoContainer);

        el.innerHTML = "";
        el.appendChild(novoLayout);
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

        .preco-de .valor {
            color: #999999 !important;
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

        .preco-principal .valor {
            color: #0066cc !important; /* Blue color for main price */
        }

        .preco-parcelado {
            font-size: 16px !important;
            color: #3483fa !important;
            margin-top: 5px !important;
            margin-bottom: 3px !important;
            font-weight: 700 !important;
        }

        .preco-parcelado .valor {
            color: #333333 !important;
            font-weight: 600 !important;
        }

        .total-pix {
            font-size: 22px !important;
            color:#00a650 !important;
            font-weight: bold !important;
            margin-top: 10px !important;
            font-weight: 700 !important;
        }

        .total-pix .valor {
            color: #00a650 !important; /* Green color for PIX price */
            font-weight: 700 !important;
        }

        /* Mobile styles */
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

        .preco-produto {
            margin: 10px 0;
        }

        .preco-de {
            font-size: 14px;
            color: #666;
        }

        .preco-de strong s {
            color: #999;
        }

        .preco-principal {
            font-size: 24px;
            margin: 5px 0;
        }

        .preco-principal strong {
            color: #00a650 !important; /* Green for PIX */
        }

        .preco-parcelado {
            font-size: 16px;
            margin-top: 5px;
            color: #666666; /* Gray for regular text */
        }

        .preco-parcelado strong {
            color: #3483fa !important; /* Blue for price values */
            font-weight: 700 !important;
        }

        .preco-principal strong {
            color: #00a650 !important; /* Green for PIX price */
            font-weight: 700 !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Configura o observador para monitorar mudanças no DOM
 */
function configurarObservador() {
    // Observer setup
    observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) {
                        const precoElements = node.querySelectorAll('.preco-produto, .destaque-avista');
                        precoElements.forEach(el => {
                            if (!el.querySelector('.novo-layout')) {
                                formatarPrecos(el);
                            }
                        });
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Formata todos os preços existentes na página
 */
function formatarPrecosExistentes() {
    document.querySelectorAll('.preco-produto, .destaque-avista').forEach(el => {
        if (!el.querySelector('.novo-layout')) {
            formatarPrecos(el);
        }
    });
}

/**
 * Configura a verificação periódica para formatar preços recém-carregados
 */
function configurarVerificacaoPeriodica() {
    setInterval(() => {
        formatarPrecosExistentes();
    }, 1000);
}

/**
 * Inicializa o componente de formatação de preços
 */
export function inicializarFormataPrecos() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injetarEstilos();
            configurarObservador();
            formatarPrecosExistentes();
            configurarVerificacaoPeriodica();
        });
    } else {
        injetarEstilos();
        configurarObservador();
        formatarPrecosExistentes();
        configurarVerificacaoPeriodica();
    }
    
    return true;
}