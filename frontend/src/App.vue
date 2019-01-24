<template>
	<div id="app" class="container">
		<h1>Produtos</h1>

    <b-card>

      <!-- <b-form-group label="Title product">
        <b-form-input type="text" size="md"
          v-model="products.title"
          placeholder="Title products"></b-form-input>
      </b-form-group>

      <b-form-group label="Description product">
        <b-form-input type="text" size="md"
          v-model="products.description"
          placeholder="Description products"></b-form-input>
      </b-form-group>

      <b-button @click="saveProduct"
        variant="primary" size="md"
        >Salvar</b-button> -->

      <b-button @click="loadProduct"
        variant="success" size="md" class="ml-2"
        >Load products.json</b-button>

    </b-card>

    <hr>

    <b-list-group>
      <b-list-group-item v-for="(product, id) in productsList" :key="id">
        <strong>ID:</strong> {{ product.id }} <br />
        <strong>Title:</strong> {{ product.title }} <br />
        <strong>Description:</strong> {{ product.description }}
      </b-list-group-item>
    </b-list-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      productsList: [],
      products: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    saveProduct() {
      //console.log(this.products)
      this.$http.post('', this.products)

      // Clean data form
      .then(resp => {
        this.products.title = '',
        this.products.description =  ''
      })
    },

    loadProduct() {
      this.$http.get('', this.products)
        .then(resp => {
          this.productsList = resp.data
          console.log(this.productsList)
        })
    }


  },

  // created() {
  //   this.$http.post('', {
  //     "title": "Imóvel modelo",
  //     "description": "Teste de descrição do imóvel"

  //   }).then(res => console.log(res))
  // }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
