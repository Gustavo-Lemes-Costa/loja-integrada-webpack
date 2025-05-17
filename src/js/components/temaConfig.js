/**
 * Configurações do tema da loja
 * Este arquivo declara todas as variáveis globais necessárias para os componentes do tema
 */

// WhatsApp nos produtos
window.produtoWhatsapp = {
  "mensagem": "Fique à Vontade! Nossas Soluções Estão a Um Clique de Distância!.",
  "textoBotao": "Pedido via WhatsApp",
  "ativaListagem": 'sim',
  "ativaProduto": 'sim'
};

// Mensagem do PIX
window.pix = {
  "texto": "Comprou, Pagou no Pix, Economizou!"
};

// Configuração do contador regressivo
window.counterTime = {
  "createTimerValue": "04/30/2025"
};

// Configuração da oferta regressiva
window.ofertaRegressiva = {
  "menu": true,
  "listagem": true,
  "nomeCategoria": "Super Ofertas",
  "dataFinal": "04/30/2025",
  "tituloSubmenu": "Ofertas Selecionadas da Semana",
  "subTituloSubmenu": "Ofertas de aniversário aproveite! ATÉ 30% OFF"
};

// Configuração dos títulos da vitrine
window.titulosVitrine = {
  "destaques": "Ofertas Selecionadas de Aniversário Aproveite Agora!",
  "mais vendidos": "mais vendidos",
  "lancamentos": "Novidade no Site"
};

// Configuração da newsletter
window.newsletter = {
  texto: 'Tudo em Portas e Janelas você encontra aqui! Cadastre-se agora',
  cupom: ' '
};

// Configuração das avaliações
window.avaliacoes = [
  {
    "nome": "Carlos Pietro",
    "comentario": "Encontrei a loja pela internet, a janela q eu queria não havia pronta entrega, seria um prazo de 20 dias +- para retirar em loja, mesmo assim fiz a compra pelo site e com 5 dias após a compra fui surpreendida com a entrega delas em minha casa. Obrigada, voltarei a comprar.",
    "cidade": "Rio Grande do Sul",
    "url": "#"
  },
  {
    "nome": "Pietra Delffes",
    "comentario": "Super indico a empresa em todos os aspectos.Desde preço, qualidade e atendimento!!Fui muito bem atendida em todo tempo,o vendedor atendeu todas minhas necessidades sempre que precisei...Ocorreu tudo certo com meu pedido e minha entrega mesmo sendo fora da cidade!!!Agradeço por todo atendimento..",
    "cidade": "São Paulo",
    "url": "#"
  },
  {
    "nome": "Wendell Jaqueline",
    "comentario": "Excelente, ótimo atendimento, super educados, entrega antes do prazo produto de qualidade e ótimo preços parabens",
    "cidade": "Curitiba",
    "url": "#"
  },
  {
    "nome": "Franklin Huebert",
    "comentario": "Atendimento de primeira, condições de pagamento satisfatórias, entrega rápida, gostei muito....",
    "cidade": "Rio de Janeiro",
    "url": "#"
  },
  {
    "comentario": "Olha só tenho elogios, pra essa loja em tudo...são muito bom👍preço,atendimento, pós compra, garantia. comprei pelo watsap.,E tudo é passado certinho ,sem complicação, Qualquer coisa resolvo com eles pelo wats msm.",
    "nome": "Andreina Aires",
    "cidade": "Florianopolis/ SC",
    "url": "#"
  },
  {
    "comentario": "Recomendo muito, um excelente lugar para se comprar portas e janelas de alta qualidade por um preço justo, estávamos pesquisando a muito tempo em vários lugares, porém nenhum nos chamou a atenção devido ao alto preço e a baixa qualidade, até que vimos a Mercosul. Jenelas e portas de alta qualidade, perfis das janelas de aluminio muito bons, preços muito bons e atendimento nota 10. Devido a época delicada em que estamos passando por conta do covid e a parada das fabricas, a matéria prima ficou escassa, faltando alguns itens para fabricação de janelas e portas, ocasionado atrasos na entrega, um fato compreensível devido a situação dessa pandemia. Porém em nenhum momento a Mercosul nos deixou de responder ou de dar um respaldo da situação, gostaria de deixar um agradecimento especial ao Gerente Comercial Junior que em nenhum momento deixou de nos atender, sempre se mostrando preocupado em resolver o problema e a situação, e sempre com a maior paciência e educação, por diversas vezes entramos em contato com ele, e sempre obtivemos respostas rápidas e atenção total, se mostrando interessado em resolver rapidamente e com a atenção que o cliente necessita, um ótimo lugar, e um atendimento nota 10.",
    "nome": "Lucas Zem",
    "cidade": "Curitiba",
    "url": "#"
  },
  {
    "comentario": "Produtos de alta qualidade, perfeitos para minha casa, excelente padrão.Ótimo atendimento. Vendedores super atenciosos e um ambiente muito agradável e organizado! Recomendo muito a Mercosul portas e janelas. Parabéns.",
    "nome": "William Machado",
    "cidade": "Minas Gerais /MG",
    "url": "#"
  }
];

