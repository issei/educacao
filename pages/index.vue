<template>
<v-main >

    <Head :headline="headline"></Head>
    <Beneficios :conteudo="praquem"></Beneficios> 
    <Oque :titulo="what.titulo" :texto="what.texto" :imagem="what.imagem"></Oque>
    <Modulos></Modulos>
    <Beneficios :conteudo="conteudos"></Beneficios> 
    <CallToAction :titulo="chamadaAcao.titulo" :subtitulo="chamadaAcao.descricao" :style="chamadaAcao.style" :btnColor="chamadaAcao.btnColor"></CallToAction> 
    <Quemsomos :texto="who.texto" :foto="who.foto"></Quemsomos>  
    <Faq :perguntas="faqs"></Faq>
</v-main>
</template>
<script>

export default {
  mounted() {
  },
  data() {
    return {
      //"O seu filho precisa estar preparado para o mundo digital"
      //"O curso de programação estimula habilidades essenciais para um futuro promissor"
      //"Quem aprende Programação desenvolve habilidades benéficas para a vida toda como racicínio lógico, criatividade e engenhosidade."
      headline: {
        titulo: "O SEU FILHO PRECISA APROVEITAR O MELHOR DO MUNDO DIGITAL",
        subtitulo: "O curso de programação estimula habilidades essenciais para um futuro promissor",
        texto_botao: "Lista de Espera",
        style: "background: #55beb3; color: #FFFFFF;",
        btnColor: "success",
        imagem1: "./iconehome.png",
        imagem3: "./img/undraw_Hello_re_3evm.svg",
        imagem2: "./img/undraw_lightbulb_moment_re_ulyo.svg",
        imagem4: "./img/undraw_Lost_online_re_upmy.svg",
        imagem5: "./img/undraw_Online_learning_re_qw08.svg",
        imagem6: "./img/undraw_Website_builder_re_ii6e.svg",
        imagem: "./img/undraw_Coding_re_iv62.svg",
      },
      chamadaAcao:{
        titulo: "Como participar?",
        descricao: "Cadastre-se na lista de espera para ser avisado da próxima turma.",
        style: "background: #55beb3; color: #FFFFFF;",
        btnColor: "success"
      },
      who:{
        titulo: "",
        foto: "https://issei.imgix.net/issei.png?auto=compress&auto=enhance&mask=ellipse&w=300&h=300",
        texto: "<SPAN STYLE=\"font-weight:bold\">Maurício Issei</SPAN> é Graduado em <SPAN STYLE=\"font-weight:bold\">Análise de Sistemas</span> e Pós-Graduado em <SPAN STYLE=\"font-weight:bold\">Big Data</span>.<br />Apaixonado por <SPAN STYLE=\"font-weight:bold\">tecnologia e inovação</SPAN>, atua na área <SPAN STYLE=\"font-weight:bold\">há mais de 15 anos.</SPAN> <br />Como pai, se preocupa com o ensino das crianças, seu grande objetivo é ajudar elas a se prepararem para <SPAN STYLE=\"font-weight:bold\">um mundo totalmente digital.</SPAN>",
      },
      what:{
        titulo: "O que é o curso?",
        texto: "É um curso <SPAN STYLE=\"font-weight:bold\">100% on-line</span> para criança e adolescentes que querem aprender o básico de programação.<p>Este curso traz o aluno para a linguagem do futuro, onde ele irá aprender o pensamento computacional,  codificação e cultura digital. Nossos alunos são incentivados durante todo o curso a usar a imaginação, criatividade e pensamento crítico, habilidades fundamentais para os dias de hoje.<BR/>Não acreditamos em teoria sem prática, aqui o seu filho aprende fazendo!</p>",
        imagem: "https://issei.imgix.net/banner-artwork.png?auto=compress&auto=format",
      },
      praquem: {
        titulo: "Como funciona o curso?",
        items: [
        {
          imagem: "https://issei.imgix.net/icones/jovem.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Crianças e Adolescentes",
          descricao: "O curso é indicado para crianças entre 9 e 14 anos."
        },
        {
          imagem: "https://issei.imgix.net/icones/Acesso.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Acesso Imediato",
          descricao: "O login e senha serão enviados no seu e-mail, após o processamento do pagamento."
        },
        {
          imagem: "https://issei.imgix.net/icones/Formato.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Formato",
          descricao: "Nosso curso é 100% on-line e gravado, seu filho pode fazer conforme a disponibilidade de horário dele, além de conseguir rever as aulas."
        },
        {
          imagem: "https://issei.imgix.net/icones/Conhecimento.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Conhecimento",
          descricao: "O curso é para crianças e adolescentes que tenham interesse e querem aprender conceitos de programação, não precisa de conhecimento em tecnologia."
        },
        {
          imagem: "https://issei.imgix.net/icones/Suporte.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Suporte",
          descricao: "Seu filho terá as dúvidas respondidas diretamente com o professor através do WhatsApp e E-mail."
        },
        {
          imagem: "https://issei.imgix.net/icones/Ferramenta.png?auto=compress&auto=enhance&w=67&h=58",
          titulo: "Ferramentas",
          descricao: "Não requer instalação e nem compra de software. É necessário internet e um computador para realizar as atividades."
        },
      ],
      },
      conteudos: {
        titulo: "O que este curso estimula?",
        items: [
          {
          imagem: "https://issei.imgix.net/icons/criatividade.png?auto=compress&auto=enhance&auto=format",
          titulo: "Criatividade",
          descricao: "A programação estimula o cérebro do aluno a criar aplicações, dando vida às ideias e novas formas de se expressar. "
        },
        {
          imagem: "https://issei.imgix.net/icons/problema.png?auto=compress&auto=enhance&auto=format",
          titulo: "Resolução de Problemas",
          descricao: "Irá aprender como analisar os cenários, propor ideias e como pôr em prática."
        },
        {
          imagem: "https://issei.imgix.net/icons/futuro.png?auto=compress&auto=enhance&auto=format",
          titulo: "Futuro",
          descricao: "O aluno vai ter contato com as principais habilidades e competências do século XXI."
        },
        {
          imagem: "https://issei.imgix.net/icons/empirico.png?auto=compress&auto=enhance&auto=format",
          titulo: "Aprendizado Empírico",
          descricao: "Acreditamos que os alunos aprendem de fato quando colocam em prática tudo aquilo que aprenderam, por isso colocamos desafios durante as aulas para eles evoluírem mais rápido."
        },
        {
          imagem: "https://issei.imgix.net/icons/raciocinio.png?auto=compress&auto=enhance&auto=format",
          titulo: "Raciocínio Lógico",
          descricao: "Ao conhecer a linguagem de programação, os alunos são ensinados a pensar de forma estruturada e de como lidar com os erros."
        },
        {
          imagem: "https://issei.imgix.net/icons/escolar.png?auto=compress&auto=enhance&auto=format",
          titulo: "Incentiva o Aprendizado Escolar",
          descricao: "Ao começar a programar, a criança prepara o seu raciocínio lógico para aprender com mais facilidade as disciplinas das áreas de exatas, como Física, Química e Matemática."
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