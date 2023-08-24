<!-- App.vue 파일에 지도 띄움 -->
<template>
    <div id="map"></div>
</template>
  
<script>
export default {
    name: 'KakaoMap',
    data() {
        return {
            map: null,
        };
    },
    setup() {},
    created() {},
    mounted() {
        if (!window.kakao || !window.kakao.maps) {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src =
            '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=ec5e65e745ac038c3bc69a81ed550b23&autoload=false'
            /* eslint를 사용한다면 kakao 변수가 선언되지 않았다고
            * 오류를 내기 때문에 아래 줄과 같이 전역변수임을
            * 알려주어야 한다. */
            /* global kakao */
            script.addEventListener('load', () => {
                kakao.maps.load(() => {
                    // 카카오맵 API가 로딩이 완료된 후 지도의 기본적인 세팅을 시작해야 한다.
                    this.initMap()
                })
            })
            document.head.appendChild(script)
        } else {
            // 이미 카카오맵 API가 로딩되어 있다면 바로 지도를 생성한다.
            this.initMap()
        }
    },
    unmounted() {},
    methods: {
        initMap() {
            const container = document.getElementById('map')

            const options = {
                // 처음 지도의 위치를 lat, lng(위도, 경도) 값으로 설정한다.
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            }
 
            this.map = new kakao.maps.Map(container, options)
        },
    },
};
</script>
  
<style scoped>
#map {
    float: right;
    width: 620px;
    height: 620px;
    margin: 30px;
}
</style>