// Configuração do menu principal
window.menuPrincipal = {
  "categoriasMenu": 4,
  "tituloMenu": "Todos os departamentos"
};

// Configuração do horário de operação
$(document).ready(function() {
  $('#operation p').html('Seg a Sex das 8:30h às 18:00h <br> Sab das 9:00h às 13:00h');
});

// Configuração do feed do Instagram
window.instagramFeed = {
  "ativa": false,
  "usuario": "mercosulportasejanelas"
};

// Configuração do slide de categorias
window.slideCategorias = [
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/99364349-janela-integrada-veneziana-esquadrias-brasil-1-00-x-1-20wcis72a6-873-1-600x600.jpg",
    "link": "https://www.mercosulvendas.com.br/janelas--",
    "titulo": "Janelas de Correr"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/478778.png",
    "link": "https://www.mercosulvendas.com.br/portasgiro---",
    "titulo": "Portas de Giro"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/002ef3c22a.png",
    "link": "https://www.mercosulvendas.com.br/portas-externas",
    "titulo": "Portas de Madeira"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/64207135-porta-balcao-3-folhas-de-aluminio-super-25-210x120cm-vidro-liso-pretosku1716-12190-1_zoom-1500x1500.jpg",
    "link": "https://www.mercosulvendas.com.br/portas-de-correr----",
    "titulo": "Portas de Correr"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/15-91_16177.jpg",
    "link": "https://www.mercosulvendas.com.br/vitros",
    "titulo": "Vitros Basculantes"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/D_NQ_NP_727361-MLB45839650165_052021-O.jpg",
    "link": "https://www.mercosulvendas.com.br/acessorios-portas",
    "titulo": "Acessórios para Portas"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/WhatsApp Image 2022-04-04 at 16.40.41.jpg",
    "link": "https://www.mercosulvendas.com.br/seguranca",
    "titulo": "Segurança"
  },
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/capa fechaduras the partner.png",
    "link": "https://www.mercosulvendas.com.br/fechaduras",
    "titulo": "Fechaduras"
  }
];

// Configuração do banner mobile
window.fullBannerMobile = [
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/anivers-rio-mercosul---mobile-1.png",
    "link": "https://www.mercosulvendas.com.br/super-ofertas-do-mes"
  },  
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/anivers-rio-mercosul---mobile-2.png",
    "link": "https://www.mercosulvendas.com.br/super-ofertas-do-mes"
  },    
  {
    "imagem": "https://cdn.awsli.com.br/100/100974/arquivos/anivers-rio-mercosul---mobile-3.png",
    "link": "https://linktr.ee/mercosulatendimento"
  }
];

// Adicione após a configuração do fullBannerMobile e SmartHint

// Substitua o formatador de preços atual por esta versão

