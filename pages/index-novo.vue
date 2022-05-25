<template>
<v-main >
    <HeadWhats :headline="headline"></HeadWhats>
    <Quemsomos :texto="who.texto" :foto="who.foto"></Quemsomos>  
    <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center pt-10 pb-10" style="background: #FFFFFF; color: #3e1607;">
    <v-container>
      <h1 class="d-flex justify-center align-center text-md-h4 text-sm-h4" style="font-weight:bold">A Consultoria PPC é para você que:</h1>
        <v-row class="d-flex justify-center align-center my-5">
            <h1 class="d-flex justify-center align-center headline"  style="color: black">
                
            </h1>
        </v-row>
        <v-row class="d-flex align-stretch flex-column justify-center align-center pb-1">
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Quer vender curso on-line pelo Instagram e não sabe por onde começar;</p>
          </v-col>
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Tem pouco conhecimento no Marketing Digital;</p>
          </v-col>
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Precisa de direcionamento com processos e estratégias;</p>
          </v-col>
           <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Tem um grande conhecimento em um determinado assunto, mas não sabe como aproveitar ele para criar um produto (curso digital);</p>
          </v-col>
        </v-row>
    </v-container>
  </v-responsive>
    <!-- MODULOS -->
  <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center pt-10 pb-10" 
  style="background: #ffffff; color: #000000;">
    <v-container class="pr-10 pl-10">
      <v-row justify="center"><span class="text-center headline font-weight-black mb-5">COMO FUNCIONA A CONSULTORIA PPC?</span></v-row>
      <v-row justify="center"><span class="text-center mb-5">Serão 2 meses de Consultoria, onde teremos 5 encontros on-line via Zoom. 
