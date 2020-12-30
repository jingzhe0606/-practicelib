import _ from 'lodash'
// css相应的文件引入
import './assets/css/index.css'
// image相应的文件引入
import bg from './assets/imgs/pic.jpg'
import Vue from 'vue'
import App from './App.vue'
const root = document.createElement('div')

document.body.appendChild(root)
new Vue({
  render: (h) => h(App)
}).$mount(root)
