<template>
    <div class="top-wrapper">
        <div class="top-logo">맛집탐방</div>
        <div class="find-map">맛집찾기</div>
        <div class="add-restaurant">맛집추천</div>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data() {
    return {}
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.top-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 3px 4px 0px;

    > * {
        font-size: 23px;
        display: flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }

    > .top-logo {
        width: 180px;
        height: 80px;
    }

    > .find-map {
        margin-left: auto;
        width: 135px;
        height: 80px;
    }

    > .find-map::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 14px;
        margin-top: 5px;
        margin-left: 134px;
        background-color: rgb(226, 226, 226);
    }

    > .add-restaurant {
        width: 135px;
        height: 80px;
    }
}
</style>