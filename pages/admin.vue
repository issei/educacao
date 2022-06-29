<template>
<v-main >
  <v-data-table
  dense
  :headers="headers"
    :items="posts"
    :items-per-page="50"
    class="elevation-1"
  ></v-data-table>
</v-main>
</template>
<script>

export default {
  mounted() {   
    this.getItens();
    
  },
  methods: {
    async getItens() {
      this.$axios.setHeader('x-api-key', '5rSmuctSmaaBsZPGyecL12jtZW7BYgpq2s4iQqwT');
      console.log('teste');
      const result = await this.$axios.$get("https://api.issei.com.br/lead/ebook");
      console.log(result.body);
      this.posts = result.body;
    },
   },
  data() {
    return {
      headers: [
        { text: 'Data', sortable: true, value: 'requestTime' },
        { text: 'nome', sortable: true, value: 'body.nome' },
        { text: 'email', sortable: true, value: 'body.email' },
        { text: 'desejo', value: 'body.desejo' },
        { text: 'dificuldades', value: 'body.dificuldades' },
        ],
        posts: []
    };
  },
  
};
</script>