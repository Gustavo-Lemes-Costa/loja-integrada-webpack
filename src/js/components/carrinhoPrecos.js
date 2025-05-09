/**
 * Formatação simplificada de preços para o carrinho
 * - PRIMEIRO valor: Preço no PIX (10% de desconto) em VERDE, fonte MAIOR, com texto "(No PIX)"
 * - SEGUNDO valor: Preço no cartão em AZUL, com texto "(no cartão)"
 * - Remove outros elementos de preço
 * - Remove o subtotal hidden-phone bg-dark
 */

// Função principal que aplica os estilos ao carrinho
export function formatarPrecosCarrinho() {
  // Verificar se estamos na página do carrinho
  if (!window.location.pathname.includes('/carrinho')) return;

  console.log('Aplicando formatação aos preços do carrinho');
    // Função para calcular o preço no PIX (10% de desconto)
  function calcularPrecoPix(precoOriginal) {
    // Remove símbolos não numéricos e converte para float
    const valor = parseFloat(precoOriginal.replace(/[^\d,]/g, '').replace(',', '.'));
    if (isNaN(valor)) return precoOriginal;
    
    // Calcula o desconto de 10%
    const valorComDesconto = valor * 0.9;
    
    // Formata o valor de volta para o padrão brasileiro sem o R$
    return valorComDesconto.toFixed(2).replace('.', ',');
  }
  
  function formatarPreco(valor) {
    // Remove símbolos R$ e formata corretamente
    if (typeof valor === 'string') {
      return valor.replace('R$', '').trim();
    }
    return valor;
  }
    // Reorganiza e estiliza os elementos de preço
  setTimeout(() => {
    // Esconder a div total
    const totalElements = document.querySelectorAll('.total');
    totalElements.forEach(totalElement => {
      totalElement.style.display = 'none';
    });
    
    document.querySelectorAll('.preco-produto').forEach(precoProduto => {
      // Limpar qualquer conteúdo existente que vamos recriar
      const existingParcela = precoProduto.querySelector('.preco-parcela');
      if (existingParcela) existingParcela.remove();
      
      const existingPricePix = precoProduto.querySelector('.price-pix');
      if (existingPricePix) existingPricePix.remove();
      
      // Obter o preço promocional (que será o preço do cartão)
      const precoPromocional = precoProduto.querySelector('.preco-promocional');
      if (precoPromocional) {        // Limpar o conteúdo atual 
        const precoCartaoCompleto = precoPromocional.textContent.trim().split('\n').pop().trim();
        
        // Remover o R$ e espaços extras
        const precoCartao = formatarPreco(precoCartaoCompleto);
        
        // Calcular o preço do PIX (10% de desconto)
        const precoPix = calcularPrecoPix(precoCartao);
        
        // Recriar a estrutura com a ordem correta
        precoProduto.innerHTML = ''; // Limpar tudo
        
        // 1. Criar o elemento do PIX primeiro (maior e verde)
        const pixElement = document.createElement('div');
        pixElement.classList.add('preco-pix');
        pixElement.innerHTML = `<strong style="color:#28a745; font-weight:900; font-size:1.3em;">${precoPix} <span style="color:#28a745;">(No PIX)</span></strong>`;
        precoProduto.appendChild(pixElement);
        
        // 2. Criar o elemento do cartão depois (azul)
        const cartaoElement = document.createElement('div');
        cartaoElement.classList.add('preco-cartao');
        cartaoElement.innerHTML = `<strong style="color:#007bff; font-weight:900;">${precoCartao} <span style="color:#007bff;">(no cartão)</span></strong>`;
        precoProduto.appendChild(cartaoElement);
      }
    });
    
    // Remover o subtotal na versão mobile
    const subtotals = document.querySelectorAll('.hidden-phone.bg-dark');
    subtotals.forEach(subtotal => {
      subtotal.style.display = 'none';
    });
    
    // Reformular o resumo de compra
    reformularResumoCompra();
      }, 500); // Aguarda um pouco para garantir que os elementos foram carregados
    // Função para reformular o resumo da compra
  function reformularResumoCompra() {
    // Localizar o elemento de resumo de compra
    const resumoElement = document.querySelector('.valores-descontos');
    // Evitar loops infinitos verificando se o resumo já foi reformulado
    if (!resumoElement || resumoElement.querySelector('.resumo-compra')) return;
    
    // Obter o valor total do carrinho
    let valorTotalElement = document.querySelector('.valor-total');
    if (!valorTotalElement) return;
    
    const valorTotal = formatarPreco(valorTotalElement.textContent);
    const valorTotalNum = parseFloat(valorTotal.replace(/[^\d,]/g, '').replace(',', '.'));
    
    // Obter valor do frete selecionado
    let valorFrete = "0,00";
    let valorFreteNum = 0;
    
    const freteRadios = document.querySelectorAll('input[name="formaEnvio"]');
    freteRadios.forEach(radio => {
      if (radio.checked) {
        const valorFreteRaw = radio.getAttribute('data-valor');
        if (valorFreteRaw) {
          valorFreteNum = parseFloat(valorFreteRaw);
          valorFrete = valorFreteNum.toFixed(2).replace('.', ',');
        }
      }
        // Adicionar listeners apenas uma vez para evitar loops
      if (!radio.hasAttribute('listener-added')) {
        radio.addEventListener('change', reformularResumoCompra);
        radio.setAttribute('listener-added', 'true');
      }
    });
    
    // Calcular subtotal (total - frete)
    const valorSubtotalNum = valorTotalNum - valorFreteNum;
    const valorSubtotal = valorSubtotalNum.toFixed(2).replace('.', ',');
    
    // Calcular valor no PIX (10% desconto no total)
    const valorPixNum = valorTotalNum * 0.9;
    const valorPix = valorPixNum.toFixed(2).replace('.', ',');
    
    // Calcular parcelas (dividido por 8)
    const valorParcelaNum = valorTotalNum / 8;
    const valorParcela = valorParcelaNum.toFixed(2).replace('.', ',');
      // Criar novo resumo (com PIX primeiro, depois cartão)
    resumoElement.innerHTML = `
      <div class="resumo-compra" style="padding: 10px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; margin: 10px 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
          <span>Subtotal:</span>
          <strong>${valorSubtotal}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span>Frete:</span>
          <strong>${valorFrete}</strong>
        </div>        <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2em; margin-bottom: 10px;">
          <span>Total no PIX <span style="font-size: 0.9em;">(10% de desconto)</span>:</span>
          <strong style="color:#28a745;">${valorPix}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 5px; font-size: 1.1em;">
          <span>Total no cartão:</span>
          <strong style="color:#007bff;">${valorTotal}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: 700; margin-top: 5px; color:#007bff;">
          <span>ou em até 8x sem juros de:</span>
          <strong>${valorParcela}</strong>
        </div>
      </div>
    `;
  }

  // Adicionar estilos CSS
  const style = document.createElement('style');
  style.textContent = `
    /* Preço PIX - verde (maior e mais destacado) */
    .preco-produto .preco-pix {
      color: #28a745 !important;
      font-weight: 900 !important;
      font-size: 1.3em !important;
      display: block !important;
      margin-bottom: 5px !important;
    }
    
    .preco-produto .preco-pix strong {
      font-weight: 900 !important;
    }
    
    /* Preço cartão - azul (menor) */
    .preco-produto .preco-cartao {
      color: #007bff !important;
      font-weight: 900 !important;
      font-size: 1.0em !important;
      display: block !important;
    }
    
    .preco-produto .preco-cartao strong {
      font-weight: 900 !important;
    }
    
    /* Esconder preço original */
    .preco-produto .preco-venda {
      display: none !important;
    }
    
    /* Esconder o subtotal na versão mobile */
    .hidden-phone.bg-dark {
      display: none !important;
    }
    
    /* Remover todos os elementos com classe preco-a-vista */
    .preco-a-vista {
      display: none !important;
    }
      /* Esconder qualquer texto adicional que não queremos */
    .price-pix {
      display: none !important;
    }
    
    /* Esconder a div total */
    .total {
      display: none !important;
    }
    
    /* Estilos do resumo de compra */
    .valores-descontos .resumo-compra {
      font-family: 'Proxima Nova', -apple-system, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif !important;
      color: #333333 !important;
    }
  `;  document.head.appendChild(style);
  
  console.log('Formatação de preços do carrinho aplicada com sucesso');
}

// Auto-iniciar quando importado
document.addEventListener('DOMContentLoaded', formatarPrecosCarrinho);

// Observador de mutações para garantir que a formatação seja aplicada apenas quando necessário
const observer = new MutationObserver((mutations) => {
  // Verificar se há mudanças relevantes antes de reformatar
  let shouldUpdate = false;
  
  mutations.forEach(mutation => {
    if (mutation.type === 'childList' && 
        (mutation.target.classList.contains('preco-produto') || 
         mutation.target.classList.contains('valores-descontos') ||
         mutation.target.querySelector('.preco-produto') || 
         mutation.target.querySelector('.valores-descontos'))) {
      shouldUpdate = true;
    }
  });
  
  if (shouldUpdate) {
    formatarPrecosCarrinho();
  }
});

// Iniciar o observador quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  const targetNode = document.querySelector('#corpo');
  if (targetNode) {
    observer.observe(targetNode, { childList: true, subtree: true });
  }
});
