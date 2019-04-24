import vueWmpSlider from './components/vue-wmp-slider'
const wmpSlider = {
  install (Vue, options) {
    Vue.component(vueWmpSlider.name, vueWmpSlider)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(wmpSlider)
}

export default wmpSlider