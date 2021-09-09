<template>
<v-content >
    <Head :headline="headline"></Head>
    {{$config.userApiDomain}}
    <What :titulo="what.titulo" :texto="what.texto"></What>
    <Beneficios :conteudo="conteudos"></Beneficios> 
    <Prova></Prova>
    <Acao titulo="Como posso participar?" subtitulo="Cadastre-se na lista de espera para ser avisado da próxima turma."></Acao> 
    <Who></Who>  
    <Faq></Faq>
</v-content>
</template>
<script>
import Head from "~/components/head.vue";
import Who from "~/components/quemsomos.vue";
import Beneficios from "~/components/beneficios.vue";
import Faq from "~/components/faq.vue";
import Acao from "~/components/callToAction.vue";
import Prova from "~/components/comprovacao.vue";
import What from "~/components/oque.vue";

export default {
  components: {
    Head,
    Who,
    Beneficios,
    Faq,
    Acao,
    Prova,
    What
  },
  data() {
    return {
      headline: {
        titulo: "Prepare o seu filho para a habilidade que o mundo mais precisa.",
        subtitulo: "Quem aprende Programação desenvolve habilidades benéficas para a vida toda como racicínio lógico, criatividade e engenhosidade.",
        texto_botao: "Lista de Espera"
      },
      who:{
        titulo: "Quem sou?",
        foto: "",
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      what:{
        titulo: "Esteja preparado para os desafios",
        texto: "O mundo de hoje apresenta desafios significativos para os jovens e é nossa responsabilidade dar-lhes ferramentas e capacitá-los para adquirir o conhecimento e as habilidades  necessárias para ter sucesso em um futuro altamente competitivo. A programação é uma habilidade indispensável para o futuro.",
        imagem: "",
      },
      conteudos: {
        titulo: "Com esse curso você vai aprender:",
        items: [
        {
          imagem: "mdi-puzzle-plus-outline",
          titulo: "Curso completo",
          descricao: "Curso online com aulas práticas que mostram o passo a passo detalhado para aprender através da internet e principalmente preparar-los para o futuro. São conceitos e técnicas diferenciadas e únicos que funcionam para qualquer área de atuação."
        },
        {
          imagem: "mdi-puzzle-plus-outline",
          titulo: "Assista quando puder",
          descricao: "Aulas gravadas para assistir no melhor horário e no conforto e segurança de onde estiver."
        },
        {
          imagem: "mdi-puzzle-plus-outline",
          titulo: "Amizades",
          descricao: "Conhecerá pessoas incríveis e dispostas a alcançar suas metas e objetivos junto com você, de lá surge muitas amizades."
        },
        {
          imagem: "mdi-puzzle-plus-outline",
          titulo: "Aprendizado Empírico",
          descricao: "Acreditamos que você aprende de fato quando coloca em prática, por isso sempre colocamos desafios após as aulas e mentorias para que você evoluir mais rápido"
        },
        {
          imagem: "mdi-puzzle-plus-outline",
          titulo: "Aprendizado Empírico",
          descricao: "O quanto antes começar, mais cedo irá aproveitar as oportunidades. Não perca essa oportunidade de dominar essa habilidade."
        },
      ],
      },
      titulos: [
        "T-Shirts",
        "Empoderando seu Estilo",
      ],
    };
  },
};
</script>