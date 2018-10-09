<template>
    <div class="wrap">
        <div class="loginview">
            <h2>请出示您的渔人身份...</h2>
            <div class="close" @click="close"><i class="iconfont icon-guanbi"></i></div>
            <login class="login"></login>
        </div>
    </div>
</template>

<script>
import Login from '../../base/Login/Login.vue';

export default {
    methods: {
        close() {
            this.$store.commit('LOGINVIEW', false);
        }
    },
    components: {
        Login
    }
};
</script>

<style lang="less" scoped>
.wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(21, 101, 121,.7);
        background-size: 150%;
    }
    .loginview {
        .close {
            position: absolute;
            right: 15px;
            top: 15px;
            transition: 0.5s;
            &:hover {
                cursor: pointer;
                transform: rotateZ(180deg);
            }
        }
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1002;
        width: 350px;
        height: 250px;
        margin: auto;
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        .login {
            width: 250px;
            margin: 20px auto 0;
            text-align: center;
        }
        h2 {
            font-size: 24px;
            height: 38px;
            line-height: 38px;
        }
    }
}
</style>