// Formatador de preços otimizado para conviver com o featuredProducts-timer
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando formatador de preços compatível com timer');
    
    // Cache de elementos já processados
    const elementosProcessados = new WeakSet();
    
    // Cache de elementos modificados por ID ou seletor
    const elementosModificadosCache = new Set();
    
    // Contador de verificações sem mudanças
    let verificacoesSemNovos = 0;
    const MAX_VERIFICACOES_SEM_NOVOS = 5;
    
    // Variáveis para intervalos
    let intervaloVerificacao = null;
    
    // Estilos
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
        
        /* Estilos para proteger elementos do timer */
        .featuredProducts-timer {
            pointer-events: auto !important;
        }
        
        .featuredProducts-timer * {
            pointer-events: auto !important;
        }
    `;
    document.head.appendChild(style);
    
    // Formatador de valores
    function formatarValor(valor) {
        return valor.toFixed(2).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    // Gerar identificador único para elemento
    function getElementIdentifier(el) {
        // Se o elemento tem ID, usamos ele
        if (el.id) return `#${el.id}`;
        
        // Caso contrário, cria um caminho relativo baseado em classes
        let path = [];
        let currentEl = el;
        
        // Tenta gerar um identificador único de até 3 níveis
        for (let i = 0; i < a; i++) {
            if (!currentEl || currentEl === document.body) break;
            
            let identifier = currentEl.tagName.toLowerCase();
            if (currentEl.className) {
                const classes = Array.from(currentEl.classList).join('.');
                if (classes) identifier += `.${classes}`;
            }
            
            path.unshift(identifier);
            currentEl = currentEl.parentElement;
        }
        
        return path.join(' > ');
    }
    
    // Verificar se o elemento está relacionado ao timer
    function isTimerElement(el) {
        // Verifica se o elemento ou seus ancestrais estão relacionados ao timer
        let current = el;
        while (current && current !== document.body) {
            if (current.classList && 
                (current.classList.contains('featuredProducts-timer') || 
                 current.classList.contains('countdown') ||
                 current.classList.contains('timer'))) {
                return true;
            }
            current = current.parentElement;
        }
        return false;
    }
    
    // Formatar um elemento de preço
    function formatarPreco(el) {
        // Ignorar elementos do timer
        if (isTimerElement(el)) {
            return false;
        }
        
        // Verificar se já foi processado
        if (elementosProcessados.has(el) || el.querySelector('.novo-layout')) {
            return false;
        }
        
        // Verificar pelo identificador
        const elId = getElementIdentifier(el);
        if (elementosModificadosCache.has(elId)) {
            return false;
        }
        
        // Marcar como processado para evitar duplicação
        elementosProcessados.add(el);
        elementosModificadosCache.add(elId);
        el.setAttribute('data-formatado', 'true');
        
        // Extração de preços baseada no contexto
        const isCartPage = window.location.pathname.includes('/carrinho');
        const isCartItem = el.closest('.col-item-unit-price');
        
        let valorBase, valorOriginal;

        try {
            // Lógica para carrinho
            if (isCartPage && isCartItem) {
                valorBase = parseFloat(isCartItem.getAttribute('data-item-unit-valor'));
                valorOriginal = el.querySelector('.preco-venda') ? 
                    parseFloat(el.querySelector('.preco-venda').innerText.replace(/[^\d,]/g, "").replace(",", ".").trim()) : 
                    null;
            } 
            // Lógica para outras páginas
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

            if (!valorBase || isNaN(valorBase)) {
                return false;
            }

            // Calcular desconto PIX de 10%
            const valorPix = valorBase - (valorBase * 0.10);

            // Construir layout de preço
            const novoLayout = document.createElement("div");
            novoLayout.classList.add("novo-layout");

            if (valorOriginal && valorOriginal !== valorBase) {
                const precoDe = document.createElement("div");
                precoDe.classList.add("preco-de");
                precoDe.innerHTML = `De: <strong><s>${formatarValor(valorOriginal)}</s></strong> por `;
                novoLayout.appendChild(precoDe);
            }

            const precoPixContainer = document.createElement("div");
            precoPixContainer.classList.add("preco-principal");
            precoPixContainer.innerHTML = `<strong>${formatarValor(valorPix)} no Pix</strong>`;
            novoLayout.appendChild(precoPixContainer);

            const precoParceladoContainer = document.createElement("div");
            precoParceladoContainer.classList.add("preco-parcelado");
            precoParceladoContainer.innerHTML = `ou <strong>${formatarValor(valorBase)}</strong> em <strong>12x</strong> de <strong>${formatarValor(valorBase / 12)}</strong>`;
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
    
    // Processar elementos existentes e retornar número formatados
    function processarElementos() {
        // Excluir explicitamente elementos relacionados ao timer
        const elementos = document.querySelectorAll('.preco-produto:not([data-formatado]):not(.featuredProducts-timer *), .destaque-avista:not([data-formatado]):not(.featuredProducts-timer *)');
        
        let formatados = 0;
        elementos.forEach(el => {
            if (formatarPreco(el)) {
                formatados++;
            }
        });
        
        return formatados;
    }
    
    // Limpar todos os intervalos e desconectar observer
    function pararFormatador() {
        if (intervaloVerificacao) {
            clearInterval(intervaloVerificacao);
            intervaloVerificacao = null;
        }
        
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        
        console.log('✅ Formatador de preços finalizado - todos os preços processados');
    }
    
    // Observer para detectar mudanças no DOM
    const observer = new MutationObserver(mutations => {
        let precisaVerificar = false;
        
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Elemento DOM
                        // Ignorar explicitamente elementos do timer
                        if (isTimerElement(node)) return;
                        
                        // Verificar se o nó é um preço ou contém preços
                        if ((node.classList && 
                             (node.classList.contains('preco-produto') || 
                              node.classList.contains('destaque-avista'))) || 
                            (node.querySelectorAll && 
                             node.querySelectorAll('.preco-produto:not(.featuredProducts-timer *), .destaque-avista:not(.featuredProducts-timer *)').length > 0)) {
                            precisaVerificar = true;
                        }
                    }
                });
            }
        });
        
        if (precisaVerificar) {
            const formatados = processarElementos();
            if (formatados > 0) {
                verificacoesSemNovos = 0;
                console.log(`Formatados ${formatados} novos preços detectados pelo observer`);
            }
        }
    });
    
    // Iniciar observer
    observer.observe(document.body, { 
        childList: true, 
        subtree: true,
        attributes: false
    });
    
    // Processar elementos iniciais
    const formatadosInicial = processarElementos();
    console.log(`Formatação inicial: ${formatadosInicial} elementos de preço formatados`);
    
    // Iniciar verificação periódica que se auto-desativa
    intervaloVerificacao = setInterval(() => {
        const formatados = processarElementos();
        
        if (formatados === 0) {
            verificacoesSemNovos++;
            console.log(`Nenhum novo preço encontrado (verificação ${verificacoesSemNovos}/${MAX_VERIFICACOES_SEM_NOVOS})`);
            
            if (verificacoesSemNovos >= MAX_VERIFICACOES_SEM_NOVOS) {
                pararFormatador();
            }
        } else {
            console.log(`Formatados ${formatados} novos preços encontrados na verificação periódica`);
            verificacoesSemNovos = 0;
        }
    }, 1000);
    
    // Garantia final que o formatador será finalizado após 10 segundos
    setTimeout(pararFormatador, 10000);
});

