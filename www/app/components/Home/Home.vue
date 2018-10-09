<template>
    <div class="home">
        <section class="introduction">
            <img src="/app/components/Home/banner1.jpg" 
            oncontextmenu="return false;" 
            onselectstart="return false;"
            draggable="false"
            width="100%" alt="" />
            <div class="info">
                <h2>你好！</h2>
                <br>
                <h1>我是 <strong>自由渔人</strong></h1>
                <br>
                <p>95后前端工程师</p>
                <p>为了消灭代码世界的臭虫<br>愿望是成为一名昆虫学博士（狗头）</p>
                <br>
                <div class="linkLogo">
                    <a href="http://hanzhibang.cn" target="_blank"><i class="iconfont icon-githup"></i></a>
                    <a href="https://weibo.com/1810415550/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"     target="_blank"><i class="iconfont icon-weibo"></i></a>
                    <a href="https://www.zhihu.com/people/zi-you-yu-ren-7/answers" target="_blank"><i class="iconfont   icon-zhihu"></i></a>
                    <Tooltip content="WeChat: 354172676">
                        <i class="iconfont icon-weixin"></i>
                    </Tooltip>
                </div>
            </div>
        </section>
        <section class="server">
            <div class="serverWrap">
                <div class="nodejs">
                    <img src="/app/components/Home/nodejs1.jpg" width="150px" alt="">
                    <p>NODEJS强力驱动</p>
                </div>
                <h1>与</h1>
                <div class="mongodb">
                    <img src="/app/components/Home/mongodb.jpg" width="150px" alt="">
                    <p>MongoDB高效读写</p>
                </div>
            </div>
            <p></p>
        </section>
        <section class="browser">
            <div class="browserWrap">
                <img src="/app/components/Home/vue.png" width="150px" alt="">
                <p>基于VueJS + Vuex + Vue-Router + iView + 富文本编辑器的 <span style="color: #ccc;font-weight:bold">单页面应用</span></p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    created() {
        this.$Loading.finish();
    }
};
</script>

<style lang="less" scoped>
.home {
    position: relative;
    .introduction {
        padding-top: 65px;
        .info {
            position: absolute;
            left: 70px;
            top: 150px;
            color: #ccc;
            h2 {
                font-size: 26px;
            }
            h1 {
                font-size: 32px;
                strong {
                    font-size: 38px;
                    font-weight: bold;
                }
            }
            p {
                font-size: 18px;
                line-height: 35px;
            }
            .linkLogo {
                .icon-weixin {
                    &:hover {
                        color: #80bd01;
                    }
                }
                .icon-zhihu {
                    &:hover {
                        color: #0143bd;
                    }
                }
                .icon-weibo {
                    &:hover {
                        color: orange;
                    }
                }
                .icon-githup {
                    &:hover {
                        color: #109fca;
                    }
                }
                i {
                    transition: 0.2s;
                    font-size: 50px;
                    color: white;
                }
            }
        }
    }
    .server {
        width: 100%;
        height: 500px;
        position: relative;
        .serverWrap {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 850px;
            height: 230px;
            margin: auto;
            p {
                color: #80bd01;
                font-size: 42px;
            }
            .nodejs {
                text-align: center;
                height: 230px;
                width: 370px;
                float: left;
                position: relative;
                p {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                }
            }
            h1 {
                margin: 10px;
                float: left;
            }
            .mongodb {
                width: 390px;
                text-align: center;
                height: 230px;
                float: left;
                p {
                    position: absolute;
                    bottom: 10px;
                    right: 40px;
                }
            }
        }
    }
    .browser {
        height: 500px;
        width: 100%;
        background: rgb(56, 57, 59);
        position: relative;
        .browserWrap {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 700px;
            height: 350px;
            font-size: 40px;
            text-align: center;
            line-height: 40px;
            p {
                color: #aaa;
                position: absolute;
                bottom: 10px;
                left: 0;
            }
        }
    }
}
</style>
