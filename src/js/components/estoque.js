/**
 * Função para remover o indicador de estoque
 * Oculta elementos que mostram informações de disponibilidade do produto
 */
export function removeInfoEstoque() {
  // Adiciona CSS otimizado para ocultar os elementos de estoque
  const style = document.createElement('style');
  
  // CSS mínimo necessário com alta especificidade
  style.innerHTML = `
    span.cor-secundaria.disponibilidade-produto {
      display: none !important;
    }
    .disponibilidade-produto b.cor-principal {
      display: none !important;
    }
  `;
  
  // Adiciona o estilo ao documento
  document.head.appendChild(style);
  
  // Backup: remove os elementos existentes via DOM
  setTimeout(function() {
    const elementos = document.querySelectorAll('span.cor-secundaria.disponibilidade-produto');
    elementos.forEach(function(el) {
      if (el && el.style) el.style.display = 'none';
    });
  }, 500);
  
  console.log("Informações de estoque removidas com sucesso!");
}

// Você também pode exportar valores adicionais se precisar
export const versao = '1.0.0';