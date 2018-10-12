import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component(){
                return import('../components/Home/Home.vue')
            },
        },
        {
            path: '/article',
            component(){
                return import('../components/Article/Article.vue')
            },
            children:[
                {
                    path:':time',
                    component(){
                        return import('../components/ArticleContent/ArticleContent.vue')
                    }
                }
            ]
        },
        {
            path: '/movies',
            component(){
                return import('../components/Movies/Movies.vue')
            }
        },
        {
            path: '/production',
            component(){
                return import('../components/Production/Production.vue')
            }
        },
        {
            path: '/resume',
            component(){
                return import('../components/Resume/Resume.vue')
            }
        },
        {
            path: '/edit',
            component(){
                return import('../components/Edit/Edit.vue')
            }
        }
    ]
});
