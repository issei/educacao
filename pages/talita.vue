<template>
<v-main >
    <Head :headline="headline"></Head>
    <ListaItens :titulo="praquemeh.titulo" :itens="praquemeh.itens" :imagem="praquemeh.imagem"></ListaItens>
    <Beneficios :conteudo="praquem"></Beneficios>   
    <Beneficios :conteudo="conteudos"></Beneficios> 
    <CallToAction :titulo="chamadaAcao.titulo" :subtitulo="chamadaAcao.descricao" :style="chamadaAcao.style" :btnColor="chamadaAcao.btnColor"></CallToAction> 
    <Quemsomos :texto="who.texto" :foto="who.foto"></Quemsomos>  
    <Faq :perguntas="faqs"></Faq>
</v-main>
</template>
<script>

export default {
  layout: 'servico',
  mounted() {
  },
  data() {
    return {
      //"VOCÊ QUER UM MOVIMENTO, INSPIRAR E TRANSFORMAR PESSOAS ATRAVÉS DO SEU CONHECIMENTO"
      //"Transforme sua PAIXÃO em um Curso Digital e conquiste sua liberdade financeira"
      //"TRANSFORME A SUA EXPERIÊNCIA PROFISSIONAL E UM CURSO ON-LINE E CONQUISTE A SUA LIBERDADE FINANCEIRA"
      headline: {
        titulo: "<SPAN STYLE=\"font-weight:bold\">Transforme</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">experiência profissional</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso on-line</SPAN> e <SPAN STYLE=\"font-weight:bold\">conquiste</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">liberdade financeira</SPAN>",
        subtitulo: "Vamos <SPAN STYLE=\"font-weight:bold\">juntas</SPAN> tirar essa <SPAN STYLE=\"font-weight:bold\">ideia do papel</SPAN> e <SPAN STYLE=\"font-weight:bold\">construir</SPAN> um <SPAN STYLE=\"font-weight:bold\">negócio de sucesso</SPAN>?",
        texto_botao: "Vamos conversar",
        btnColor: "#03989e",
        style: "background-image: url('./fundomadeira.png'); background-position: center; background-repeat: no-repeat;  background-size: cover; background: #DDDDDD; color: #000000;",
        imagem: "./img/undraw_note.svg",
      },
      praquemeh:{
        titulo: "PARA QUEM É?",
        imagem: "https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",
        itens: [
          {
            texto: "Para quem quer transformar a sua experiência profissional em um curso on-line mas não tem clareza de qual caminho seguir.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },
          {
            texto: "Busca uma parceria para executar o lançamento do seu curso on-line de ponta a ponta com sucesso.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },
          {
            texto: "Quer usar o poder da internet para escalar as vendas do seu curso on-line.",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          }
        ]
      },
      chamadaAcao:{
        titulo: "Como participar?",
        descricao: "Cadastre-se na lista de espera para ser avisado da próxima turma.",
        style: "background: #DDDDDD; color: #000000;",
        btnColor: "#03989e"
      },
      who:{
        titulo: "",
        foto: "https://issei.imgix.net/talita/Talita.png?auto=compress&auto=enhance&mask=ellipse&w=300&h=300",
        texto: "<p>Olá, muito prazer! Sou a Talita Issei.</p><p>Depois de 13 anos de experiência na área de Recursos Humanos, sendo 4 anos em Gerenciamento de Projetos, resolvi \"largar\" a CLT e <SPAN STYLE=\"font-weight:bold\">Empreender</SPAN>.</p><p>Há 6 meses estudo e aplico o <SPAN STYLE=\"font-weight:bold\">Marketing Digital</SPAN> em projetos pontuais. Nesse período, identifiquei uma grande oportunidade em me tornar uma <SPAN STYLE=\"font-weight:bold\">Estrategista Digital</SPAN>. Foi então que decidi entrar para a Escola da Arte e estudar estratégias para lançamentos. Atualmente estou  acompanhando 6 lançamentos de ponta a ponta de cursos on-line (de nichos diferentes).</p><p>Meu objetivo é <SPAN STYLE=\"font-weight:bold\">colocar em prática</SPAN> tudo aquilo que aprendi e estou aprendendo,  procuro uma Expert/Especialista que tenha interesse em <SPAN STYLE=\"font-weight:bold\">transformar a sua experiência</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso digital</SPAN>, e assim, formarmos uma grande parceria.</p><p>E agora, convido você, vamos <SPAN STYLE=\"font-weight:bold\">construir</SPAN> um <SPAN STYLE=\"font-weight:bold\">projeto de sucesso</SPAN>?!</p>",
      },
      what:{
        titulo: "Para quem é?",
        texto: "Você tem alguma agência ou pessoa responsável pela sua estratégia de venda?<br />Vejo que você tem muito potencial, se alinhar o seu conteúdo com uma boa estratégia de venda você pode ter muito mais resultado e alcançar muito mais pessoas. Se tiver interesse no Dia tal eu tenho um horário, podemos marcar uma call e conversarmos sobre o que eu imagino que pode ser feito para impulsionar suas redes, quem sabe rola uma parceria",
        imagem: "./img/undraw_stepping_up_g6oo.svg",
      },
      praquem: {
        titulo: "BUSCO ALGUÉM QUE:",
        items: [
        {
          imagem: "https://issei.imgix.net/talita/pensamento.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Tenha <SPAN STYLE=\"font-weight:bold\">interesse</SPAN> e uma <SPAN STYLE=\"font-weight:bold\">metodologia</SPAN> de transformar a sua <SPAN STYLE=\"font-weight:bold\">experiência</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso on-line</SPAN>"
        },
        {
          imagem: "https://issei.imgix.net/talita/quebra-cabeca.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Busque uma <SPAN STYLE=\"font-weight:bold\">parceria</SPAN> para lançar o seu curso on-line"
        },
        {
          imagem: "https://issei.imgix.net/talita/engine.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "",
          descricao: "Tenha <SPAN STYLE=\"font-weight:bold\">disponibilidade</SPAN> e <SPAN STYLE=\"font-weight:bold\">paixão</SPAN> para fazer acontecer!"
        },
      ],
      },
      conteudos: {
        titulo: "CONTE COMIGO!",
        items: [
          {
          imagem: "https://issei.imgix.net/talita/check-calendar.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Fase de Preparação:</SPAN><BR/> Estratégias/Planejamento do Lançamento,  Cronograma de Atividades e Página do Evento."
        },
        {
          imagem: "https://issei.imgix.net/talita/peça.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Gestão de Tráfego Pago:</SPAN><BR/> Google ADS, Facebook/Instagram e YouTube"
        },
        {
          imagem: "https://issei.imgix.net/talita/objetivo.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Comprometimento e Disciplina:</SPAN><BR/> Estou 101% comprometida em transformar o meu conhecimento em um negócio de muito sucesso."
        },
      ],
      },
      faqs: [
        {
          pergunta: "Precisa ter conhecimento em programação?",
          resposta: "Não, o curso é para crianças e adolescentes que tenham interesse e querem aprender conceitos de programação."
        },
        {
          pergunta: "O curso é presencial?",
          resposta: "Não, para atender todos os interessados, nosso curso é 100% online."
        },
        {
          pergunta: "Tem suporte para tirar as dúvidas?",
          resposta: "Sim, o aluno e os pais terão contato direto com o Professor através do WhatsApp e e-mail."
        },
        {
          pergunta: "Por que aprender programação e tecnologia ainda em idade escolar?",
          resposta: "Entre os muitos benefícios da lógica de programação podemos citar: desenvolvimento criativo, ampliação do raciocínio lógico e resolução de problemas. Saber programar é praticamente tão importante quanto dominar o inglês, uma vez que as empresas procuram cada vez mais por profissionais com essa habilidade. Inclusive, essa tendência tende a continuar crescente nos próximos anos. Por isso, investir na programação para crianças é uma forma de garantir ao seu filho um diferencial competitivo para quando ele entrar no mercado de trabalho."
        },
        {
          pergunta: "O curso oferece garantia?",
          resposta: "Os novos alunos matriculados tem 14 dias para conhecer a nossa metodologia. Caso ele não goste do curso, você poderá enviar um e-mail para o nosso suporte e ter o reembolso do valor integral do curso."
        },
        {
          pergunta: "Quando será aberta as inscrições para a próxima turma?",
          resposta: "Avisaremos por e-mail quando iniciarmos as inscrições . Caso tenha interesse, cadastre-se na lista de espera."
        },
        {
          pergunta: "Eu posso começar a fazer o Curso de Programação agora?",
          resposta: "As inscrições não estão abertas, abriremos algumas vezes ao ano, pois dessa forma conseguimos nos organizar para receber todos os alunos com o maior nível de excelência possível. Caso tenha interesse em saber sobre a abertura das inscrições, cadastre-se na lista de espera."
        },
      ],
    };
  },
};
</script>