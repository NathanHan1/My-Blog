import Vue from 'vue';
import Router from 'vue-router';


import Home1 from '../components/Home/Home.vue'
import Article1 from '../components/Article/Article.vue'
import Resume1 from '../components/Resume/Resume.vue'
import Movies1 from '../components/Movies/Movies.vue'
import Production1 from '../components/Production/Production.vue'
import ArticleContent1 from '../components/ArticleContent/ArticleContent.vue'
import Edit1 from '../components/Edit/Edit.vue'

Vue.use(Router);

const Home = () => Promise.resolve(Home1)
const Article = () => Promise.resolve(Article1)
const Production = () => Promise.resolve(Production1)
const Movies = () => Promise.resolve(Movies1)
const Resume = () => Promise.resolve(Resume1)
const ArticleContent = () => Promise.resolve(ArticleContent1)
const Edit = () => Promise.resolve(Edit1)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/article',
            component: Article,
            children:[
                {
                    path:':time',
                    component:ArticleContent
                }
            ]
        },
        {
            path: '/movies',
            component: Movies
        },
        {
            path: '/production',
            component: Production
        },
        {
            path: '/resume',
            component: Resume
        },
        {
            path: '/edit',
            component: Edit
        }
    ]
});
