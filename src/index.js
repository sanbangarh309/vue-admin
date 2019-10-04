import routes from './routers'
import layout from './pages/layout'

const router = new VueRouter({
  routes,
  mode: 'history',
  base: '/c'
})

// 取消 Vue 所有的日志与警告
Vue.config.silent = true
Vue.config.errorHandler = (err, vm) => {
  console.error(err)
}

const app = new Vue({
  router,
  template: '<layout></layout>',
  components: {layout},
  data: {
    contentTitle: 'DEFAULT',
    contentBreadcrumbs: []
  }
}).$mount('#app')
