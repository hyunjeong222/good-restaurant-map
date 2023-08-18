<!-- 가장 초기 화면, main.js에 설정 -->
<template>
  <div id="app">
    <KakaoMap/>
  </div>
</template>

<script>
import KakaoMap from "@/components/KakaoMap"

export default {
  name: 'App',
  components: {
    KakaoMap,
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>