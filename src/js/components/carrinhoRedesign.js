$(document).ready(function() {
  // Verificar se estamos na página do carrinho
  if (!window.location.pathname.includes('/carrinho/index')) return;

  console.log('Iniciando redesign do carrinho estilo Mercado Livre');
  
  // Detectar o tipo de dispositivo
  const isMobile = window.innerWidth < 768;
  console.log(`Dispositivo detectado: ${isMobile ? 'Mobile' : 'Desktop'}`);
  
  // Adicionar estilos CSS com base no dispositivo
  const carrinhoStyles = document.createElement('style');
  carrinhoStyles.textContent = `
    /* Estilos Base Mercado Livre */
    .carrinho-ml {
      font-family: 'Proxima Nova', -apple-system, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
      background-color: #EBEBEB;
      color: #333333;
      margin: 0;
      padding: 0;
    }
    
    /* Reset de alguns estilos da Loja Integrada */
    .carrinho-ml .caixa-sombreada {
      box-shadow: none;
      background: transparent;
      border-radius: 0;
      padding: 0;
      margin: 0;
    }
    
    /* Container principal */
    .carrinho-ml .container-carrinho {
      max-width: 100%;
      background: transparent;
    }
    
    /* Cabeçalho - REDUÇÃO DE ESPAÇAMENTOS */
    .carrinho-ml .cabecalho-interno {
      padding: 2px;
      background: #fff;
      margin-bottom: 2px;
      border-radius: ${isMobile ? '0' : '6px'};
    }
    
    .carrinho-ml h1.titulo {
      font-size: ${isMobile ? '18px' : '24px'};
      font-weight: 600;
      margin: 0;
      padding: 0;
    }
    
    .carrinho-ml h1.titulo small {
      display: none;
    }
    
    /* Card de produto - REDUZINDO ALTURA */
    .carrinho-ml .produto-card {
      background: #fff;
      margin-bottom: 2px; /* Consistência com o espaçamento entre linhas */
      padding: ${isMobile ? '2px' : '2px'}; /* Reduzido para max 2px */
      position: relative;
      border-radius: ${isMobile ? '0' : '6px'};
    }
    
    .carrinho-ml .tabela-carrinho {
      border-collapse: collapse;
      width: 100%;
    }
    
    /* Oculta cabeçalhos da tabela */
    .carrinho-ml .tabela-carrinho thead {
      display: none;
    }
    
    /* Card layout para as linhas da tabela - ESPAÇAMENTO EXATO DE 2PX */
    .carrinho-ml .tabela-carrinho tbody tr:not(.bg-dark) {
      display: flex;
      flex-wrap: wrap;
      border-bottom: none;
      padding: 0; /* Removido padding vertical */
      position: relative;
      margin: 0 0 2px 0; /* Apenas margin-bottom de 2px */
      background: white;
    }

    /* Garantir que o último item não tenha margem inferior */
    .carrinho-ml .tabela-carrinho tbody tr:last-child {
      margin-bottom: 0;
    }
    
    /* Ajusta as células para card layout - MENOR PADDING */
    .carrinho-ml .tabela-carrinho td {
      border: none;
      padding: 2px; /* Exatamente 2px em todos os lados */
      margin: 0;
    }
    
    /* Container dos detalhes do produto - NOVO */
    .carrinho-ml .produto-row {
      display: flex;
      width: 100%;
      align-items: flex-start;
      margin-bottom: 2px; /* Exatamente 2px para todos */
    }
    
    /* Imagem do produto - TAMANHO REDUZIDO */
    .carrinho-ml .conteiner-imagem {
      width: ${isMobile ? '80px' : '100px'};
      flex-shrink: 0;
    }
    
    .carrinho-ml .imagem {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .carrinho-ml .imagem img {
      width: 60px;
      height: 60px;
      object-fit: contain;
      border-radius: 4px;
    }
    
    /* Informações do produto */
    .carrinho-ml .sem-borda:not(.conteiner-imagem) {
      width: calc(100% - ${isMobile ? '80px' : '100px'});
      padding-left: 12px;
      display: flex;
      flex-direction: column;
    }
    
    .carrinho-ml .produto-info {
      display: flex;
      flex-direction: column;
      gap: 2px; /* Reduzido de 4px para 2px */
    }
    
    .carrinho-ml .produto-info a {
      font-size: 14px;
      color: #333;
      text-decoration: none;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-height: 40px;
    }
    
    .carrinho-ml .produto-info ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .carrinho-ml .produto-info li {
      font-size: 12px;
      color: #666;
      background: transparent;
    }
    
    /* Preço do produto e controles de quantidade na mesma linha */
    .carrinho-ml .controles-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px; /* Reduzido de 8px para 4px */
    }
    
    /* Preço do produto - estilo ML: preço normal simples */
    .carrinho-ml .col-item-unit-price {
      padding: 0;
      margin: 0;
      text-align: right;
    }
    
    .carrinho-ml .ml-price {
      font-size: ${isMobile ? '18px' : '20px'};
      font-weight: 600;
      color: #333;
      display: block;
      height: 32px;
      display: flex;
      align-items: center;
    }
    
    /* Controles de quantidade com espaço para o preço */
    .carrinho-ml .clearfix {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 0;
    }
    
    /* Controles de quantidade - MENOR COM FONTE MAIOR E FUNDO TRANSPARENTE */
    .carrinho-ml .quantidade {
      display: flex;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      width: 80px; /* Reduzido de 90px para 80px */
      background: transparent;
    }
    
    .carrinho-ml .quantidade a {
      width: 24px; /* Aumentado de 8px para 24px para melhor área de toque */
      height: 24px; /* Aumentado de 8px para 24px */
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent; /* Fundo transparente */
      color: rgb(52, 105, 250);
      text-decoration: none;
      font-weight: bold;
      font-size: 16px; /* Aumentado para melhor visibilidade */
    }
    
    .carrinho-ml .quantidade input {
      width: 32px; /* Ligeiramente reduzido de 34px */
      height: 24px; /* Reduzido de 28px para 24px */
      border: none;
      text-align: center;
      font-size: 16px; /* Aumentado de 14px para 16px */
      background: transparent; /* Fundo transparente */
      padding: 0;
    }
    
    .carrinho-ml .atualizar-quantidade {
      display: none;
    }
    
    /* Botão de remover */
    .carrinho-ml .excluir {
      position: static;
      margin-left: 15px;
    }
    
    .carrinho-ml .excluir a {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      text-decoration: none;
      font-size: 16px;
      opacity: 0.7;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    /* Botão de remover quando dentro do clearfix */
    .carrinho-ml .clearfix .excluir {
      position: static;
      margin-left: 15px;
      display: flex;
      align-items: center;
    }

    .carrinho-ml .clearfix .excluir a {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      text-decoration: none;
      font-size: 16px;
      opacity: 0.7;
      background: #f5f5f5;
      border-radius: 4px;
    }
    
    /* Linha de subtotal visível apenas em desktop */
    .carrinho-ml .bg-dark {
      background-color: #fff;
      border-radius: ${isMobile ? '0' : '6px'};
      margin-bottom: 8px;
    }
    
    /* Calculo de frete */
    .carrinho-ml #formCalcularFrete {
      margin: 0;
    }
    
    .carrinho-ml .control-group {
      margin-bottom: 0;
      padding: ${isMobile ? '12px 16px' : '16px'};
    }
    
    .carrinho-ml .control-label {
      display: block;
      width: 100%;
      text-align: left;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 14px;
      color: #333;
    }
    
    .carrinho-ml .controls {
      margin-left: 0;
      width: 100%;
    }
    
    .carrinho-ml .input-append {
      display: flex;
      width: 100%;
    }
    
    .carrinho-ml .input-cep {
      flex-grow: 1;
      height: 40px;
      padding: 8px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 6px 0 0 6px;
      font-size: 14px;
      outline: none;
    }
    
    .carrinho-ml #btn-frete {
      height: 40px;
      padding: 8px 16px;
      background: #3483fa;
      border: none;
      border-radius: 0 6px 6px 0;
      color: white;
      font-weight: 600;
      font-size: 14px;
      text-shadow: none;
    }
    
    /* Opções de frete */
    .carrinho-ml .formas-envio {
      padding: 0 ${isMobile ? '16px 16px' : '16px'};
    }
    
    .carrinho-ml .formas-envio ul {
      padding: 0;
      margin: 0;
      list-style: none;
      max-height: ${isMobile ? '160px' : '250px'};
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    
    .carrinho-ml .formas-envio li {
      margin: 0 0 2px 0; /* Apenas margin-bottom de 2px */
    }

    .carrinho-ml .formas-envio li:last-child {
      margin-bottom: 0;
    }
    
    /* Opções de frete reorganizadas em uma linha - COM TAMANHOS REDUZIDOS */
    .carrinho-ml .formas-envio label {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      padding: 2px; /* Exatamente 2px em todos */
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      margin: 0;
      transition: all 0.2s ease;
      cursor: pointer;
      position: relative;
    }
    
    /* Ajustes nos elementos do frete */
    .carrinho-ml .formas-envio input[type="radio"] {
      margin: 0;
      margin-right: 8px; /* Reduzido de 10px para 8px */
    }
    
    .carrinho-ml .formas-envio .cor-principal {
      margin-right: 6px; /* Reduzido de 8px para 6px */
      font-size: 14px; /* Caso seja necessário reduzir também */
    }
    
    .carrinho-ml .formas-envio .prazo {
      font-weight: normal;
      color: #3483fa;
      margin-left: auto;
      font-size: 11px; /* Adicionado tamanho reduzido */
      padding: 0 3px; /* Padding mínimo */
    }
    
    .carrinho-ml .formas-envio .valor {
      display: inline;
      width: auto;
      margin-top: 0;
      margin-left: 0;
      font-size: 14px; /* Reduzido de 16px para 14px */
      font-weight: 600;
      color: #333;
      margin-right: 8px; /* Reduzido de 12px para 8px */
    }
    
    /* Nome com fonte menor e espaçamentos reduzidos */
    .carrinho-ml .formas-envio .nome {
      display: ${isMobile ? 'block' : 'none'};
      width: 100%;
      margin-left: ${isMobile ? '20px' : '24px'}; /* Reduzido */
      margin-top: 1px; /* Reduzido de 2px ou 4px para 1px */
      color: #666;
      font-size: 11px; /* Reduzido de 13px para 11px */
    }
    
    /* Segunda definição de .nome e .valor - garantir consistência */
    .carrinho-ml .formas-envio .valor {
      display: block;
      width: 100%;
      margin-top: 2px; /* Reduzido de 4px para 2px */
      margin-left: ${isMobile ? '20px' : '24px'}; /* Reduzido */
      font-size: 14px; /* Reduzido de 16px para 14px */
      font-weight: 600;
      color: #333;
    }
    
    .carrinho-ml .formas-envio .nome {
      display: block;
      width: 100%;
      margin-left: ${isMobile ? '20px' : '24px'}; /* Reduzido */
      margin-top: 1px; /* Reduzido de 2px para 1px */
      color: #666;
      font-size: 11px; /* Reduzido de 13px para 11px */
    }
    
    .carrinho-ml .formas-envio label.checked {
      border-color: #3483fa;
      background-color: #f5faff;
    }
    
    .carrinho-ml .formas-envio input[type="radio"] {
      margin: 0;
      margin-right: 6px; /* Reduzido de 8px para 6px */
    }
    
    .carrinho-ml .formas-envio .cor-principal {
      margin-right: 4px; /* Reduzido de 6px para 4px */
      font-size: 14px;
      padding: 0; /* Removido padding */
    }
    
    .carrinho-ml .formas-envio .valor {
      display: inline;
      width: auto;
      margin-top: 0;
      margin-left: 0;
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-right: 6px; /* Reduzido de 8px para 6px */
      padding: 0; /* Removido padding */
    }
    
    /* Todos os elementos à esquerda */
    .carrinho-ml .formas-envio .prazo {
      font-weight: normal;
      color: #3483fa;
      margin-left: 0; /* Removida a propriedade auto que alinhava à direita */
      font-size: 11px; 
      padding: 0 2px; /* Reduzido de 3px para 2px */
    }
    
    /* Segunda definição do valor para alinhamento consistente */
    .carrinho-ml .formas-envio .valor {
      margin-top: 1px; /* Reduzido de 2px para 1px */
      margin-left: ${isMobile ? '16px' : '20px'}; /* Reduzido de 20/24px */
      padding: 0;
    }
    
    /* Ajustar o nome com menos margens */
    .carrinho-ml .formas-envio .nome {
      margin-left: ${isMobile ? '16px' : '20px'}; /* Reduzido */
      margin-top: 0; /* Removido margin-top */
    }
    
    /* Ajustar o espaço de seleção inteiro */
    .carrinho-ml .formas-envio label {
      padding: 6px; /* Reduzido de 8px para 6px */
    }
    
    /* Ajuste para checked - garantir tudo à esquerda */
    .carrinho-ml .formas-envio label.checked .prazo {
      margin-left: 0;
    }
    
    /* Campo de cupom */
    .carrinho-ml #usarCupom {
      height: 40px;
      border-radius: 6px 0 0 6px;
      border: 1px solid #e0e0e0;
      padding: 8px 12px;
      outline: none;
    }
    
    .carrinho-ml #btn-cupom {
      height: 40px;
      background: #3483fa;
      border: none;
      border-radius: 0 6px 6px 0;
      color: white;
      padding: 8px 16px;
      font-weight: 600;
      font-size: 14px;
      text-shadow: none;
    }
    
    /* Resumo de compra estilo ML */
    .carrinho-ml .resumo-compra {
      background: #fff;
      border-radius: ${isMobile ? '0' : '6px'};
      margin-bottom: ${isMobile ? '70px' : '16px'};
      padding: 0;
      overflow: hidden;
    }
    
    .carrinho-ml .resumo-titulo {
      padding: 10px 16px; /* Reduzido de 16px para 10px */
      font-size: 18px;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .carrinho-ml .resumo-linhas {
      padding: 10px 16px; /* Reduzido de 16px para 10px */
    }
    
    .carrinho-ml .resumo-linha {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px; /* Reduzido de 12px para 8px */
      font-size: 14px;
    }
    
    .carrinho-ml .resumo-linha:last-child {
      margin-bottom: 0;
    }
    
    .carrinho-ml .resumo-total {
      display: flex;
      justify-content: space-between;
      padding: 10px 16px; /* Reduzido de 16px para 10px */
      font-size: 16px;
      font-weight: 600;
      border-top: 1px solid #f0f0f0;
    }
    
    /* Opções de pagamento estilo ML */
    .carrinho-ml .opcoes-pagamento {
      margin-top: ${isMobile ? '8px' : '16px'};
      background: #fff;
      border-radius: ${isMobile ? '0' : '6px'};
      overflow: hidden;
    }
    
    .carrinho-ml .opcoes-titulo {
      padding: 10px 16px; /* Reduzido de 16px para 10px */
      font-size: 18px;
      font-weight: 600;
      color: #333;
      border-bottom: 1px solid #f0f0f0;
    }
    
    .carrinho-ml .opcao-pagamento {
      padding: 10px 16px; /* Reduzido de 16px para 10px */
      border-bottom: 1px solid #f0f0f0;
    }
    
    .carrinho-ml .opcao-pagamento:last-child {
      border-bottom: none;
    }
    
    .carrinho-ml .opcao-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }
    
    .carrinho-ml .opcao-icone {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .carrinho-ml .opcao-titulo {
      font-size: 16px;
      font-weight: 500;
      border-bottom: none;
      padding: 0;
    }
    
    .carrinho-ml .opcao-valor {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .carrinho-ml .opcao-pix {
      color: #00a650;
    }
    
    .carrinho-ml .opcao-cartao {
      color: #3483fa;
    }
    
    .carrinho-ml .opcao-descricao {
      font-size: 14px;
      color: #666;
    }
    
    /* Botões de ação - CORRIGIDO: movido 60px para cima */
    .carrinho-ml .acao-editar {
      ${isMobile ? `
        position: fixed;
        bottom: 60px;  /* ALTERADO: de 0 para 60px */
        left: 0;
        right: 0;
        background: white;
        padding: 12px 16px;
        box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        gap: 12px;
        z-index: 1050;  /* Aumentado para ficar acima do rodapé mobile */
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
      ` : `
        display: flex;
        justify-content: space-between;
        padding: 16px 0;
      `}
    }
    
    /* Ajuste para o rodapé mobile */
    .rodape-mobile-2 {
      ${isMobile ? `
        z-index: 1040;
        position: relative;
      ` : ''}
    }
    
    /* Garantir que o resto do conteúdo não fique escondido pelos botões fixos */
    .carrinho-ml {
      ${isMobile ? `
        padding-bottom: 130px;  /* AUMENTADO: de 70px para 130px */
      ` : ''}
    }
    
    /* Selo SSL também precisa ficar acima */
    .carrinho-ml .selo-ssl {
      z-index: 1060;
      position: relative;
    }
    
    /* Garantir espaço adequado para o botão de finalizar compra */
    .carrinho-ml .botao.principal.grande {
      margin: 0;
      white-space: nowrap;
    }
    
    .carrinho-ml .botao {
      ${isMobile ? `
        flex: 1;
      ` : ''}
      padding: 12px 16px;
      font-size: 15px;
      text-align: center;
      border-radius: 6px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    
    .carrinho-ml .botao:not(.principal) {
      background: #e8e8e8;
      color: #555;
      border: none;
    }
    
    .carrinho-ml .botao:not(.principal):hover {
      background: #d8d8d8;
      color: #333;
    }
    
    .carrinho-ml .botao.principal {
      background: #3483fa;
      color: white;
      border: none;
      ${isMobile ? `
        font-size: 16px;
        padding: 14px 16px;
      ` : ''}
    }
    
    .carrinho-ml .botao.principal:hover {
      background: #2968c8;
    }
    
    /* Estilo do selo SSL */
    .carrinho-ml .selo-ssl {
      text-align: center;
      margin-top: 16px;
      display: ${isMobile ? 'none' : 'block'};
    }

    /* Altura específica para os elementos colspan */
    .carrinho-ml .tabela-carrinho td[colspan="3"],
    .carrinho-ml .tabela-carrinho td[colspan="2"] {
      padding: 2px 4px;
      height: auto;
      line-height: 1.2;
    }
    
    /* Ajuste para linhas de subtotal e valor total */
    .carrinho-ml .bg-dark td {
      padding: 2px; /* Padronizado em 2px */
    }
    
    /* Reduzir margem entre componentes principais */
    .carrinho-ml #formCalcularFrete,
    .carrinho-ml .formas-envio,
    .carrinho-ml .resumo-compra,
    .carrinho-ml .opcoes-pagamento {
      margin-bottom: 2px; /* Padronizado em 2px */
    }

    /* Redução de espaçamentos no form-horizontal */
    .carrinho-ml .form-horizontal {
      margin: 0;
    }

    /* Redução de padding no control-group */
    .carrinho-ml .form-horizontal .control-group {
      margin-bottom: 0;
      padding: ${isMobile ? '6px 12px' : '10px 12px'}; /* Reduzido de 12px 16px/16px */
    }

    /* Ajuste no control-label */
    .carrinho-ml .form-horizontal .control-label {
      margin-bottom: 4px; /* Reduzido de 8px */
      font-size: 13px; /* Reduzido de 14px */
    }

    /* Ajuste nos controles */
    .carrinho-ml .form-horizontal .controls {
      margin-top: 2px; /* Adicionado espaçamento mínimo */
    }

    /* Reduzir tamanho do input e botões */
    .carrinho-ml .form-horizontal .input-append {
      gap: 0;
    }

    .carrinho-ml .form-horizontal .input-append input,
    .carrinho-ml .form-horizontal .input-append button {
      height: 36px; /* Reduzido de 40px */
      padding: 4px 10px; /* Reduzido de 8px 12px/16px */
    }

    /* Ajustar espaçamento em mensagens de feedback */
    .carrinho-ml .form-horizontal .alert {
      margin: 6px 0;
      padding: 4px 8px;
      font-size: 12px;
    }

    /* Reduzir espaçamento após o formulário */
    .carrinho-ml .form-horizontal + * {
      margin-top: 6px;
    }

    /* Diminuir altura específica do control-frete */
    .carrinho-ml .control-label.text-right.control-frete {
      height: auto;
      line-height: 1;
      padding: 2px 0;
      margin: 0 0 2px 0;
      font-size: 12px;
    }

    /* Ajustar o container pai se necessário */
    .carrinho-ml .control-group.frete {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    /* Ajustar o input-mini para ficar mais compacto e sem fundo */
    .carrinho-ml .input-mini {
      background: none;
      border: none;
      padding: 5px;
      margin: 0;
      height: auto;
      min-height: 20px;
      font-size: 12px;
      box-shadow: none;
    }

    /* Ajustar container do input-mini */
    .carrinho-ml .input-mini-container {
      margin: 0;
      padding: 0;
    }

    /* Elementos relacionados ao input-mini */
    .carrinho-ml .input-append .input-mini,
    .carrinho-ml .input-prepend .input-mini {
      border-radius: 0;
      width: auto;
    }

    /* Ajustar o input de quantidade para ficar mais compacto e sem fundo */
    .carrinho-ml input[name="quantidade"] {
      background: transparent !important;
      border: none !important;
      padding: 5px !important;
      margin: 0 !important;
      height: auto !important;
      min-height: 20px !important;
      font-size: 12px !important;
      box-shadow: none !important;
    }

    /* Estilo para o container do cupom */
    .carrinho-ml .cupom-container {
      background: #fff;
      margin-bottom: 2px;
      border-radius: ${isMobile ? '0' : '6px'};
      overflow: hidden;
    }

    /* Header do cupom com seta */
    .carrinho-ml .cupom-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 16px;
      cursor: pointer;
      user-select: none;
    }

    .carrinho-ml .cupom-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      color: #333;
    }

    .carrinho-ml .cupom-arrow {
      transition: transform 0.2s ease;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carrinho-ml .cupom-arrow svg {
      width: 12px;
      height: 12px;
    }

    /* Corpo do cupom (colapsável) */
    .carrinho-ml .cupom-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      padding: 0 16px;
    }

    .carrinho-ml .cupom-body.open {
      max-height: 80px;
      padding-bottom: 16px;
    }

    /* Input e botão do cupom */
    .carrinho-ml .cupom-input-container {
      display: flex;
      width: 100%;
    }

    .carrinho-ml #usarCupom {
      flex-grow: 1;
      height: 36px; /* Reduzido de 40px */
      border-radius: 6px 0 0 6px;
      border: 1px solid #e0e0e0;
      padding: 6px 10px; /* Reduzido de 8px 12px */
      outline: none;
      font-size: 13px;
    }

    .carrinho-ml #btn-cupom {
      height: 36px; /* Reduzido de 40px */
      background: #3483fa;
      border: none;
      border-radius: 0 6px 6px 0;
      color: white;
      padding: 6px 12px; /* Reduzido de 8px 16px */
      font-weight: 600;
      font-size: 13px; /* Reduzido de 14px */
      text-shadow: none;
    }

    /* Ajustes para os botões na barra de ação */
    .carrinho-ml .acao-editar .span12 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    /* Tamanho dos botões reduzido */
    .carrinho-ml .acao-editar .botao {
      padding: 10px 12px;
      font-size: 14px;
      min-height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Botão "Continuar comprando" menor */
    .carrinho-ml .acao-editar .botao:not(.principal) {
      flex: 1;
      white-space: nowrap;
      max-width: 35%;
    }

    /* Botão "Finalizar compra" maior */
    .carrinho-ml .acao-editar .botao.principal {
      flex: 2;
      font-weight: 700;
      font-size: 15px;
    }

    /* Ajuste para mobile */
    @media (max-width: 767px) {
      .carrinho-ml .acao-editar .span12 {
        gap: 8px;
      }
      
      .carrinho-ml .acao-editar .botao:not(.principal) {
        max-width: 38%;
        font-size: 13px;
        padding: 8px 10px;
      }
      
      .carrinho-ml .acao-editar .botao.principal {
        padding: 10px;
      }
    }

    /* Ajustes para o selo SSL */
    .carrinho-ml .selo-ssl {
      margin-top: 12px;
      text-align: center;
    }

    /* Ajustes para os botões na barra de ação - versão mais compacta */
    .carrinho-ml .acao-editar .span12 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      width: 100%;
      flex-wrap: nowrap;
    }

    /* Botão "Continuar comprando" ainda menor */
    .carrinho-ml .acao-editar .botao:not(.principal) {
      flex: 0.8;
      white-space: nowrap;
      max-width: 30%; /* Reduzido de 35% para 30% */
      font-size: 13px;
      padding: 8px 10px;
      min-height: 38px;
    }

    /* Botão "Finalizar compra" maior e com mais destaque */
    .carrinho-ml .acao-editar .botao.principal {
      flex: 3; /* Aumentado de 2 para 3 para criar mais contraste */
      font-weight: 700;
      font-size: 15px;
    }

    /* Ajustes responsivos para diferentes tamanhos de tela */
    @media (max-width: 767px) {
      .carrinho-ml .acao-editar .span12 {
        gap: 6px;
      }
      
      .carrinho-ml .acao-editar .botao:not(.principal) {
        max-width: 28%;
        font-size: 12px;
        padding: 6px 8px;
      }
      
      .carrinho-ml .acao-editar .botao.principal {
        padding: 8px 10px;
      }
    }

    /* Ajuste para telas muito pequenas */
    @media (max-width: 320px) {
      .carrinho-ml .acao-editar .botao:not(.principal) {
        max-width: 25%;
      }
    }

    /* Ajustes para centralizar os botões e controlar dimensões */
    .carrinho-ml .acao-editar .span12 {
      display: flex;
      justify-content: center;  /* Centraliza os botões */
      align-items: center;
      gap: 8px;
      width: 100%;
      flex-wrap: nowrap;
    }

    /* Botão "Continuar comprando" com altura reduzida */
    .carrinho-ml .acao-editar .botao:not(.principal) {
      flex: 0.8;
      white-space: nowrap;
      max-width: 25%; /* Reduzido de 30% para 25% */
      font-size: 13px;
      padding: 6px 10px; /* Reduzido de 8px para 6px no padding vertical */
      min-height: 32px; /* Reduzido de 38px para 32px */
    }

    /* Botão "Finalizar compra" com largura máxima */
    .carrinho-ml .acao-editar .botao.principal {
      flex: 3;
      font-weight: 700;
      font-size: 15px;
      max-width: 300px; /* Limitação de largura máxima */
    }

    /* Ajustes para telas menores */
    @media (max-width: 767px) {
      .carrinho-ml .acao-editar .botao:not(.principal) {
        max-width: 25%;
        font-size: 12px;
        padding: 4px 8px; /* Reduzido ainda mais para mobile */
        min-height: 28px; /* Altura mínima menor para mobile */
      }
      
      .carrinho-ml .acao-editar .botao.principal {
        padding: 8px 10px;
        max-width: 250px; /* Largura máxima um pouco menor em telas pequenas */
      }
    }

    /* Ajustes para imagem e nome do produto em row */
    .carrinho-ml .produto-row {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      margin-bottom: 2px;
    }

    /* Imagem do produto mais compacta */
    .carrinho-ml .conteiner-imagem {
      width: ${isMobile ? '60px' : '80px'};
      flex-shrink: 0;
      margin-right: 8px;
    }

    /* Organizar informações do produto horizontalmente */
    .carrinho-ml .sem-borda:not(.conteiner-imagem) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      width: calc(100% - ${isMobile ? '60px' : '80px'});
      padding-left: 0;
    }

    /* Nome do produto na mesma linha da imagem */
    .carrinho-ml .produto-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      gap: 8px;
    }

    /* Estilo para o nome do produto */
    .carrinho-ml .produto-info a {
      font-size: 14px;
      color: #333;
      text-decoration: none;
      display: inline;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
    }

    /* Atributos do produto abaixo do nome */
    .carrinho-ml .produto-info ul {
      width: 100%;
      margin-top: 4px;
      flex-basis: 100%;
      order: 2;
    }

    /* Ajustes para o card de produto - layout imagem e informações lado a lado */
    .carrinho-ml .produto-row {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 2px;
    }

    /* Imagem à esquerda com tamanho fixo e margem */
    .carrinho-ml .conteiner-imagem {
      width: ${isMobile ? '70px' : '80px'};
      flex-shrink: 0;
      margin-right: 8px;
    }

    /* Informações à direita em formato de coluna */
    .carrinho-ml .sem-borda:not(.conteiner-imagem) {
      display: flex;
      flex-direction: column;
      width: calc(100% - ${isMobile ? '70px' : '80px'});
      padding-left: 6px;
    }

    /* Nome do produto */
    .carrinho-ml .produto-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 2px;
      margin-bottom: 4px;
    }

    /* Estilo para texto do nome do produto */
    .carrinho-ml .produto-info a {
      font-size: 14px;
      color: #333;
      text-decoration: none;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      margin-bottom: 4px;
    }

    /* Informações de SKU/estoque abaixo do nome */
    .carrinho-ml .produto-info ul {
      margin: 0;
      padding: 0;
      list-style: none;
      width: 100%;
    }

    .carrinho-ml .produto-info li {
      font-size: 12px;
      color: #666;
      margin: 0;
      padding: 0;
    }

    /* Organização dos elementos no carrinho para layout side-by-side */
    .carrinho-ml .tabela-carrinho tbody tr.produto-card {
      display: grid;
      grid-template-columns: 100px 1fr auto auto; /* Aumentado de 70px para 100px */
      grid-template-areas: 
        "imagem info quantidade excluir"
        "imagem info preco preco";
      align-items: start;
      padding: 8px 8px; /* Aumentado o padding horizontal também */
      gap: 8px;
    }

    /* Controles de quantidade */
    .carrinho-ml .tabela-carrinho .clearfix {
      grid-area: quantidade;
      padding: 0;
      display: flex;
      align-items: center;
    }

    /* Botão excluir */
    .carrinho-ml .tabela-carrinho .excluir {
      grid-area: excluir;
      margin: 0;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Preço */
    .carrinho-ml .tabela-carrinho .col-item-unit-price {
      grid-area: preco;
      text-align: right;
      padding: 0;
    }

    /* Ajustes para mobile */
    @media (max-width: 767px) {
      .carrinho-ml .tabela-carrinho tbody tr.produto-card {
        grid-template-columns: 80px 1fr auto auto; /* Aumentado de 60px para 80px */
        grid-template-areas: 
          "imagem info info info"
          "imagem quantidade excluir preco";
        gap: 4px;
      }
      
      .carrinho-ml .conteiner-imagem {
        width: 80px; /* Ajustado para mobile */
      }
      
      .carrinho-ml .imagem img {
        width: 65px; /* Tamanho intermediário para mobile */
        height: 65px;
      }
    }

    /* Ajustes para mobile */
    @media (max-width: 767px) {
      .carrinho-ml .tabela-carrinho tbody tr.produto-card {
        grid-template-columns: 60px 1fr auto;
        grid-template-areas: 
          "imagem info info"
          "imagem quantidade preco"
          "imagem excluir excluir";
        gap: 4px;
      }
      
      /* Ajuste específico para mobile para manter o excluir ao lado da quantidade */
      .carrinho-ml .tabela-carrinho .clearfix {
        justify-content: flex-start;
      }
    }

    /* Estilo do nome do produto com quebra de linha garantida */
    .carrinho-ml .produto-info a {
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      color: #333;
      overflow: hidden;
      white-space: normal !important; /* Forçar quebra de linha */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
      max-height: 2.6em;
      word-break: break-word;
      word-wrap: break-word; /* Redundância para garantir */
      width: 100%;
      text-overflow: ellipsis;
    }

    /* Ajuste de altura para o preco-produto */
    .carrinho-ml .preco-produto {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    /* Ajuste da estrutura básica mantendo o clearfix abaixo do nome */
    .carrinho-ml .tabela-carrinho tbody tr.produto-card {
      display: grid;
      grid-template-columns: 120px 1fr; /* Aumentado espaço para imagem */
      grid-template-areas: 
        "imagem info"
        "controles controles";
      align-items: start;
      padding: 8px;
      gap: 8px;
    }

    /* Container da imagem com padding esquerdo maior */
    .carrinho-ml .conteiner-imagem {
      width: 120px;
      grid-area: imagem;
      padding-left: 12px; /* Mais espaço à esquerda */
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }

    /* Ajuste do tamanho da imagem */
    .carrinho-ml .imagem img {
      width: 80px; /* Imagem maior */
      height: 80px;
      object-fit: contain;
      border-radius: 4px;
    }

    /* Informações do produto com mais espaço para o nome */
    .carrinho-ml .sem-borda:not(.conteiner-imagem) {
      grid-area: info;
      padding-left: 12px; /* Padding à direita da imagem */
      width: 100%;
    }

    /* Estilo para o nome do produto com largura ampliada */
    .carrinho-ml .produto-info a {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      text-decoration: none;
      overflow: hidden;
      max-width: 150%; /* Permite que o texto se estenda mais */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.3;
      max-height: 2.6em;
      word-break: break-word;
    }

    /* Área dos controles (quantidade e excluir) */
    .carrinho-ml .tabela-carrinho .clearfix,
    .carrinho-ml .tabela-carrinho .excluir,
    .carrinho-ml .tabela-carrinho .col-item-unit-price {
      grid-area: controles;
      margin-top: 8px;
    }

    /* Linha para controles e preço */
    .carrinho-ml .controles-row {
      grid-area: controles;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 8px;
    }

    /* Adequação para mobile */
    @media (max-width: 767px) {
      .carrinho-ml .tabela-carrinho tbody tr.produto-card {
        grid-template-columns: 100px 1fr;
        gap: 4px;
      }
      
      .carrinho-ml .conteiner-imagem {
        width: 100px;
        padding-left: 8px;
      }
      
      .carrinho-ml .imagem img {
        width: 70px;
        height: 70px;
      }
      
      .carrinho-ml .sem-borda:not(.conteiner-imagem) {
        padding-left: 8px;
      }
    }

    /* Ajuste da estrutura básica para evitar sobreposição */
    .carrinho-ml .tabela-carrinho tbody tr.produto-card {
      display: grid;
      grid-template-columns: 120px 1fr; /* Mantém a estrutura básica */
      grid-template-areas: 
        "imagem info"
        "controles controles"; /* Área única para os controles */
      align-items: start;
      padding: 8px;
      gap: 8px;
    }

    /* Definir melhor a distribuição dos elementos nos controles */
    .carrinho-ml .controles-row {
      grid-area: controles;
      display: flex;
      justify-content: space-between; /* Separa os elementos horizontalmente */
      align-items: center;
      width: 100%;
      padding: 0 8px;
    }

    /* Ajuste do clearfix (quantidade e botão excluir) */
    .carrinho-ml .tabela-carrinho .clearfix {
      display: flex;
      align-items: center;
      margin: 0;
      position: relative; /* Garante posicionamento correto */
      z-index: 2; /* Coloca acima para garantir clicabilidade */
    }

    /* Ajuste do preço para não sobrepor */
    .carrinho-ml .tabela-carrinho .col-item-unit-price {
      text-align: right;
      padding: 0;
      margin-left: auto; /* Empurra para a direita */
      position: relative;
      z-index: 1; /* Camada abaixo do clearfix */
    }

    /* Garante que cada elemento filho do controles-row tenha seu espaço definido */
    .carrinho-ml .controles-row > * {
      flex: 0 0 auto; /* Não permite que os itens cresçam além do seu conteúdo */
    }

    /* Garante que o preço não cresça demais e sobreponha */
    .carrinho-ml .controles-row .col-item-unit-price {
      max-width: 120px;
    }

    /* Ajustes no container do cupom para ocupar mais espaço horizontal */
    .carrinho-ml .cupom-input-container {
      display: flex;
      width: 100%;
      max-width: 100%;
    }

    /* Input do cupom ocupando mais espaço */
    .carrinho-ml #cupom-field {
      flex-grow: 1;
      width: 100%;
      height: 36px;
      border-radius: 6px 0 0 6px;
      border: 1px solid #e0e0e0;
      padding: 6px 10px;
      outline: none;
      font-size: 13px;
    }

    /* Seta maior e com cor específica */
    .carrinho-ml .cupom-arrow {
      transition: transform 0.2s ease;
      width: 24px;  /* Aumentado de 18px para 24px */
      height: 24px; /* Aumentado de 18px para 24px */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carrinho-ml .cupom-arrow svg {
      width: 18px;  /* Aumentado de 12px para 18px */
      height: 18px; /* Aumentado de 12px para 18px */
      fill: #2c4cb3; /* Nova cor conforme solicitado */
    }

    /* Garantir que o corpo do cupom quando aberto tenha largura completa */
    .carrinho-ml .cupom-body.open {
      max-height: 80px;
      padding: 0 16px 16px;
      width: 100%;
      box-sizing: border-box;
    }

    /* Ajuste adicional para garantir que o cupom-container ocupe a largura completa */
    .carrinho-ml .cupom-container {
      width: 100%;
      box-sizing: border-box;
    }

    /* Estilo do botão de cupom igual ao do frete */
    .carrinho-ml #btn-usar-cupom {
      height: 40px; /* Igualado ao btn-frete */
      padding: 8px 16px; /* Igualado ao btn-frete */
      background: #3483fa;
      border: none;
      border-radius: 0 6px 6px 0;
      color: white;
      font-weight: 600;
      font-size: 14px; /* Igualado ao btn-frete */
      text-shadow: none;
    }

    /* Seta maior e com cor específica */
    .carrinho-ml .cupom-arrow {
      transition: transform 0.2s ease;
      width: 32px;  /* Aumentado para 32px */
      height: 32px; /* Aumentado para 32px */
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .carrinho-ml .cupom-arrow svg {
      width: 24px;  /* Aumentado para 24px */
      height: 24px; /* Aumentado para 24px */
      fill: #2c4cb3; /* Mantida a cor solicitada */
    }

    /* Ajuste para o campo de cupom acompanhar a altura do botão */
    .carrinho-ml #cupom-field {
      height: 40px; /* Igualado ao btn-frete */
      padding: 8px 12px; /* Ajustado para altura maior */
    }

    /* Ajuste para o botão de cupom exibir o texto completo */
    .carrinho-ml #btn-usar-cupom {
      height: 36px;
      padding: 6px 16px; /* Aumentado o padding horizontal */
      background: #3483fa;
      border: none;
      border-radius: 0 6px 6px 0;
      color: white;
      font-weight: 600;
      font-size: 13px;
      text-shadow: none;
      white-space: nowrap; /* Impede quebra de linha */
      min-width: 100px; /* Largura mínima para garantir espaço */
      text-overflow: clip;
      overflow: visible; /* Permite que o texto ultrapasse os limites se necessário */
    }

    /* Ajustar container para garantir que botão tenha espaço */
    .carrinho-ml .cupom-input-container {
      display: flex;
      width: 100%;
      align-items: center;
    }

    /* Ajustar campo para caber melhor */
    .carrinho-ml #cupom-field {
      flex-grow: 0;
      width: 160px; /* Largura fixa menor */
      max-width: 60%;
      height: 36px;
      border-radius: 6px 0 0 6px;
      border: 1px solid #e0e0e0;
      padding: 6px 10px;
      outline: none;
      font-size: 13px;
    }
  `;
  
  document.head.appendChild(carrinhoStyles);
  
  // Aplicar a classe principal ao container do carrinho
  const carrinhoContainer = document.querySelector('.finalizar-compra');
  if (carrinhoContainer) {
    carrinhoContainer.classList.add('carrinho-ml');
  }
  
  // Transformar os cards de produto 
  function transformarProdutosCarrinho() {
    // Adicionar classe ao container para CSS específico
    const caixaSombreada = document.querySelector('.caixa-sombreada');
    if (caixaSombreada) {
      caixaSombreada.classList.add('container-carrinho');
    }
    
    // Transformar cada linha de produto em card
    const produtoRows = document.querySelectorAll('.tabela-carrinho tbody tr:not(.bg-dark)');
    produtoRows.forEach(row => {
      row.classList.add('produto-card');
    });
    
    // Transformar os preços - apenas mostrar preço normal (sem PIX, sem parcelado)
    const precoElements = document.querySelectorAll('.col-item-unit-price .preco-produto');
    precoElements.forEach(precoEl => {
      // Verificar se já foi transformado
      if (precoEl.querySelector('.ml-price')) return;
      
      // Obter o container do item de preço
      const itemPriceContainer = precoEl.closest('.col-item-unit-price');
      
      // Extrair o preço unitário do data-attribute
      let precoNormal = '';
      if (itemPriceContainer && itemPriceContainer.hasAttribute('data-item-unit-valor')) {
        // Obter o valor do atributo e formatá-lo como moeda
        const valorUnitario = parseFloat(itemPriceContainer.getAttribute('data-item-unit-valor'));
        precoNormal = `R$ ${valorUnitario.toFixed(2).replace('.', ',')}`;
      } else {
        // Tentar extrair do elemento de preço parcelado
        const precoParceladoEl = precoEl.querySelector('.preco-parcelado');
        if (precoParceladoEl) {
          const match = precoParceladoEl.textContent.match(/ou\s+(R\$\s*[\d,.]+)/);
          if (match && match[1]) {
            precoNormal = match[1].trim();
          }
        }
        
        // Se ainda não encontrou, usar o primeiro preco-produto-valor disponível no elemento
        if (!precoNormal) {
          const precoValor = precoEl.querySelector('.preco-produto-valor, .preco-promocional');
          if (precoValor) {
            precoNormal = precoValor.textContent.trim();
          } else {
            // Último recurso: usar "Consulte"
            precoNormal = 'Consulte';
          }
        }
      }
      
      // Criar novo elemento de preço estilo ML
      const priceElement = document.createElement('div');
      priceElement.className = 'ml-price';
      priceElement.textContent = precoNormal;
      
      // Substituir a exibição antiga pela nova
      precoEl.innerHTML = '';
      precoEl.appendChild(priceElement);
    });

    // Procure por algo como:
    const precoParceladoContainer = document.createElement("div");
    precoParceladoContainer.innerHTML = `ou <strong>R$ ${valor}</strong> em até <strong>12x</strong>`;
  }

  // Função modificada para garantir que o resumo apareça mesmo com frete pré-selecionado
  function criarResumoCompra(forceCreate = false) {
    console.log('Tentando criar resumo de compra unificado');
    
    // Verificar se o container de ações existe
    const acaoEditar = document.querySelector('.acao-editar.row-fluid');
    if (!acaoEditar) {
      console.log('Elemento acao-editar não encontrado, tentando novamente em breve...');
      return false;
    }
    
    // Capturar os valores relevantes
    const subtotalElement = document.querySelector('.valor-subtotal');
    if (!subtotalElement) {
      console.log('Elemento subtotal não encontrado, tentando novamente em breve...');
      return false;
    }
    
    const subtotal = subtotalElement.textContent.trim();
    
    // Obter valores do frete (mesmo que não esteja selecionado ainda)
    let valorFrete = '0,00';
    const freteChecked = document.querySelector('input[name="formaEnvio"]:checked');
    if (freteChecked) {
      valorFrete = parseFloat(freteChecked.getAttribute('data-valor') || 0).toFixed(2).replace('.', ',');
    }
    
    const valorFreteFormatado = `R$ ${valorFrete}`;
    
    // Extrair valores de pagamento (com verificações de segurança)
    const valorTotal = document.querySelector('.valor-total')?.textContent.trim() || subtotal;
    const valorPixElement = document.querySelector('.descontos.avista strong');
    const valorPix = valorPixElement ? valorPixElement.textContent.trim() : valorTotal;
    const descontoPixText = valorPixElement ? valorPixElement.parentNode.textContent.match(/\((.+)\)/) : null;
    const descontoPix = descontoPixText && descontoPixText[1] ? descontoPixText[1] : '10% de desconto';
    
    // Valores do cartão (com verificações de segurança)
    const valorParceladoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/ou\s+(.*?)\s+em/);
    const valorParcelado = valorParceladoMatch ? valorParceladoMatch[1].trim() : subtotal;
    
    const parcelamentoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/em até\s+(.*?)\s+de/);
    const parcelamento = parcelamentoMatch ? parcelamentoMatch[1].trim() : '12x';
    
    const valorParcelaMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/de\s+(.*?)\s+sem juros/);
    const valorParcela = valorParcelaMatch ? valorParcelaMatch[1].trim() : '';
    
    // Remover resumo anterior se existir
    const resumoAnterior = acaoEditar.querySelector('.resumo-unificado');
    if (resumoAnterior) {
      resumoAnterior.parentNode.removeChild(resumoAnterior);
    }
    
    // Criar o container unificado
    const resumoUnificado = document.createElement('div');
    resumoUnificado.className = 'resumo-unificado span12';
    resumoUnificado.setAttribute('data-timestamp', Date.now());
    
    // Adicionar conteúdo do resumo e opções de pagamento
    resumoUnificado.innerHTML = `
      <div class="resumo-compra">
        <div class="resumo-titulo">Resumo da compra</div>
        <div class="resumo-linhas">
          <div class="resumo-linha">
            <span>Produtos (${document.querySelectorAll('.tabela-carrinho tbody tr:not(.bg-dark)').length})</span>
            <span>${subtotal}</span>
          </div>
          <div class="resumo-linha">
            <span>Frete</span>
            <span>${valorFreteFormatado}</span>
          </div>
        </div>
        <div class="resumo-total">
          <span>Total</span>
          <span>${valorTotal}</span>
        </div>
      </div>
      
      <div class="opcoes-pagamento">
        <div class="opcoes-titulo">Formas de pagamento</div>
        
        <div class="opcao-pagamento">
          <div class="opcao-header">
            <div class="opcao-icone">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M18.7125 14.2701L17.7133 15.2693C17.3407 15.6419 16.7269 15.6419 16.3543 15.2693L14.1625 13.0774C13.7899 12.7048 13.7899 12.0911 14.1625 11.7185L15.1617 10.7193C15.5343 10.3467 16.148 10.3467 16.5206 10.7193L18.7125 12.9112C19.0851 13.2838 19.0851 13.8975 18.7125 14.2701Z" fill="#00a650"/>
                <path d="M14.9391 10.8102L13.9399 11.8094C13.5673 12.182 12.9536 12.182 12.581 11.8094L10.3891 9.61752C10.0165 9.24493 10.0165 8.63121 10.3891 8.25862L11.3883 7.25942C11.7609 6.88683 12.3746 6.88683 12.7472 7.25942L14.9391 9.45131C15.3117 9.8239 15.3117 10.4376 14.9391 10.8102Z" fill="#00a650"/>
                <path d="M3.84085 12.8516L4.84005 11.8524C5.21265 11.4798 5.82638 11.4798 6.19895 11.8524L8.39087 14.0443C8.76345 14.4169 8.76345 15.0306 8.39087 15.4032L7.39167 16.4024C7.01908 16.775 6.40535 16.775 6.03276 16.4024L3.84085 14.2105C3.46826 13.8379 3.46826 13.2242 3.84085 12.8516Z" fill="#00a650"/>
              </svg>
            </div>
            <div class="opcao-titulo">Pix</div>
          </div>
          <div class="opcao-valor opcao-pix">${valorPix}</div>
          <div class="opcao-descricao">${descontoPix}</div>
        </div>
        
        <div class="opcao-pagamento">
          <div class="opcao-header">
            <div class="opcao-icone">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8ZM4 8H20V10H4V8ZM4 12V16H20V12H4Z" fill="#3483fa"/>
              </svg>
            </div>
            <div class="opcao-titulo">Cartão de crédito</div>
          </div>
          <div class="opcao-valor opcao-cartao">${valorParcelado}</div>
          <div class="opcao-descricao">em até ${parcelamento} de ${valorParcela || '-'} sem juros</div>
        </div>
      </div>
    `;
    
    // Ocultar elementos originais
    const elementsToHide = [
      '.valores-descontos', 
      '.tabela-carrinho .total',
      '.resumo-compra:not(.resumo-unificado .resumo-compra)',
      '.opcoes-pagamento:not(.resumo-unificado .opcoes-pagamento)'
    ];
    
    elementsToHide.forEach(selector => {
      const element = document.querySelector(selector);
      if (element && !element.closest('.resumo-unificado')) {
        if (selector === '.resumo-compra:not(.resumo-unificado .resumo-compra)' || 
            selector === '.opcoes-pagamento:not(.resumo-unificado .opcoes-pagamento)') {
          if (element.parentNode) element.parentNode.removeChild(element);
        } else {
          element.style.display = 'none';
        }
      }
    });
    
    // Verificar se existe o container span12 dentro do acao-editar
    const span12 = acaoEditar.querySelector('.span12');
    
    if (span12) {
      // Inserir antes dos botões (garantir que os botões permaneçam no final)
      const botoes = Array.from(span12.querySelectorAll('.botao'));
      if (botoes.length > 0) {
        span12.insertBefore(resumoUnificado, botoes[0]);
      } else {
        span12.insertBefore(resumoUnificado, span12.firstChild);
      }
    } else {
      // Se não existir, criar uma estrutura span12 e inserir
      const novoSpan12 = document.createElement('div');
      novoSpan12.className = 'span12';
      novoSpan12.appendChild(resumoUnificado);
      
      // Inserir como primeiro filho do acao-editar
      acaoEditar.insertBefore(novoSpan12, acaoEditar.firstChild);
    }
    
    // Ocultar o botão "Continuar comprando"
    const botaoContinuar = acaoEditar.querySelector('.botao:not(.principal)');
    if (botaoContinuar) {
      botaoContinuar.style.display = 'none';
    }
    
    // Ajustar o botão de finalizar compra para ocupar todo o espaço
    const botaoFinalizar = acaoEditar.querySelector('.botao.principal');
    if (botaoFinalizar) {
      botaoFinalizar.style.width = '100%';
      botaoFinalizar.style.maxWidth = '100%';
      botaoFinalizar.style.fontSize = '16px';
      botaoFinalizar.style.padding = '12px';
    }
    
    // Adicionar estilo para o resumo unificado (se ainda não existe)
    if (!document.getElementById('resumo-unificado-estilos')) {
      const estilos = document.createElement('style');
      estilos.id = 'resumo-unificado-estilos';
      estilos.textContent = `
        .resumo-unificado {
          margin-bottom: 20px;
          width: 100%;
        }
        
        .resumo-unificado .resumo-compra,
        .resumo-unificado .opcoes-pagamento {
          margin-bottom: 10px;
        }
      `;
      document.head.appendChild(estilos);
    }
    
    console.log('Resumo unificado criado com sucesso');
    return true;
  }

  // Adicionar sistema de tentativas múltiplas para garantir que o resumo seja criado
  function garantirResumoCompra() {
    let tentativas = 0;
    const maxTentativas = 5;
    const intervalo = 800; // ms entre tentativas
    
    function tentarCriarResumo() {
      console.log(`Tentativa ${tentativas + 1} de criar o resumo`);
      
      if (document.querySelector('.resumo-unificado')) {
        console.log('Resumo já existe, verificando se precisa atualizar...');
        // Se o resumo já existe, verificar se precisa atualizar
        setTimeout(() => criarResumoCompra(true), 300);
        return;
      }
      
      const sucesso = criarResumoCompra(true);
      
      if (!sucesso && tentativas < maxTentativas) {
        tentativas++;
        console.log(`Tentativa falhou, tentando novamente em ${intervalo}ms...`);
        setTimeout(tentarCriarResumo, intervalo);
      }
    }
    
    // Iniciar primeira tentativa
    tentarCriarResumo();
  }

  // Função modificada para criar resumo de compra e opções de pagamento dentro do acao-editar
  function criarResumoCompraAntigo() {
    // Verificar se o resumo já existe
    if (document.querySelector('.resumo-compra')) return;
    
    // Capturar os valores relevantes
    const subtotalElement = document.querySelector('.valor-subtotal');
    if (!subtotalElement) return;
    
    const subtotal = subtotalElement.textContent.trim();
    
    let valorFrete = '0,00';
    const freteChecked = document.querySelector('input[name="formaEnvio"]:checked');
    if (freteChecked) {
      valorFrete = parseFloat(freteChecked.getAttribute('data-valor')).toFixed(2).replace('.', ',');
    }
    
    const valorFreteFormatado = `R$ ${valorFrete}`;
    
    // Extrair valores de pagamento
    const valorTotal = document.querySelector('.valor-total')?.textContent.trim() || '';
    const valorPixElement = document.querySelector('.descontos.avista strong');
    const valorPix = valorPixElement ? valorPixElement.textContent.trim() : '';
    const descontoPixText = valorPixElement ? valorPixElement.parentNode.textContent.match(/\((.+)\)/) : null;
    const descontoPix = descontoPixText && descontoPixText[1] ? descontoPixText[1] : '10% de desconto';
    
    // Valores do cartão
    const valorParceladoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/ou\s+(.*?)\s+em/);
    const valorParcelado = valorParceladoMatch ? valorParceladoMatch[1].trim() : subtotal;
    
    const parcelamentoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/em até\s+(.*?)\s+de/);
    const parcelamento = parcelamentoMatch ? parcelamentoMatch[1].trim() : '12x';
    
    const valorParcelaMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/de\s+(.*?)\s+sem juros/);
    const valorParcela = valorParcelaMatch ? valorParcelaMatch[1].trim() : '';
    
    // Criar os novos elementos de resumo
    const resumoCompra = document.createElement('div');
    resumoCompra.className = 'resumo-compra';
    
    resumoCompra.innerHTML = `
      <div class="resumo-titulo">Resumo da compra</div>
      <div class="resumo-linhas">
        <div class="resumo-linha">
          <span>Produtos (${document.querySelectorAll('.tabela-carrinho tbody tr:not(.bg-dark)').length})</span>
          <span>${subtotal}</span>
        </div>
        <div class="resumo-linha">
          <span>Frete</span>
          <span>${valorFreteFormatado}</span>
        </div>
      </div>
      <div class="resumo-total">
        <span>Total</span>
        <span>${valorTotal || subtotal}</span>
      </div>
    `;
    
    // Criar as opções de pagamento
    const opcoesPagamento = document.createElement('div');
    opcoesPagamento.className = 'opcoes-pagamento';
    
    opcoesPagamento.innerHTML = `
      <div class="opcoes-titulo">Formas de pagamento</div>
      
      <div class="opcao-pagamento">
        <div class="opcao-header">
          <div class="opcao-icone">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M18.7125 14.2701L17.7133 15.2693C17.3407 15.6419 16.7269 15.6419 16.3543 15.2693L14.1625 13.0774C13.7899 12.7048 13.7899 12.0911 14.1625 11.7185L15.1617 10.7193C15.5343 10.3467 16.148 10.3467 16.5206 10.7193L18.7125 12.9112C19.0851 13.2838 19.0851 13.8975 18.7125 14.2701Z" fill="#00a650"/>
              <path d="M14.9391 10.8102L13.9399 11.8094C13.5673 12.182 12.9536 12.182 12.581 11.8094L10.3891 9.61752C10.0165 9.24493 10.0165 8.63121 10.3891 8.25862L11.3883 7.25942C11.7609 6.88683 12.3746 6.88683 12.7472 7.25942L14.9391 9.45131C15.3117 9.8239 15.3117 10.4376 14.9391 10.8102Z" fill="#00a650"/>
              <path d="M3.84085 12.8516L4.84005 11.8524C5.21265 11.4798 5.82638 11.4798 6.19895 11.8524L8.39087 14.0443C8.76345 14.4169 8.76345 15.0306 8.39087 15.4032L7.39167 16.4024C7.01908 16.775 6.40535 16.775 6.03276 16.4024L3.84085 14.2105C3.46826 13.8379 3.46826 13.2242 3.84085 12.8516Z" fill="#00a650"/>
            </svg>
          </div>
          <div class="opcao-titulo">Pix</div>
        </div>
        <div class="opcao-valor opcao-pix">${valorPix}</div>
        <div class="opcao-descricao">${descontoPix}</div>
      </div>
      
      <div class="opcao-pagamento">
        <div class="opcao-header">
          <div class="opcao-icone">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8ZM4 8H20V10H4V8ZM4 12V16H20V12H4Z" fill="#3483fa"/>
            </svg>
          </div>
          <div class="opcao-titulo">Cartão de crédito</div>
        </div>
        <div class="opcao-valor opcao-cartao">${valorParcelado}</div>
        <div class="opcao-descricao">em até ${parcelamento} de ${valorParcela || '-'} sem juros</div>
      </div>
    `;
    
    // Ocultar o antigo resumo de valores
    const valoresDescontos = document.querySelector('.valores-descontos');
    if (valoresDescontos) {
      valoresDescontos.style.display = 'none';
    }
    
    // Ocultar o campo "Total:" original
    const totalOriginal = document.querySelector('.tabela-carrinho .total');
    if (totalOriginal) {
      totalOriginal.style.display = 'none';
    }
    
    // Inserir os novos elementos antes das ações do carrinho
    const acaoEditar = document.querySelector('.finalizar-compra .acao-editar');
    if (acaoEditar) {
      acaoEditar.parentElement.insertBefore(opcoesPagamento, acaoEditar);
      acaoEditar.parentElement.insertBefore(resumoCompra, opcoesPagamento);
    }
  }
  
  // Adicionar classe "checked" à opção de frete selecionada
  function marcarFretesMobile() {
    const freteInputs = document.querySelectorAll('input[name="formaEnvio"]');
    freteInputs.forEach(input => {
      const label = input.closest('label');
      if (input.checked && label) {
        label.classList.add('checked');
      }
      
      input.addEventListener('change', function() {
        document.querySelectorAll('.formas-envio label').forEach(l => {
          l.classList.remove('checked');
        });
        
        if (this.checked) {
          this.closest('label').classList.add('checked');
        }
        
        // Recriar o resumo ao selecionar nova opção de frete
        setTimeout(() => {
          criarResumoCompra();
        }, 300);
      });
    });
  }
  
  // Melhorar a estrutura do carrinho para mobile
  function otimizarEstruturaMobile() {
    if (!isMobile) return;
    
    // Simplificar SKU e informações de estoque
    document.querySelectorAll('.produto-info li').forEach(item => {
      const text = item.textContent.trim();
      if (text.includes('SKU:')) {
        const sku = text.match(/SKU:\s*(\S+)/);
        if (sku && sku[1]) {
          item.innerHTML = `<span>SKU: <strong>${sku[1]}</strong></span>`;
        }
      }
      if (text.includes('Estoque:')) {
        const estoque = text.match(/Estoque:\s*(.+)/);
        if (estoque && estoque[1]) {
          item.innerHTML = `<span>Prazo: <strong>${estoque[1]}</strong></span>`;
        }
      }
    });
  }

  // Reorganizar estrutura do carrinho para layout mobile
  function reorganizarEstruturaCarrinho() {
    const produtoRows = document.querySelectorAll('.tabela-carrinho tbody tr:not(.bg-dark)');
    
    produtoRows.forEach(row => {
      // Verificar se já tem a estrutura reorganizada
      if (row.querySelector('.produto-row')) return;
      
      // Criar container para imagem e info
      const produtoRow = document.createElement('div');
      produtoRow.className = 'produto-row';
      
      // Criar container para preço e controles
      const controlesRow = document.createElement('div');
      controlesRow.className = 'controles-row';
      
      // Encontrar elementos
      const containerImagem = row.querySelector('.conteiner-imagem');
      const infoProduto = row.querySelector('.sem-borda:not(.conteiner-imagem)');
      const priceElement = row.querySelector('.col-item-unit-price');
      const clearfixElement = row.querySelector('.clearfix');
      const excluirElement = row.querySelector('.excluir');
      
      // NÃO faça isso - precisamos manter o excluir como elemento separado no grid
      
      // Reorganizar estrutura
      if (containerImagem && infoProduto) {
        // Remover elementos do DOM para reorganizá-los
        if (containerImagem.parentNode) containerImagem.parentNode.removeChild(containerImagem);
        if (infoProduto.parentNode) infoProduto.parentNode.removeChild(infoProduto);
        if (priceElement && priceElement.parentNode) priceElement.parentNode.removeChild(priceElement);
        if (clearfixElement && clearfixElement.parentNode) clearfixElement.parentNode.removeChild(clearfixElement);
        
        // Montar a estrutura da linha de produto
        produtoRow.appendChild(containerImagem);
        produtoRow.appendChild(infoProduto);
        
        // Montar a linha de controles (quantidade + preço)
        controlesRow.appendChild(clearfixElement);
        controlesRow.appendChild(priceElement);
        
        // Inserir as novas estruturas na linha
        row.appendChild(produtoRow);
        row.appendChild(controlesRow);
      }
    });

    // Adicionar ao final da função reorganizarEstruturaCarrinho()
    // Ajustar altura dos elementos com colspan
    const colspanElements = document.querySelectorAll('.tabela-carrinho td[colspan]');
    colspanElements.forEach(element => {
      element.style.padding = '2px 4px';
      element.style.height = 'auto';
      element.style.lineHeight = '1.2';
    });

    // Tratar especificamente linhas de subtotal/total
    const bgDarkRows = document.querySelectorAll('.tabela-carrinho .bg-dark');
    bgDarkRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        cell.style.padding = '6px 4px';
      });
    });

    // Na função reorganizarEstruturaCarrinho(), adicione o seguinte:
    produtoRows.forEach(row => {
      // Verificar se já foi processado
      if (row.dataset.excluirMovido) return;
      
      // Encontrar elementos
      const clearfixElement = row.querySelector('.clearfix');
      const excluirElement = row.querySelector('.excluir')?.parentElement;
      
      // Mover o excluir para dentro do clearfix
      if (excluirElement && clearfixElement) {
        // Remover excluirElement da posição original
        const excluirDiv = excluirElement.querySelector('.excluir');
        if (excluirDiv) {
          excluirElement.parentNode.removeChild(excluirElement);
          clearfixElement.appendChild(excluirDiv);
          row.dataset.excluirMovido = 'true';
        }
      }
    });
  }

  // Reorganizar elementos dos fretes
  function reorganizarFreteRows() {
    const freteLabels = document.querySelectorAll('.formas-envio label');
    
    freteLabels.forEach(label => {
      // Verificar se já foi reorganizado
      if (label.dataset.reorganizado) return;
      
      const radioInput = label.querySelector('input[type="radio"]');
      const corPrincipal = label.querySelector('.cor-principal');
      const valor = label.querySelector('.valor');
      const prazo = label.querySelector('.prazo');
      const nome = label.querySelector('.nome');
      
      // Garantir a ordem: radio, cor-principal, valor, prazo, nome
      if (radioInput && corPrincipal && valor && prazo) {
        // Reorganizar removendo e readicionando na ordem correta
        if (radioInput.parentNode) {
          radioInput.parentNode.removeChild(radioInput);
          label.appendChild(radioInput);
        }
        
        if (corPrincipal.parentNode) {
          corPrincipal.parentNode.removeChild(corPrincipal);
          label.appendChild(corPrincipal);
        }
        
        if (valor.parentNode) {
          valor.parentNode.removeChild(valor);
          label.appendChild(valor);
        }
        
        if (prazo.parentNode) {
          prazo.parentNode.removeChild(prazo);
          label.appendChild(prazo);
        }
        
        if (nome && nome.parentNode) {
          nome.parentNode.removeChild(nome);
          label.appendChild(nome);
        }
        
        // Marcar como reorganizado
        label.dataset.reorganizado = 'true';
      }

      if (prazo) {
        prazo.style.fontSize = '11px';
        prazo.style.padding = '0 3px';
        prazo.style.marginLeft = 'auto';
      }
      
      if (nome) {
        nome.style.fontSize = '11px';
        nome.style.marginLeft = '20px';
        nome.style.marginTop = '1px';
      }
      
      if (valor) {
        valor.style.fontSize = '14px';
        valor.style.marginLeft = '20px';
        valor.style.marginTop = '2px';
      }
    });
  }

  // Aplicar estilos diretamente aos inputs de quantidade - adicione essa função
  function ajustarInputQuantidade() {
    document.querySelectorAll('input[name="quantidade"]').forEach(input => {
      input.style.background = 'transparent';
      input.style.border = 'none';
      input.style.padding = '5px';
      input.style.margin = '0';
      input.style.height = 'auto';
      input.style.minHeight = '20px';
      input.style.fontSize = '12px';
      input.style.boxShadow = 'none';
    });
  }

  // Adicione esta função para ajustar todos os espaçamentos
  function ajustarEspacamentos() {
    // Ajustar TR's
    document.querySelectorAll('.tabela-carrinho tbody tr:not(.bg-dark)').forEach(row => {
      row.style.marginBottom = '2px';
      row.style.padding = '0';
    });
    
    // Ajustar células
    document.querySelectorAll('.tabela-carrinho td').forEach(cell => {
      cell.style.padding = '2px';
      cell.style.margin = '0';
    });
    
    // Ajustar elementos produto-row
    document.querySelectorAll('.produto-row').forEach(row => {
      row.style.marginBottom = '2px';
    });
    
    // Ajustar componentes principais
    const componentes = ['#formCalcularFrete', '.formas-envio', '.resumo-compra', '.opcoes-pagamento'];
    componentes.forEach(selector => {
      const elem = document.querySelector(selector);
      if (elem) elem.style.marginBottom = '2px';
    });
    
    // Ajustar itens de frete
    document.querySelectorAll('.formas-envio li').forEach((item, idx, arr) => {
      item.style.margin = idx < arr.length - 1 ? '0 0 2px 0' : '0';
    });
  }

  // Função melhorada para transformar o cupom em toggle
  function recriarCupomGaveta() {
    console.log("Iniciando transformação do cupom em gaveta");
    
    // Encontrar o formulário de cupom usando seletor mais preciso
    const cupomRow = document.querySelector('tr.bg-dark td form.form-horizontal[action*="cupom"]').closest('tr.bg-dark');
    
    if (!cupomRow) {
      console.log('Linha do cupom não encontrada');
      return;
    }
    
    // Verificar se já foi processado
    if (cupomRow.classList.contains('cupom-processado')) {
      console.log('Cupom já foi processado anteriormente');
      return;
    }
    
    console.log('Cupom encontrado, iniciando transformação');
    
    // Obter informações do form original
    const originalForm = cupomRow.querySelector('form.form-horizontal');
    const formAction = originalForm.getAttribute('action');
    const formMethod = originalForm.getAttribute('method') || 'post';
    
    // Criar novo TD com colspan unificado (6 para cobrir toda a largura)
    const novaTd = document.createElement('td');
    novaTd.setAttribute('colspan', '6');
    
    // Criar estrutura de cupom colapsável
    novaTd.innerHTML = `
      <div class="cupom-container">
        <div class="cupom-header">
          <h3>Cupom de desconto</h3>
          <div class="cupom-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
            </svg>
          </div>
        </div>
        <div class="cupom-body">
          <form class="form-horizontal" action="${formAction}" method="${formMethod}">
            <div class="cupom-input-container">
              <input type="text" name="cupom" id="cupom-field" class="input-small" placeholder="Digite seu cupom">
              <button type="submit" class="btn" id="btn-usar-cupom">Usar cupom</button>
            </div>
          </form>
        </div>
      </div>
    `;
    
    // Limpar e substituir o conteúdo da linha
    while (cupomRow.firstChild) {
      cupomRow.removeChild(cupomRow.firstChild);
    }
    
    // Adicionar novo conteúdo
    cupomRow.appendChild(novaTd);
    cupomRow.classList.add('cupom-processado');
    
    // Adicionar evento de clique para toggle
    const cupomHeader = cupomRow.querySelector('.cupom-header');
    const cupomBody = cupomRow.querySelector('.cupom-body');
    const cupomArrow = cupomRow.querySelector('.cupom-arrow');
    
    if (cupomHeader && cupomBody) {
      console.log('Adicionando evento de clique ao cabeçalho do cupom');
      cupomHeader.style.cursor = 'pointer';
      
      cupomHeader.addEventListener('click', function() {
        console.log('Clique no cabeçalho do cupom');
        cupomBody.classList.toggle('open');
        
        // Rotacionar seta
        if (cupomBody.classList.contains('open')) {
          cupomArrow.style.transform = 'rotate(180deg)';
        } else {
          cupomArrow.style.transform = 'rotate(0)';
        }
      });
    }
    
    console.log('Transformação do cupom concluída');
  }

  // Adicione esta função para garantir que a navegação móvel não sobreponha
  function ajustarNavegacaoMovel() {
    if (!isMobile) return;
    
    // Verificar se temos a barra de navegação móvel no DOM
    const rodapeMobile = document.querySelector('.rodape-mobile-2');
    if (rodapeMobile) {
      // Garantir que a barra de navegação não apareça na página do carrinho
      rodapeMobile.style.display = 'none';
      
      // Aumentar o padding-bottom do body para evitar que o conteúdo fique escondido
      document.body.style.paddingBottom = '70px';
    }
    
    // Garantir que os botões de ação tenham largura total
    const acaoEditar = document.querySelector('.acao-editar');
    if (acaoEditar) {
      acaoEditar.style.width = '100%';
      acaoEditar.style.maxWidth = '100%';
      acaoEditar.style.boxSizing = 'border-box';
      acaoEditar.style.left = '0';
      acaoEditar.style.right = '0';
    }
  }

  // Função específica para mover o botão excluir para dentro do clearfix
  function moverExcluirParaClearfix() {
    console.log('Movendo botões de excluir para dentro dos clearfix');
    
    // Selecionar todos os produtos no carrinho
    const produtoRows = document.querySelectorAll('.tabela-carrinho tbody tr.produto-card');
    
    produtoRows.forEach(row => {
      // Encontrar elementos pela tag e classe específica
      const clearfixElement = row.querySelector('td.clearfix');
      const excluirElement = row.querySelector('td > .excluir');
      
      if (clearfixElement && excluirElement) {
        console.log('Elementos encontrados, movendo excluir para dentro do clearfix');
        
        // Obter o elemento pai do excluir para removê-lo completamente
        const excluirParent = excluirElement.parentElement;
        
        // Remover o elemento excluir do seu local atual
        excluirParent.removeChild(excluirElement);
        
        // Adicionar o elemento excluir ao clearfix
        clearfixElement.appendChild(excluirElement);
        
        // Aplicar estilos diretamente para garantir o visual correto
        excluirElement.style.marginLeft = '15px';
        excluirElement.style.display = 'flex';
        excluirElement.style.alignItems = 'center';
      } else {
        console.log('Elementos não encontrados para este produto');
      }
    });
  }

  // Função corrigida para manter a barra de progresso mesmo com frete grátis
  function criarBarraProgressoFreteGratis() {
    console.log('Iniciando criação da barra de progresso de frete grátis');
    
    // Verificar se a barra já existe para evitar duplicação
    const barraExistente = document.querySelector('.frete-gratis-progresso-container');
    if (barraExistente) {
      console.log('Barra de progresso já existe, atualizando valores');
      return atualizarBarraProgressoExistente();
    }
    
    // Verificar se há um alerta de frete grátis (original ou quando já atingiu)
    const alertaFreteGratis = document.querySelector('#li-alerta-frete-gratis');
    const alertaFreteGratisSucesso = document.querySelector('.li-alerta--frete-gratis-situacao-sucesso');
    
    // Determinar se o frete grátis já foi atingido
    const freteGratisAtingido = alertaFreteGratisSucesso !== null;
    
    let valorFaltante = '0,00';
    let valorFaltanteNum = 0;
    let subtotalNum = 0;
    
    // Se ainda não atingiu, extrair o valor que falta para o frete grátis
    if (!freteGratisAtingido && alertaFreteGratis) {
      const textoAlerta = alertaFreteGratis.querySelector('.li-alerta-frete-gratis-content').textContent;
      const valorMatch = textoAlerta.match(/R\$\s*([\d.,]+)/);
      
      if (valorMatch) {
        valorFaltante = valorMatch[1].trim();
      }
    }
    
    // Obter o valor total do carrinho atual
    const subtotalElement = document.querySelector('.valor-subtotal');
    if (!subtotalElement) {
      console.log('Elemento de subtotal não encontrado');
      return;
    }
    
    const subtotalText = subtotalElement.textContent.trim();
    const subtotalMatch = subtotalText.match(/R\$\s*([\d.,]+)/);
    
    if (!subtotalMatch) {
      console.log('Não foi possível extrair o valor do subtotal');
      return;
    }
    
    // Converter valores para números
    if (!freteGratisAtingido) {
      valorFaltanteNum = parseFloat(valorFaltante.replace('.', '').replace(',', '.'));
    }
    subtotalNum = parseFloat(subtotalMatch[1].replace('.', '').replace(',', '.'));
    
    // Calcular a porcentagem
    let porcentagemAtual = 100; // Valor padrão quando já atingiu
    
    if (!freteGratisAtingido && valorFaltanteNum > 0) {
      const valorTotalFreteGratis = subtotalNum + valorFaltanteNum;
      porcentagemAtual = Math.round((subtotalNum / valorTotalFreteGratis) * 100);
      porcentagemAtual = Math.max(0, Math.min(100, porcentagemAtual));
    }
    
    // Texto apropriado baseado na condição
    const textoFreteGratis = freteGratisAtingido 
      ? "Parabéns, você tem frete grátis!"
      : `Com mais R$ ${valorFaltante} o frete é por nossa conta!`;
    
    // Criar a estrutura da barra de progresso
    const barraProgressoContainer = document.createElement('div');
    barraProgressoContainer.className = 'frete-gratis-progresso-container';
    barraProgressoContainer.setAttribute('data-processado', 'true');
    barraProgressoContainer.setAttribute('data-frete-gratis-atingido', freteGratisAtingido ? 'true' : 'false');
    
    barraProgressoContainer.innerHTML = `
      <div class="progress" aria-hidden="true">
        <div class="andes-progress-indicator-linear">
          <span class="andes-visually-hidden" role="status" aria-live="polite" aria-atomic="true"></span>
          <div class="fill fill--highlighted" role="progressbar" 
               style="width:${porcentagemAtual}%;background-color:#3483FA" 
               aria-valuenow="${porcentagemAtual}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="frete-gratis-texto">
        ${textoFreteGratis}
      </div>
    `;
    
    // Encontrar o elemento control-label para inserir a barra de progresso abaixo
    const controlFrete = document.querySelector('.control-label.text-right.control-frete');
    
    if (!controlFrete) {
      console.log('Elemento de controle de frete não encontrado');
      return;
    }
    
    // Inserir a barra de progresso após o elemento control-label
    controlFrete.parentNode.insertBefore(barraProgressoContainer, controlFrete.nextSibling);
    
    // Ocultar os alertas originais
    if (alertaFreteGratis) {
      alertaFreteGratis.style.display = 'none';
    }
    if (alertaFreteGratisSucesso) {
      alertaFreteGratisSucesso.style.display = 'none';
    }
    
    // Adicionar estilos CSS apenas uma vez
    if (!document.getElementById('frete-gratis-estilos')) {
      const estilos = document.createElement('style');
      estilos.id = 'frete-gratis-estilos';
      estilos.textContent = `
        .frete-gratis-progresso-container {
          margin: 10px 0;
          padding: 0 5px;
        }
        
        .frete-gratis-progresso-container .progress {
          height: 6px;
          background-color: #EDEDED;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        
        .frete-gratis-progresso-container .andes-progress-indicator-linear {
          height: 100%;
          width: 100%;
          position: relative;
        }
        
        .frete-gratis-progresso-container .fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .frete-gratis-progresso-container .frete-gratis-texto {
          font-size: 12px;
          color: #666;
          text-align: center;
          font-weight: 500;
        }
        
        .frete-gratis-progresso-container[data-frete-gratis-atingido="true"] .frete-gratis-texto {
          color: #00a650;
          font-weight: 700;
        }
      `;
      
      document.head.appendChild(estilos);
    }
    
    // Se atingiu frete grátis, selecionar opção de frete grátis automaticamente
    if (freteGratisAtingido) {
      // Usar setTimeout para garantir que as opções de frete já foram carregadas
      setTimeout(() => {
        selecionarFreteGratisAutomaticamente();
      }, 1000);
    }
    
    console.log('Barra de progresso de frete grátis criada com sucesso');
  }

  // Função melhorada para atualizar a barra existente
  function atualizarBarraProgressoExistente() {
    const barraExistente = document.querySelector('.frete-gratis-progresso-container');
    if (!barraExistente) return;
    
    // Verificar se há um alerta de frete grátis (original ou quando já atingiu)
    const alertaFreteGratis = document.querySelector('#li-alerta-frete-gratis');
    const alertaFreteGratisSucesso = document.querySelector('.li-alerta--frete-gratis-situacao-sucesso');
    
    // Determinar se o frete grátis já foi atingido
    const freteGratisAtingido = alertaFreteGratisSucesso !== null;
    
    let valorFaltante = '0,00';
    let valorFaltanteNum = 0;
    
    // Se ainda não atingiu, extrair o valor que falta
    if (!freteGratisAtingido && alertaFreteGratis) {
      const textoAlerta = alertaFreteGratis.querySelector('.li-alerta-frete-gratis-content').textContent;
      const valorMatch = textoAlerta.match(/R\$\s*([\d.,]+)/);
      if (valorMatch) {
        valorFaltante = valorMatch[1].trim();
      }
    }
    
    // Atualizar informações do subtotal
    const subtotalElement = document.querySelector('.valor-subtotal');
    if (!subtotalElement) return;
    
    const subtotalText = subtotalElement.textContent.trim();
    const subtotalMatch = subtotalText.match(/R\$\s*([\d.,]+)/);
    if (!subtotalMatch) return;
    
    const subtotalNum = parseFloat(subtotalMatch[1].replace('.', '').replace(',', '.'));
    
    // Calcular porcentagem
    let porcentagemAtual = 100; // Valor padrão quando já atingiu
    
    if (!freteGratisAtingido && valorFaltante !== '0,00') {
      valorFaltanteNum = parseFloat(valorFaltante.replace('.', '').replace(',', '.'));
      const valorTotalFreteGratis = subtotalNum + valorFaltanteNum;
      porcentagemAtual = Math.round((subtotalNum / valorTotalFreteGratis) * 100);
      porcentagemAtual = Math.max(0, Math.min(100, porcentagemAtual));
    }
    
    // Texto apropriado baseado na condição
    const textoFreteGratis = freteGratisAtingido 
      ? "Parabéns, você tem frete grátis!"
      : `Com mais R$ ${valorFaltante} o frete é por nossa conta!`;
    
    // Atualizar atributos da barra
    barraExistente.setAttribute('data-frete-gratis-atingido', freteGratisAtingido ? 'true' : 'false');
    
    // Atualizar texto
    const textoElement = barraExistente.querySelector('.frete-gratis-texto');
    if (textoElement) {
      textoElement.textContent = textoFreteGratis;
    }
    
    // Atualizar barra
    const fillElement = barraExistente.querySelector('.fill');
    if (fillElement) {
      fillElement.style.width = `${porcentagemAtual}%`;
      fillElement.setAttribute('aria-valuenow', porcentagemAtual);
    }
    
    // Ocultar os alertas originais
    if (alertaFreteGratis) {
      alertaFreteGratis.style.display = 'none';
    }
    if (alertaFreteGratisSucesso) {
      alertaFreteGratisSucesso.style.display = 'none';
    }
    
    // Se atingiu frete grátis, selecionar opção de frete grátis automaticamente
    if (freteGratisAtingido) {
      setTimeout(() => {
        selecionarFreteGratisAutomaticamente();
      }, 1000);
    }
  }

  // Função melhorada para selecionar o frete grátis automaticamente
  function selecionarFreteGratisAutomaticamente() {
    console.log('Tentando selecionar frete grátis automaticamente');
    
    // Verificar se as opções de frete estão visíveis
    const formasEnvio = document.querySelector('.formas-envio');
    if (!formasEnvio || formasEnvio.offsetParent === null) {
      console.log('Formas de envio não estão visíveis ainda, tentando novamente em 1 segundo');
      setTimeout(selecionarFreteGratisAutomaticamente, 1000);
    }
  }

  // Função melhorada para selecionar o frete grátis automaticamente
  function selecionarFreteGratisAutomaticamente() {
    console.log('Tentando selecionar frete grátis automaticamente');
    
    // Verificar se as opções de frete estão visíveis
    const formasEnvio = document.querySelector('.formas-envio');
    if (!formasEnvio || formasEnvio.offsetParent === null) {
      console.log('Formas de envio não estão visíveis ainda, tentando novamente em 1 segundo');
      setTimeout(selecionarFreteGratisAutomaticamente, 1000);
      return;
    }
    
    // Procurar por opções de frete
    const opcoesFreteInputs = document.querySelectorAll('input[name="formaEnvio"]');
    if (!opcoesFreteInputs.length) {
      console.log('Nenhuma opção de frete encontrada, tentando novamente em 1 segundo');
      setTimeout(selecionarFreteGratisAutomaticamente, 1000);
      return;
    }
    
    // Procurar por opções de frete grátis (valor = 0 ou texto "Grátis")
    let freteGratisInput = null;
    
    for (const input of opcoesFreteInputs) {
      // Verificar pelo valor do frete no atributo data-valor
      if (input.hasAttribute('data-valor') && parseFloat(input.getAttribute('data-valor')) === 0) {
        freteGratisInput = input;
        console.log('Encontrado frete grátis pelo valor zero:', input);
        break;
      }
      
      // Se não encontrou pelo valor, verificar o texto
      const label = input.closest('label');
      if (label && (label.textContent.includes('Grátis') || label.textContent.includes('grátis'))) {
        freteGratisInput = input;
        console.log('Encontrado frete grátis pelo texto:', label.textContent);
        break;
      }
    }
    
    // Se encontrou um frete grátis, marcar como selecionado
    if (freteGratisInput) {
      console.log('Opção de frete grátis encontrada, selecionando...');
      freteGratisInput.checked = true;
      
      // Disparar evento de change para atualizar cálculos e interface
      const event = new Event('change', { bubbles: true });
      freteGratisInput.dispatchEvent(event);
      
      // Adicionar classe checked ao label
      const label = freteGratisInput.closest('label');
      if (label) {
        document.querySelectorAll('.formas-envio label').forEach(l => {
          l.classList.remove('checked');
        });
        label.classList.add('checked');
        
        console.log('Classe checked adicionada ao label do frete grátis');
      }
      
      // Recriar o resumo com a nova opção selecionada
      setTimeout(() => {
        if (typeof criarResumoCompra === 'function') {
          criarResumoCompra();
        }
      }, 300);
      
      console.log('Frete grátis selecionado com sucesso');
    } else {
      console.log('Não foi possível encontrar uma opção de frete grátis, tentando novamente em 2 segundos');
      // Tentar novamente depois de um tempo
      setTimeout(selecionarFreteGratisAutomaticamente, 2000);
    }
  }

  // Modificar o observador para tratar múltiplos tipos de alertas de frete grátis
  const observadorCarrinho = new MutationObserver(mutations => {
    const shouldUpdate = mutations.some(mutation => {
      // Verificar se a mutação está relacionada aos alertas de frete grátis
      if (mutation.target.id === 'li-alerta-frete-gratis') return true;
      if (mutation.target.classList && mutation.target.classList.contains('li-alerta--frete-gratis-situacao-sucesso')) return true;
      if (mutation.target.classList && mutation.target.classList.contains('valor-subtotal')) return true;
      
      // Evitar processar mutações em elementos que já foram processados
      if (mutation.target.closest('.frete-gratis-progresso-container')) return false;
      
      // Verificar mudanças na tabela do carrinho ou nas formas de envio
      return mutation.target.classList && (
        mutation.target.classList.contains('tabela-carrinho') || 
        mutation.target.classList.contains('formas-envio') ||
        mutation.target.closest('.tabela-carrinho') ||
        mutation.target.closest('.formas-envio')
      );
    });
    
    if (shouldUpdate) {
      setTimeout(criarBarraProgressoFreteGratis, 300);
    }
  });

  // Iniciar função e adicionar ao inicializarCarrinhoML
  setTimeout(criarBarraProgressoFreteGratis, 1000);

  // Função para inicializar as transformações
  function inicializarCarrinhoML() {
    transformarProdutosCarrinho();
    otimizarEstruturaMobile();
    reorganizarEstruturaCarrinho();
    reorganizarFreteRows();
    // criarResumoCompra(); - Substituir esta linha
    garantirResumoCompra(); // Nova função com tentativas múltiplas
    marcarFretesMobile();
    ajustarInputQuantidade();
    ajustarEspacamentos();
    recriarCupomGaveta();
    ajustarNavegacaoMovel();
    moverExcluirParaClearfix(); // Adicione esta linha
    
    console.log('Redesign do carrinho estilo ML aplicado com sucesso');
  }
  
  // Aguardar um pouco para garantir que todos os elementos da Loja Integrada estejam carregados
  setTimeout(inicializarCarrinhoML, 500);
  
  // Usar MutationObserver para detectar mudanças no DOM (como atualizações de preço)
  const observer = new MutationObserver(mutations => {
    let needsRefresh = false;
    
    mutations.forEach(mutation => {
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        if (mutation.target.classList.contains('valor-total') || 
            mutation.target.classList.contains('valores-descontos') ||
            mutation.target.classList.contains('formas-envio')) {
          needsRefresh = true;
        }
      }
    });
    
    if (needsRefresh) {
      transformarProdutosCarrinho();
      criarResumoCompra();
    }
  });
  
  observer.observe(document.body, { 
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'data-valor']
  });
  
  // Lidar com mudanças de orientação ou redimensionamento
  window.addEventListener('resize', function() {
    const wasMobile = isMobile;
    const nowMobile = window.innerWidth < 768;
    
    // Se houve mudança entre mobile/desktop
    if (wasMobile !== nowMobile) {
      console.log('Mudança detectada entre mobile/desktop, recarregando página');
      window.location.reload();
    }
  });

  // Adicione isso após a inicialização principal
  setTimeout(moverExcluirParaClearfix, 300);

  // Chamar a função de cupom com delay para garantir que o DOM esteja pronto
  setTimeout(function() {
    recriarCupomGaveta();
    console.log('Função de cupom executada com delay');
  }, 800);

  // Observar mudanças na tabela do carrinho para recriar o cupom se necessário
  const carrinhoObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList' && 
          (mutation.target.classList.contains('tabela-carrinho') ||
           mutation.target.closest('.tabela-carrinho'))) {
        setTimeout(recriarCupomGaveta, 100);
      }
    });
  });

  // Iniciar observação
  const tabelaCarrinho = document.querySelector('.tabela-carrinho');
  if (tabelaCarrinho) {
    carrinhoObserver.observe(tabelaCarrinho, { 
      childList: true,
      subtree: true
    });
  }
  
  // Atualizar o resumo quando o frete mudar
  document.addEventListener('change', function(e) {
    if (e.target && e.target.name === 'formaEnvio') {
      setTimeout(criarResumoCompra, 300);
    }
  });

  // Garantir que o resumo seja verificado quando o frete mudar
  document.addEventListener('change', function(e) {
    if (e.target && e.target.name === 'formaEnvio') {
      setTimeout(() => criarResumoCompra(true), 300);
    }
  });

  // Adicionar observador para modificações que possam afetar o resumo
  const resumoObserver = new MutationObserver(mutations => {
    // Verifica se alguma mutação afeta elementos relacionados ao resumo
    const needsUpdate = mutations.some(mutation => {
      return mutation.target.classList && (
        mutation.target.classList.contains('valor-subtotal') ||
        mutation.target.classList.contains('valor-total') ||
        mutation.target.classList.contains('descontos') ||
        mutation.target.classList.contains('formas-envio')
      );
    });
    
    if (needsUpdate) {
      setTimeout(() => criarResumoCompra(true), 300);
    }
  });

  // Iniciar observação depois que o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', function() {
    resumoObserver.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true,
      attributeFilter: ['style', 'class', 'data-valor']
    });
    
    // Garantir que o resumo seja criado mesmo se o evento de inicialização já tiver passado
    setTimeout(garantirResumoCompra, 1500);
  });

  // Tentar novamente após o carregamento completo da página
  window.addEventListener('load', function() {
    setTimeout(garantirResumoCompra, 1000);
  });
});

