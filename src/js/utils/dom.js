/**
 * Utilitários para manipulação de DOM
 */

/**
 * Cria e injeta um elemento de estilo no head
 * @param {string} id - ID único para o elemento style
 * @param {string} css - Conteúdo CSS
 * @returns {HTMLStyleElement|null} - Elemento criado ou null se já existir
 */
export function injetarEstilo(id, css) {
  if (document.getElementById(id)) {
    return null;
  }
  
  const style = document.createElement('style');
  style.id = id;
  style.innerHTML = css;
  document.head.appendChild(style);
  return style;
}

/**
 * Seleciona elementos usando múltiplos seletores
 * @param {Array<string>} seletores - Lista de seletores CSS
 * @returns {Array<Element>} - Lista de elementos únicos encontrados
 */
export function selecionarElementos(seletores) {
  let elementos = [];
  
  seletores.forEach(seletor => {
    const encontrados = document.querySelectorAll(seletor);
    if (encontrados.length > 0) {
      elementos = [...elementos, ...Array.from(encontrados)];
    }
  });
  
  // Remover duplicatas
  return [...new Set(elementos)];
}

/**
 * Encontra elementos pelo texto contido neles
 * @param {string} seletor - Seletor base para os elementos
 * @param {Array<string>} textos - Textos a procurar
 * @returns {Array<Element>} - Elementos encontrados
 */
export function encontrarElementosPorTexto(seletor, textos) {
  const elementos = [];
  
  document.querySelectorAll(seletor).forEach(el => {
    const conteudo = el.textContent || el.value || el.title || '';
    
    for (const texto of textos) {
      if (conteudo.toLowerCase().includes(texto.toLowerCase())) {
        elementos.push(el);
        break;
      }
    }
  });
  
  return elementos;
}