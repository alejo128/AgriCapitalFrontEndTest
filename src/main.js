import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

firebase.initializeApp({
    apiKey: "AIzaSyDyuQkY2CMm7C99k2qs3VgxNfxonRG-ra8",
    authDomain: "agricapitalfrontendtest.firebaseapp.com",
    projectId: "agricapitalfrontendtest",
    storageBucket: "agricapitalfrontendtest.appspot.com",
    messagingSenderId: "295838836407",
    appId: "1:295838836407:web:35d8fa2d0a175f925d8f32"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
