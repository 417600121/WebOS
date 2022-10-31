import Vue from 'vue'
import App from './App.vue'

//====路由==============================================================
import router from './router'
//======================================================================


//====vuex==============================================================
//引入store
import store from './store'
//======================================================================


//====bootstrap=========================================================
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//======================================================================

import "zico/css/zico.min.css";
// import "@/assets/iconfont/iconfont.css";
Vue.config.productionTip = false


//====自定义指令=========================================================
import './plugins/directive.js'
//======================================================================


import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popper', VClosePopper)

Vue.component('VDropdown', Dropdown)
Vue.component('VTooltip', Tooltip)
Vue.component('VMenu', Menu)
import 'floating-vue/dist/style.css'
//======================================================================
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
Vue.use(contentmenu)
//======================================================================
import 'font-awesome/css/font-awesome.css'



new Vue({
  router,
  store,
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
  render: h => h(App)
}).$mount('#app')
