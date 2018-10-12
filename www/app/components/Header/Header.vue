<template>
    <div class="header">
        <div ref="wrap" class="wrap">
            <router-link tag="div" class="tab-item" to="/home">
                <a>
                    <div class="logo" :class="{'activeLogo':view==='home'}" @click="toHome">
                        <i :class="{'active':view==='home'}" class="iconfont icon-niao"></i>
                    </div>
                    <h1>自由鱼人的博客</h1>
                </a>
            </router-link>
            <ol class="tab">
                <router-link tag="div" class="tab-item" to="/article">
                    <li @click="toArticle" :class="{'active':view==='article'}">博文</li>
                </router-link>
                <router-link tag="div" class="tab-item" to="/production">
                    <li @click="toProduction" :class="{'active':view==='production'}">作品</li>
                </router-link>
                <router-link tag="div" class="tab-item" to="/movies">
                    <li @click="toMovies" :class="{'active':view==='movies'}">电影</li>
                </router-link>
                <router-link tag="div" class="tab-item" to="/resume">
                    <li @click="toResume" :class="{'active':view==='resume'}">简历</li>
                </router-link>
                <li class="login" @click="toLogin"><i class="iconfont icon-denglu"></i>{{infoLogin}}</li>
            </ol>
            <Modal class-name="vertical-center-modal" v-model="modal" @on-ok="leave" width="350">
                <p style="font-size:24px">确定退出吗？</p>
            </Modal>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        view() {
            return this.$store.state.view;
        },
        infoLogin() {
            if (this.$store.state.login) {
                return '登出';
            } else {
                return '登录';
            }
        }
    },
    data() {
        return {
            modal: false
        };
    },
    mounted() {
        //为了填补iview的坑，只能动态设置header的位置。
        this.$refs.wrap.style.left = document.body.clientWidth / 2 - 550 + 'px';
    },
    methods: {  
        toHome() {
            this.$store.commit('SET_VIEW', 'home');
            // this.$Loading.start();
        },
        toArticle() {
            this.$store.commit('SET_VIEW', 'article');
            // this.$Loading.start();
        },
        toProduction() {
            this.$store.commit('SET_VIEW', 'production');
        },
        toResume() {
            this.$store.commit('SET_VIEW', 'resume');
        },
        toMovies() {
            this.$store.commit('SET_VIEW', 'movies');
        },
        toLogin() {
            if (!this.$store.state.login) {
                this.$store.commit('LOGINVIEW', true);
            } else {
                if (this.$store.state.view === 'add' || this.$store.state.view === 'edit') {
                    return;
                }
                this.modal = true;
            }
        },
        leave() {
            this.$store.commit('LOGING', false);
        }
    }
};
</script>

<style lang="less">
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 801;
    height: 65px;
    width: 100%;
    background: #222;
    color: #ccc;
    .wrap {
        position: absolute;
        width: 1100px;
        height: 65px;
        left: 0;
        top: 0;
        a {
            position: absolute;
            z-index: 999;
            left: 20px;
            top: 5px;
            h1 {
                text-indent: -999em;
            }
            .logo {
                position: absolute;
                top: 5px;
                left: 0;
                width: 46px;
                height: 46px;
                line-height: 46px;
                border-radius: 50%;
                box-shadow: 0 0 5px #666;
                background: #333;
                transition: 0.2s;
                i {
                    font-size: 46px;
                    color: #ddd;
                }
                &:hover {
                    background: #666;
                    i {
                        color: #fff;
                    }
                }
                .active {
                    color: skyblue;
                }
            }
            .activeLogo {
                box-shadow: 0 0 20px #07c1f5;
            }
        }
        .tab {
            position: absolute;
            right: 20px;
            bottom: 10px;
            display: flex;
            width: 350px;
            justify-content: space-around;
            font-size: 18px;
            li {
                box-sizing: border-box;
                width: 40px;
                height: 30px;
                transition: 0.2s;
                &:hover {
                    color: #57c3e0;
                    text-shadow: 0 0 20px #666;
                    cursor: pointer;
                }
            }
            .login {
                width: 80px;
                i {
                    margin: 0 5px;
                }
                &:hover {
                    color: greenyellow;
                }
            }
            .active {
                color: #57c3e0;
                text-shadow: 0 0 20px #666;
                position: relative;
                &::after{
                    content: '';
                    display: block;
                    width: 53px;
                    height: 2px;
                    background: #57c3e0;
                    position: absolute;
                    bottom: -10px;
                    left: -9px;
                }
            }
        }
    }
}
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
        top: 0;
    }
}
</style>
