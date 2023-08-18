// App.vue 파일을 import 해온 뒤 렌더링 시키고
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 파일 내의 id가 'app'인 element 사용
new Vue({
  render: h => h(App),
}).$mount('#app')