// Configuração do reposicionamento do SmartHint
$(document).ready(function() {
    var interval = setInterval(function() {
        var smart = $('#smarthint-position-1');
        var carrinho = $('form[action="https://www.mercosulvendas.com.br/checkout/redirect/"]');

        if (smart.length && carrinho.length) {
            smart.insertAfter(carrinho);
            clearInterval(interval);
        }
    }, 300);
});

// Configuração da seção de imagens responsivas
$(document).ready(function() {
    // Função para criar a nova seção com imagens
    function createNewSection2() {
        // Cria a nova seção
        const newSection = document.createElement('div');
        newSection.classList.add('new-section');

        // URLs das imagens para mobile
        const mobileImages = [
            'https://cdn.awsli.com.br/100/100974/arquivos/mobile-1.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/mobile-2.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/mobile-4.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/mobile-5.png'
        ];

        // URLs das imagens para desktop
        const desktopImages = [
            'https://cdn.awsli.com.br/100/100974/arquivos/desktop-1.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/desktop-2.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/desktop-4.png',
            'https://cdn.awsli.com.br/100/100974/arquivos/desktop-5.png'
        ];

        // URLs de redirecionamento
        const links = [
            'https://www.mercosulvendas.com.br/#&search-term=Linha%20Fit%2014',
            'https://www.mercosulvendas.com.br/#&search-term=Linha%20Classic%2016',
            'https://www.mercosulvendas.com.br/#&search-term=Linha%20Master%2020',
            'https://www.mercosulvendas.com.br/#&search-term=Linha%20Maxx%2025'
        ];

        // Adiciona 4 imagens à nova seção
        for (let i = 0; i < 4; i++) {
            const link = document.createElement('a');
            link.href = links[i];
            link.target = '_blank'; // Abre o link em uma nova aba

            const picture = document.createElement('picture');

            const sourceMobile = document.createElement('source');
            sourceMobile.media = "(max-width: 768px)";
            sourceMobile.srcset = mobileImages[i]; // Imagens mobile

            const img = document.createElement('img');
            img.src = desktopImages[i]; // Imagens desktop
            img.alt = `Image ${i + 1}`;

            picture.appendChild(sourceMobile);
            picture.appendChild(img);
            link.appendChild(picture);
            newSection.appendChild(link);
        }

        // Insere a nova seção abaixo da seção existente
        const existingSection = document.querySelector('.secao-principal.row-fluid.sem-coluna');
        if (existingSection) {
            existingSection.insertAdjacentElement('afterend', newSection);
            
            // Cria os estilos via DOM
            const style = document.createElement('style');
            style.textContent = `
                .new-section {
                    display: flex;
                    gap: 4px;
                }

                .new-section img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                    border-radius: 20px;
                }

                @media (max-width: 768px) {
                    .new-section {
                        flex-direction: column;
                    }

                    .new-section img {
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                    }
                }
            `;
            document.head.appendChild(style);
            
            console.log('Seção de imagens responsivas criada com sucesso');
        } else {
            console.warn('Elemento .secao-principal.row-fluid.sem-coluna não encontrado');
        }
    }

    // Tenta criar a seção, mas apenas se estiver na página inicial
    if (window.location.pathname === '/' || window.location.pathname === '/index') {
        // Atrasa ligeiramente para garantir que todos os elementos da página estejam carregados
        setTimeout(createNewSection2, 1000);
    }
});

