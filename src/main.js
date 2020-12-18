import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Routes from './routes';
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  store,
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
