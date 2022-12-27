
<template>
  <v-responsive
    :aspect-ratio="16 / 6"
    class="d-flex justify-center align-center mx-2 pa-2 my-2"
  >
    <v-container>
      <v-card-title class="headline">
        Conheça mais sobre nossa política de privacidade
      </v-card-title>
      <v-card-text>
        <h3>Política de Privacidade</h3>
        <p>
          Aqui a gente se preocupa com a segurança dos dados de nossos clientes
          e se compromete a assegurar a sua privacidade durante toda a navegação
          no nosso site.<br />
          O processo de segurança para a transferência de suas informações,
          consiste na criptografia de seus dados, ou seja, fica tudo bem
          escondidinho, ninguém tem acesso a esses dados.
        </p>
        <h3>Utilização de informações</h3>
        <p>
          O nosso sigilo também é garantido sobre seus dados cadastrais,
          afirmando que não comercializamos suas informações pessoais. Tais
          informações poderão, entretanto, ser agrupadas conforme determinados
          critérios e utilizadas como estatísticas genéricas objetivando um
          melhor entendimento do perfil do consumidor. Como por exemplo o envio
          de divulgações e e-mails de notificações.<br />
          Você poderá solicitar a sua exclusão do banco de dados, e assim não
          receberá mais nossas informações. <br />
        </p>
        <h3>Segurança</h3>
        <p>
          Durante o processo de cadastro todas as informações são
          automaticamente criptografadas. Assim, seus dados pessoais e toda e
          qualquer outra informação fornecida é codificada antes de ser
          transmitida.
        </p>
        <h3>Cookies</h3>
        <p>
          Os cookies são uma forma de personalizar a sua navegação, deixando
          nosso mundo mais com a sua carinha e fornecendo um recurso prático
          para poupar o seu tempo durante a navegação. Você também pode recusar
          esse recurso no nosso site através do pop up apresentado quando você
          entra no site ou através da configuração de seu navegador.<br />
          As imagens e textos expostos em nosso site são de propriedade da
          empresa, protegidos por registro e ou contrato devidamente firmado
          entre as partes. É expressamente proibida a cópia, reprodução ou
          modificação destas imagens e/ou textos para uso comercial.
        </p>
        <h3>Alterações na Política de Privacidade</h3>
        <p>
          Reservamo-nos ao direito de alterar a presente política a qualquer
          momento, dado que o presente documento não cria qualquer vínculo
          contratual entre a empresa e seus clientes ou terceiros. Toda
          alteração da política de privacidade será veiculada neste espaço.
        </p>
        <h3>Dúvidas e Sugestões</h3>
        <p>
          Hey! Caso possua qualquer dúvida ou sugestão sobre a política de
          privacidade ou sobre qualquer outra parte do nosso processo de compra,
          entre em contato com a gente através do nosso email de atendimento.
        </p>
      </v-card-text>
      <v-btn @click="goToPrev()">Voltar</v-btn>
    </v-container>
  </v-responsive>
</template>
<script>
export default {
  methods: {
    goToPrev() {

      // ...
      // Do other logic like logging, etc.
      // ...

      // Tell router to go back one
      this.$router.go(-1);
    },
  }
}
</script>