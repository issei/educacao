<template>
  <v-main>
    <v-container>
      <v-row>
        <v-chip-group
        v-model="selection"
        active-class="deep-purple--text text--accent-4"
        @change="selecao"
        mandatory
      >
        <v-chip
          v-for="item in itens"
          :key="item.key"
          :value="item.desc"
        >
          {{ item.desc }}
        </v-chip>
      </v-chip-group>
      </v-row>
      <v-row>
        <v-col>
          <v-form v-model="valid">
            <v-text-field v-if="cal_custo_lead"
              v-model="valor_campanha_total"
              label="Total gasto na campanha"
            >
            </v-text-field>
            <v-text-field v-if="cal_taxa_conversao || cal_quantidade_vendas || cal_custo_lead || cal_gasto_campanha"
              v-model="qtde_lead"
              label="Quantidade de Leads"
            ></v-text-field>
            <v-text-field v-if="cal_gasto_campanha"
              v-model="valor_lead"
              label="Valor por Lead"
            ></v-text-field>

            <v-text-field v-if="cal_taxa_conversao || cal_quantidade_lead"
              v-model="qtde_vendas"
              label="Quantidade de Vendas"
            ></v-text-field>
            <v-text-field v-if="cal_quantidade_lead || cal_quantidade_vendas"
              v-model="tx_conversao"
              label="Taxa de Conversão"
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col>
          <v-container>
            <p v-if="cal_taxa_conversao">Taxa de Conversão: {{ taxa_conversao }}</p>
            <p v-if="cal_quantidade_lead">Quantidade de Lead: {{ quantidade_lead }}</p>
            <p v-if="cal_custo_lead">Custo por Lead {{ custo_lead }}</p>
            <p v-if="cal_gasto_campanha">Total gasto na Campanha: {{ gasto_campanha }}</p>
            <p v-if="cal_quantidade_vendas">Quantidade de Vendas: {{ quantidade_vendas }}</p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  mounted() {},

  data: () => ({
    selection : null,
    itens:[
      {key: 1, desc:'Taxa de Conversão'},
      {key: 2, desc:'Quantidade de Lead'},
      {key: 3, desc:'Custo por Lead'},
      {key: 4, desc:'Total gasto na Campanha'},
      {key: 5, desc:'Quantidade de Vendas'},
    ],
    valid: true,
    tx_conversao: 0,
    qtde_lead: 0,
    valor_lead: 0,
    valor_campanha_total: 0,
    qtde_vendas: 0,
  }),
  methods: {
    selecao(){
      console.log(this.selection);
    }
  },
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
    cal_taxa_conversao: function() {
      return this.selection == 'Taxa de Conversão';
    },
    cal_quantidade_lead: function() {
      return this.selection == 'Quantidade de Lead';
    },
    cal_custo_lead: function() {
      return this.selection == 'Custo por Lead';
    },
    cal_gasto_campanha: function() {
      return this.selection == 'Total gasto na Campanha';
    }    ,
    cal_quantidade_vendas: function() {
      return this.selection == 'Quantidade de Vendas';
    }
  },
};
</script>