// Funções utilitárias
function obterElementoOuLogarErro(seletor, mensagemErro) {
  const elemento = document.querySelector(seletor);
  if (!elemento) {
    console.log(mensagemErro);
  }
  return elemento;
}

function formatarValor(valor) {
  return parseFloat(valor || 0).toFixed(2).replace('.', ',');
}

function criarElemento(tag, className, atributos = {}) {
  const elemento = document.createElement(tag);
  elemento.className = className;
  Object.entries(atributos).forEach(([key, value]) => elemento.setAttribute(key, value));
  return elemento;
}

// Funções principais
function criarResumoCompra(forceCreate = false) {
  console.log('Tentando criar resumo de compra unificado');

  const acaoEditar = obterElementoOuLogarErro('.acao-editar.row-fluid', 'Elemento acao-editar não encontrado');
  if (!acaoEditar) return false;

  const subtotalElement = obterElementoOuLogarErro('.valor-subtotal', 'Elemento subtotal não encontrado');
  if (!subtotalElement) return false;

  const subtotal = subtotalElement.textContent.trim();
  const freteChecked = document.querySelector('input[name="formaEnvio"]:checked');
  const valorFrete = freteChecked ? formatarValor(freteChecked.getAttribute('data-valor')) : '0,00';
  const valorFreteFormatado = `R$ ${valorFrete}`;

  const valorTotal = document.querySelector('.valor-total')?.textContent.trim() || subtotal;
  const valorPixElement = document.querySelector('.descontos.avista strong');
  const valorPix = valorPixElement ? valorPixElement.textContent.trim() : valorTotal;
  const descontoPixText = valorPixElement ? valorPixElement.parentNode.textContent.match(/\((.+)\)/) : null;
  const descontoPix = descontoPixText && descontoPixText[1] ? descontoPixText[1] : '10% de desconto';

  const valorParceladoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/ou\s+(.*?)\s+em/);
  const valorParcelado = valorParceladoMatch ? valorParceladoMatch[1].trim() : subtotal;

  const parcelamentoMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/em até\s+(.*?)\s+de/);
  const parcelamento = parcelamentoMatch ? parcelamentoMatch[1].trim() : '12x';

  const valorParcelaMatch = document.querySelector('.descontos.parcelas')?.textContent.match(/de\s+(.*?)\s+sem juros/);
  const valorParcela = valorParcelaMatch ? valorParcelaMatch[1].trim() : '';

  const resumoAnterior = acaoEditar.querySelector('.resumo-unificado');
  if (resumoAnterior) {
    resumoAnterior.parentNode.removeChild(resumoAnterior);
  }

  const resumoUnificado = criarElemento('div', 'resumo-unificado span12', { 'data-timestamp': Date.now() });
  resumoUnificado.innerHTML = gerarHTMLResumo(subtotal, valorFreteFormatado, valorTotal, valorPix, descontoPix, valorParcelado, parcelamento, valorParcela);

  inserirResumoNoContainer(acaoEditar, resumoUnificado);
  aplicarEstilosResumo();

  console.log('Resumo unificado criado com sucesso');
  return true;
}

