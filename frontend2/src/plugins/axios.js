import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:3001/products'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3001'
    })
  }
})
