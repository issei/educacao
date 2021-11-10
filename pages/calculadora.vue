<template>
  <v-main>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-text-field
            v-model="valor_campanha_total"
            label="Total gasto na campanha"
            required
          >
          </v-text-field>

          <v-text-field
            v-model="qtde_lead"
            label="Quantidade de Leads"
            required
          ></v-text-field>

          <v-text-field
            v-model="qtde_vendas"
            label="Quantidade de Vendas"
            required
          ></v-text-field>
          <v-text-field
            v-model="tx_conversao"
            label="Taxa de Conversão"
            required
          ></v-text-field>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      <p>Taxa de Conversão: {{ taxa_conversao }}</p>
      <p>Quantidade de Lead: {{ quantidade_lead }}</p>
      <p>Custo por Lead {{ custo_lead }}</p>
      <p>Total gasto na Campanha: {{ gasto_campanha }}</p>
      <p>Quantidade de Vendas: {{ quantidade_vendas }}</p>
    </v-container>
  </v-main>
</template>
<script>
export default {
  mounted() {},

  data: () => ({
    valid: true,
    tx_conversao: 0,
    qtde_lead: 0,
    valor_lead: 0,
    valor_campanha_total: 0,
    qtde_vendas: 0,
  }),
  computed: {
    // a computed getter
    taxa_conversao: function () {
      return this.qtde_vendas / this.qtde_lead;
    },
    quantidade_lead: function () {
      return this.qtde_vendas / this.tx_conversao;
    },
    custo_lead: function () {
      return this.valor_campanha_total / this.qtde_lead;
    },
    gasto_campanha: function () {
      return this.valor_lead * this.qtde_lead;
    },
    quantidade_vendas: function () {
      return this.tx_conversao * this.qtde_lead;
    },
  },
};
</script>