function gerarHTMLResumo(subtotal, valorFrete, valorTotal, valorPix, descontoPix, valorParcelado, parcelamento, valorParcela) {
  return `
    <div class="resumo-compra">
      <div class="resumo-titulo">Resumo da compra</div>
      <div class="resumo-linhas">
        <div class="resumo-linha">
          <span>Produtos</span>
          <span>${subtotal}</span>
        </div>
        <div class="resumo-linha">
          <span>Frete</span>
          <span>${valorFrete}</span>
        </div>
      </div>
      <div class="resumo-total">
        <span>Total</span>
        <span>${valorTotal}</span>
      </div>
    </div>
    <div class="opcoes-pagamento">
      <div class="opcoes-titulo">Formas de pagamento</div>
      <div class="opcao-pagamento">
        <div class="opcao-header">
          <div class="opcao-titulo">Pix</div>
        </div>
        <div class="opcao-valor opcao-pix">${valorPix}</div>
        <div class="opcao-descricao">${descontoPix}</div>
      </div>
      <div class="opcao-pagamento">
        <div class="opcao-header">
          <div class="opcao-titulo">Cartão de crédito</div>
        </div>
        <div class="opcao-valor opcao-cartao">${valorParcelado}</div>
        <div class="opcao-descricao">em até ${parcelamento} de ${valorParcela || '-'} sem juros</div>
      </div>
    </div>
  `;
}

function inserirResumoNoContainer(container, resumo) {
  const span12 = container.querySelector('.span12');
  if (span12) {
    const botoes = Array.from(span12.querySelectorAll('.botao'));
    if (botoes.length > 0) {
      span12.insertBefore(resumo, botoes[0]);
    } else {
      span12.insertBefore(resumo, span12.firstChild);
    }
  } else {
    const novoSpan12 = criarElemento('div', 'span12');
    novoSpan12.appendChild(resumo);
    container.insertBefore(novoSpan12, container.firstChild);
  }
}

function aplicarEstilosResumo() {
  if (!document.getElementById('resumo-unificado-estilos')) {
    const estilos = criarElemento('style', '', { id: 'resumo-unificado-estilos' });
    estilos.textContent = `
      .resumo-unificado {
        margin-bottom: 20px;
        width: 100%;
      }
      .resumo-unificado .resumo-compra,
      .resumo-unificado .opcoes-pagamento {
        margin-bottom: 10px;
      }
    `;
    document.head.appendChild(estilos);
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  criarResumoCompra();
});