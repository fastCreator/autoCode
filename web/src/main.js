import Vue from 'vue'
import App from './App'
import store from './store'
import './components'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './utils/proto'
Vue.config.productionTip = false

Vue.use(ElementUI)

 

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
