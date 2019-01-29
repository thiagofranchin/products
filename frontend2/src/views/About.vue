<template>
  <div class="about">
    <h1>This is an about page</h1>
      <div class="row" >
        <div class="col-2" v-for="(user, id) in usersList" :key="id">
          <img :src="user.pictureUrl" class="img-fluid">
          <p class="text-center mt-3 text-primary">{{user.name}} {{user.lastname}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usersList: [],
    }
  },
  methods: {
    loadProduct() {
      this.$http.get('/users', this.users)
        .then((res) => {
          this.usersList = res.data
        })
    }
  },
  created() {
    this.loadProduct()
  }
}

</script>