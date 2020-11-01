import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Select } from 'element-ui'
import './plugins/element.js'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