<p>Nesse período, a nossa comunicação será feita via WhatsApp.</p></span></v-row>
          <v-timeline
            align-center
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-timeline-item
              v-for="(item, i) in modulos.itens"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              large
            >
              <v-card
                :color="item.color"
                dark
              >
                <v-card-title class="text-h6" v-html="item.titulo"></v-card-title>
                <v-card-text class="white text--primary  py-5">
                  <span class="text-md-h5 text-sm-h5 text-sx-h5 font-weight-black text-uppercase">{{item.subtitulo}}</span>
                  <p v-html="item.texto" class=" text-md-h6 text-sm-h6 text-sx-h6" style="color:#000000"></p>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
    </v-container>
  </v-responsive>
    
    <!--Compara :conteudo="praquem" :conteudo2="conteudos" :estilo="headline.style"></Compara--> 
    <v-responsive :aspect-ratio="16 / 5" class="d-flex justify-center align-center pt-10 pb-10" style="background: #FFFFFF; color: #3e1607;">
    <v-container>
      <h1 class="d-flex justify-center align-center text-md-h4 text-sm-h4" style="font-weight:bold">Ao final da Consultoria, você terá:</h1>
        <v-row class="d-flex justify-center align-center my-5">
            <h1 class="d-flex justify-center align-center headline"  style="color: black">
                
            </h1>
        </v-row>
        <v-row class="d-flex align-stretch flex-column justify-center align-center pb-1">
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Identificado sua audiência</p>
          </v-col>
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Saberá qual o melhor produto para desenvolver </p>
          </v-col>
          <v-col class="d-flex flex-row">
          <v-icon large class="mr-5">mdi-check</v-icon>
          <p class="mt-5 text-center text-h6" style="color:#000000">Linha editorial definida com estratégias de comunicação para vender o seu curso</p>
          </v-col>
        </v-row>
    </v-container>
  </v-responsive>
  <v-responsive
      :aspect-ratio="16 / 5"
      style="background: #d7837f; color: #FFFFFF;"
      class="d-flex justify-center align-center pt-10 pb-10"
    >
      <v-container>
        <v-row justify="center mx-10"><span class="text-center headline font-weight-bold">CURSOS E CERTIFICAÇÕES</span></v-row>
        <v-row class="d-flex justify-center align-center my-10">
            <v-card class="ma-2 rounded-xl align-center" color="#ede0e1" width="250" height="300" >
              <v-card-title> 
                <!--v-img width="67" :src="item.imagem" height="67" contain></v-img-->
                <v-icon large class="mr-5">mdi-check</v-icon>
              </v-card-title>
                <v-card-text class="d-flex flex-column align-center justify-space-around">
                    <p class="mt-1 text-center text-h6" style="color:#000000">Estrategista Digital</p>
                </v-card-text>
            </v-card>
            <v-card class="ma-2 rounded-xl align-center" color="#ede0e1" width="250" height="300" >
              <v-card-title> 
                <!--v-img width="67" :src="item.imagem" height="67" contain></v-img-->
                <v-icon large class="mr-5">mdi-check</v-icon>
              </v-card-title>
                <v-card-text class="d-flex flex-column align-center justify-space-around">
                    <p class="mt-1 text-center text-h6" style="color:#000000">Estrategista Digital</p>
                </v-card-text>
            </v-card>
        </v-row>
      </v-container>
    </v-responsive>
  <!--ListaItens :titulo="praquemeh.titulo" :itens="praquemeh.itens" :imagem="praquemeh.imagem" :btnColor="headline.btnColor" :texto_botao="headline.texto_botao"></ListaItens>
    <Quemsomos :texto="who.texto" :foto="who.foto"></Quemsomos-->      
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
      //titulo: "<SPAN STYLE=\"font-weight:bold\">Transforme</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">experiência profissional</SPAN> em um <SPAN STYLE=\"font-weight:bold\">curso on-line</SPAN> e <SPAN STYLE=\"font-weight:bold\">conquiste</SPAN> a sua <SPAN STYLE=\"font-weight:bold\">liberdade financeira</SPAN>",
      headline: {
        titulo: "<SPAN STYLE=\"font-weight:bold\">Quer transformar a sua experiência profissional em um curso on-line, mas não sabe por onde começar?</SPAN>",
        subtitulo: " ",
        texto_botao: "Vamos conversar",
        btnColor: "#5fd9c2",
        style: "background-position: center; background-repeat: no-repeat;  background-size: cover; background: #233a5a; color: #FFFFFF;",
        imagem: "./",
      },
      modulos: {
              itens: [
                {
                    titulo: "1º Etapa",
                    imagem: "/check.png",
                    subtitulo: "Analisar",
                    texto: "Vou analisar a situação atual e o seus principais objetivos",
                    color: '#233a5a',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "2º Etapa",
                    imagem: "/check.png",
                    subtitulo: "Diagnóstico",
                    texto: "Será realizado um diagnóstico e definição de metas claras e alcançáveis",
                    color: '#233a5a',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "3º Etapa",
                    imagem: "/check.png",
                    subtitulo: "Estratégia",
                    texto: "Te ajudarei com as melhores estratégias para a sua Audiência do Instagram",
                    color: '#233a5a',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "4º Etapa",
                    imagem: "/check.png",
                    subtitulo: "Produto",
                    texto: "Vou direcionar e ajudar a estruturar o seu produto (curso on-line)",
                    color: '#233a5a',
                    icon: 'mdi-check',
                  },
                  {
                    titulo: "5º Etapa",
                    imagem: "/check.png",
                    subtitulo: "Linha Editorial",
                    texto: "Você nunca mais ficará perdido na hora de postar conteúdos, criaremos uma linha editorial com estratégias de comunicação para vender o seu curso",
                    color: '#233a5a',
                    icon: 'mdi-check',
                  },
              ]
      },
      praquemeh:{
        titulo: "PARA QUEM É A CONSULTORIA PPC??",
        imagem: "https://issei.imgix.net/talita/grafico-up.png?auto=compress&auto=enhance&w=300&h=300",
        itens: [
          {
            texto: "Quer vender curso on-line pelo Instagram e não sabe por onde começar;",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },
          {
            texto: "Tem pouco conhecimento no Marketing Digital;",
            imagem: ""
          },
          {
            texto: "Precisa de direcionamento com processos e estratégias;",
            imagem: ""
          },
          {
            texto: "Tem um grande conhecimento em um determinado assunto, mas não sabe como aproveitar ele para criar um produto (curso digital);",
            imagem: "https://issei.imgix.net/talita/check-verde.png?auto=compress&auto=enhance&w=67&h=58"
          },  
        ]
      },
      chamadaAcao:{
        titulo: "Como participar?",
        descricao: "Cadastre-se na lista de espera para ser avisado da próxima turma.",
        style: "background: #FFFFFF; color: #000000;",
        btnColor: "#03989e"
      },
      who:{
        titulo: "",
        foto: "https://issei.imgix.net/talita/Talita.png?auto=compress&auto=enhance&mask=ellipse&w=300&h=300",
        texto: "<p>Olá, muito prazer! Sou a Talita Issei.</p><p>Trabalho no segmento de Consultoria há mais de 10 anos, antes de entrar para o mundo digital, era responsável pelo gerenciamento de projetos e de times.</p><p>Iniciei no Marketing digital em 2021. Estudei MUITO, mas não fiquei só na teoria, tudo que eu estudava, eu aplicava! Peguei meus primeiros projetos e percebi que o grande problema das pessoas que queriam lançar um curso digital, era um passo antes, a falta de estratégias e direcionamento na preparação para o lançamento.</p><p>Com isso, criei a Consultoria PPC.</p><p>Quero te ajudar a analisar a sua Audiência, estruturar o seu Produto e criar estratégias para sua Linha editorial do instagram.</p>",
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
          descricao: "<SPAN STYLE=\"font-weight:bold\">Fase de Preparação:</SPAN> Estratégias do Lançamento,  Cronograma de Atividades e Página do Evento."
        },
        {
          imagem: "https://issei.imgix.net/talita/peça.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Gestão de Tráfego Pago:</SPAN> Google ADS, Facebook/Instagram e YouTube"
        },
        {
          imagem: "https://issei.imgix.net/talita/objetivo.png?auto=compress&auto=enhance&auto=format",
          titulo: "",
          descricao: "<SPAN STYLE=\"font-weight:bold\">Comprometimento e Disciplina:</SPAN> Estou 101% comprometida em transformar o meu conhecimento em um negócio de muito sucesso."
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