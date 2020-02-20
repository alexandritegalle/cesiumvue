import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCesium from 'vue-cesium'
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js',
  // Official Online Cesium Build package：
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  cesiumPath: 'https://cesium.com/downloads/cesiumjs/releases/1.65/Build/Cesium/Cesium.js',
  // Cesium.Ion.defaultAccessToken
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YWQ2MzAzNC1mMzMxLTRlNzYtYWI5Ni0xOGRlMDBmYjJjYjUiLCJpZCI6MjExODUsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzkwNzMzODl9.XW7aBxcgmZn0_H_CQz9Sqnd9pAbzf0Ddna6Bo5U3jX4'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
