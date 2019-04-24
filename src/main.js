import Vue from 'vue'
import App from './App.vue'
import wmpSlider from './index.js'

Vue.use(wmpSlider)

new Vue({
  el: '#app',
  render: h => h(App)
})
