<template>
    <div>
        <m-header></m-header>
        <transition name="slide">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <transition name="login">
            <login-view v-if="$store.state.loginView"></login-view>
        </transition>
        <m-footer></m-footer>
        <BackTop></BackTop>
    </div>
</template>

<script>
import LoginView from './components/LoginView/LoginView.vue';
import MHeader from './components/Header/Header.vue';
import MFooter from './components/Footer/Footer.vue';

export default {
    components: {
        MHeader,
        MFooter,
        LoginView
    },
    created() {
        if (localStorage.getItem('userMsg')) {
            this.$store.replaceState(JSON.parse(localStorage.getItem('userMsg')));
            this.$router.push(`/${this.$store.state.view}`);
        }
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('userMsg', JSON.stringify(this.$store.state));
        });
    }
};
</script>

<style lang="less">
.slide-enter-active {
    transition: all 1.2s;
}
.slide-leave-active {
    transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}

.login-enter-active,
.login-leave-active {
    transition: all 0.7s;
}

.login-enter,
.login-leave-to {
    opacity: 0;
}

a.ivu-modal-close{
    transition: .7s;
    &:hover{
        transform: rotateZ(180deg)
    }
}
</style>
