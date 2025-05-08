/**
 * Configuração das avaliações de clientes
 */

// Configuração das avaliações
const avaliacoes = [
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

/**
 * Configura as avaliações de clientes
 */
export function configurarAvaliacoes() {
  try {
    // Definir variável global para acesso por outros scripts
    window.avaliacoes = avaliacoes;
    
    console.log('Configuração das avaliações aplicada');
    return true;
  } catch (error) {
    console.error('Erro ao configurar avaliações:', error);
    return false;
  }
}
