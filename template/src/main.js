// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as FastClick from "fastclick"
import App from './App'
import router from './router'
import './styles/global.css'
import "./mock.js";
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

import "@/assets/css/base.css"
/* 支持全局引入 */
import vxmobile from 'vx-mobile'
import axios from 'axios';
Vue.prototype.$remote = axios;
Vue.use(ElementUI);

Vue.use(vxmobile)
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
