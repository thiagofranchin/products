<template>
	<div id="app" class="container">
		<h1 class="title-page">Products</h1>

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

      <b-form-group label="Image URL">
        <b-form-input type="text" size="md"
          v-model="products.image"
          placeholder="Image products"></b-form-input>
      </b-form-group>

      <b-button @click="saveProduct"
        variant="primary" size="md"
        >Salvar</b-button> -->

      <b-button @click="loadProduct"
        variant="info" size="md" class="ml-2"
        >Load products.json</b-button>

    </b-card>

    <div class="row product-list">
      <div class="col-3" v-for="(product, id) in productsList" :key="id">
        <div class="card">
          <img :src="product.image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <b-card-group deck class="mt-4" v-for="(product, id) in productsList" :key="id">
      <b-card
        :title="product.title"
        :img-src="product.image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <p class="card-text">
          {{ product.description }}
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>

    </b-card-group> -->

    <hr>
    <!-- <b-list-group>
      <b-list-group-item v-for="(product, id) in productsList" :key="id">
        <strong>ID:</strong> {{ product.id }} <br />
        <strong>Title:</strong> {{ product.title }} <br />
        <strong>Description:</strong> {{ product.description }}
      </b-list-group-item>
    </b-list-group> -->
	</div>
</template>

<script>
export default {
  data() {
    return {
      productsList: [],
      products: {
        title: '',
        description: '',
        image: ''
      }
    }
  },
  methods: {
    saveProduct() {
      //console.log(this.products)
      this.$http.post('/products', this.products)

      // Clean data form
      .then(() => {
        this.products.title = '',
        this.products.description =  '',
        this.products.image =  ''
      })
    },

    loadProduct() {
      this.$http.get('/products', this.products)
        .then((res) => {
          this.productsList = res.data
          //console.log(this.productsList)
        })
    }


  },

  // created() {
  //   this.$http.post('/products', {
  //     "title": "Imóvel modelo",
  //     "description": "Teste de descrição do imóvel",
  //     "image": "https://picsum.photos/600/300/?image=25"

  //   }).then(res => console.log(res))
  // }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

#app {
  font-family: 'Roboto', sans-serif;
  $color-darkgray: #4a4a4a;
  $color-gray: #9b9b9b;
  $color-blue: #27bdbd;
  $color-red: #ec1940;
  $color-green: #3cb185;
  $color-orange: #e89d51;
  $color-ocean: #2e8dbd;
  $color-gray-light: #dedede;

  $primary:       $color-ocean;
  $secondary:     $color-gray;
  $success:       $color-green;
  $info:          $color-blue;
  $warning:       $color-orange;
  $danger:        $color-red;
  $light:         $color-gray-light;
  $dark:          $color-darkgray;

  @import '../node_modules/bootstrap/scss/bootstrap';

  h1 {
    font-weight: 700;
    margin: 30px 0;
    text-align: center;
    text-transform: uppercase;
    color: $danger;
  }

  .product-list {
    .card {
      margin-top: 25px;

      .card-body {
        height: 180px;
        overflow-y: auto;

        p {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          font-size: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
      }
    }
  }

}

</style>
