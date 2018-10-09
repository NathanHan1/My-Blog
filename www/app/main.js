import Vue from 'vue';
import App from './App.vue';
import iView from 'iview';
import './common/index.css';
import store from './store/index.js';
import router from './router/index.js';

Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
