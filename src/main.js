import Vue from 'vue'
import App from './App'
import router from './router'
import dmui from './comps/index'

Vue.use(dmui)
Vue.config.productionTip = false
// 引入大数据表格 - 虚拟滚动
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
Vue.use(VXETable);
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