// Adicione após a configuração da seção de imagens responsivas, antes do console.log final

// Formatador de preços do carrinho com melhor visualização de desconto PIX
$(document).ready(function() {
    let lastTotal = '';
    let lastParcelas = '';
    let lastPix = '';
    
    // Função principal para formatar os preços do carrinho
    function styleCartPrices() {
        // Apenas executar na página do carrinho
        if (!window.location.pathname.includes('/carrinho')) return;
        
        const totalElement = document.querySelector('.valor-total');
        const parcelasSpan = document.querySelector('.descontos.parcelas span');
        const pixPrice = document.querySelector('.descontos.avista strong');
        const pixSpan = document.querySelector('.descontos.avista span');
        const totalDiv = document.querySelector('.total');

        if (!totalElement || !parcelasSpan || !pixPrice || !pixSpan) return;

        const currentTotal = totalElement.textContent;
        const currentParcelas = parcelasSpan.textContent;
        const currentPix = pixPrice.textContent;

        // Apenas atualizar se houver mudanças nos valores
        if (currentTotal === lastTotal && 
            currentParcelas === lastParcelas && 
            currentPix === lastPix) return;

        try {
            // Update PIX text and styling
            pixSpan.innerHTML = `Total: <strong style="color: #00a650; font-size: 22px; font-weight: 700;">${currentPix}</strong> no PIX com <strong style="color: #00a650; font-weight: 600; font-size: 14px;">10% de desconto</strong>`;

            // Forçar sempre 8x no parcelamento
            const numParcelas = 8;
            // Extrai o valor numérico do total
            let valorTotal = parseFloat(currentTotal.replace(/[^\d,]/g, '').replace(',', '.'));
            if (isNaN(valorTotal) || valorTotal === 0) {
                // fallback: tenta extrair do valor de parcela existente
                const match = currentParcelas.match(/R\$ ([\d.,]+)/);
                if (match) {
                    valorTotal = parseFloat(match[1].replace('.', '').replace(',', '.')) * numParcelas;
                }
            }
            let valorParcela = (valorTotal / numParcelas).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            parcelasSpan.innerHTML = `ou <strong style="color: #3483fa; font-size: 18px; font-weight: 600;">${currentTotal}</strong> em até <strong style="color: #3483fa; font-weight: 600;">${numParcelas}x</strong> de <strong style="color: #3483fa; font-weight: 600;">R$ ${valorParcela}</strong> sem juros`;
            
            if (totalDiv) {
                totalDiv.style.display = 'none';
            }

            // Update last known values
            lastTotal = currentTotal;
            lastParcelas = currentParcelas;
            lastPix = currentPix;
            
            console.log('Preços do carrinho formatados com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar preços do carrinho:', error);
        }
    }

    // Inicializar apenas na página do carrinho
    if (window.location.pathname.includes('/carrinho')) {
        // Primeira execução com pequeno atraso para garantir carregamento da página
        setTimeout(styleCartPrices, 300);
        
        // Configurar o MutationObserver para detectar mudanças no carrinho
        const observer = new MutationObserver(function() {
            styleCartPrices();
        });
        
        // Observar todo o corpo da página para capturar atualizações de AJAX
        observer.observe(document.body, { 
            childList: true, 
            subtree: true 
        });
        
        // Backup com intervalo para caso o observer não capture alguma mudança
        const intervalId = setInterval(styleCartPrices, 500);
        
        // Limpar o intervalo após 30 segundos para economizar recursos
        setTimeout(function() {
            clearInterval(intervalId);
            console.log('Intervalo de verificação de preços do carrinho finalizado');
        }, 30000);
        
        console.log('Formatador de preços do carrinho inicializado');
    }
});

