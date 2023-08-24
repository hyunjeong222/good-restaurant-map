<!-- 가장 초기 화면, main.js에 설정 -->
<template>
  <div id="app">
    <TopBar/>
    <LoginForm/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import LoginForm from '@/components/Login'

export default {
  name: 'App',
  components: {
    TopBar,
    LoginForm,
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
  font-family: 'BMJUA';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>