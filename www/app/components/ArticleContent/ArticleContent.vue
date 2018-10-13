<template>
    <div class="articleContent" ref="articleContent">
        <div class="contentWrap">
            <div  class="titleWrap">
                <div class="background" ref="bg"></div>
            </div>
            <div class="title">
                    <h2>{{blog.title}}</h2>
                    <p class="prev">{{blog.prev}}</p>
            </div>
            <div ref="content" class="content"></div>
        </div>
        <m-footer class="footer-article"></m-footer>
        <BackTop></BackTop>
        <back view="article"></back>
    </div>
</template>

<script>
import MFooter from '../Footer/Footer.vue';
import Back from '../../base/Back/Back.vue'

export default {
    props: ['blog'],
    mounted() {
        this.$refs.content.innerHTML = this.blog.content;
        this.$refs.bg.style.backgroundImage = `url(${this.blog.img})`;
    },
    components: {
        MFooter,
        Back
    }
};
</script>

<style lang="less">
.articleContent {
    .footer-article {
        position: absolute;
        bottom: 0;
        left: 0;
    }
    font-size: 18px;
    background: #ccc;
    min-height: 1400px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    padding: 80px 150px 300px;
    .contentWrap {
        background: #fff;
        min-height: 1240px;
        position: relative;
        width: 900px;
        margin: 0 auto;
        .titleWrap {
            overflow: hidden;
            .background {
                width: 100%;
                height: 400px;
                background-size: cover;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 1000px;
                    height: 400px;
                    background: rgba(0, 0, 0, 0.5);
                    filter: blur(55px);
                }
            }
        }
        .title {
            position: absolute;
            top: 85px;
            left: 70px;
            color: #fff;
            h2 {
                font-size: 30px;
                font-weight: normal;
                line-height: 42px;
                margin-bottom: 20px;
                width: 700px;
            }
            p {
                width: 600px;
                color: #eee;
            }
        }
        .content {
            width: 100%;
            height: calc(100% - 400px);
            padding: 30px 100px;
            line-height: 32px;
            h1 {
                margin: 30px 0;
            }
            img {
                width: 500px;
            }
        }
    }
}
</style>