// Adicione antes do console.log('Configurações do tema carregadas');

// Desativar popup do carrinho na versão desktop
$(document).ready(function() {
    // Método 1: Remover completamente o popup usando CSS
    const style = document.createElement('style');
    style.textContent = `
        .carrinho-interno {
            display: none !important;
            pointer-events: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
        }
        
        /* Garantir que o carrinho não mude de aparência no hover */
        .carrinho > a:hover {
            background-color: inherit !important;
            color: inherit !important;
        }
    `;
    document.head.appendChild(style);
    
    // Método 2: Remover os listeners de eventos que mostram o popup
    const carrinhoElement = document.querySelector('.carrinho');
    if (carrinhoElement) {
        // Remover os listeners que podem existir
        const carrinhoLink = carrinhoElement.querySelector('a');
        if (carrinhoLink) {
            const clone = carrinhoLink.cloneNode(true);
            carrinhoLink.parentNode.replaceChild(clone, carrinhoLink);
        }
        
        // Remover quaisquer listeners jQuery
        $('.carrinho').off('mouseenter mouseleave');
        
        console.log('Popup do carrinho desativado com sucesso');
    }
});

console.log('Configurações do tema carregadas');

// Exportamos uma função para inicializar as variáveis, embora elas já estejam definidas
// Isso é útil para integração com um sistema modular no futuro
export function inicializarConfigTema() {
  // As configurações já foram definidas globalmente
  return true;
}