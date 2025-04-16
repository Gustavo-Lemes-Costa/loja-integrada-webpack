/**
 * Configuração do slide de categorias
 */

// Configuração do slide
const categorias = [
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

/**
 * Configura o slide de categorias
 */
export function configurarSlideCategorias() {
  try {
    // Definir variável global para acesso por outros scripts
    window.slideCategorias = categorias;
    
    console.log('Configuração do slide de categorias aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar slide de categorias:', error);
    return false;
  }
}