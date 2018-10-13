<template>
    <div class="article" ref="article">
        <div class="wrapArticle">
            <h1 class="title">这里记录了技术的成长...</h1>
            <transition name="write">
                <div class="write" @click="linkToAdd" v-if="$store.state.login">
                    <i class="iconfont icon-zengjiatianjiamianxing"></i>
                </div>
            </transition>
                <ul>
                    <transition-group name="listblogs">
                        <li class="listblogs-item" v-for="(item,index) in blogs" :key="item._id">
                            <div class="text">
                                <h2 @click="linkToContent(item)">{{item.title}}<i class="iconfont icon-niao-"></i></h2>
                                <p class="preview">{{item.prev}}</p>
                                <p class="date">
                                    <i class="iconfont icon-riqi1"></i>
                                    {{item.date.year}}-{{item.date.month}}-{{item.date.day}}
                                </p>
                            </div>
                            <transition name="operating">
                                    <div class="oparating" v-if="$store.state.login">
                                        <i @click="up(index)" class="iconfont icon-up"></i>
                                        <i @click="down(index)" class="iconfont icon-down"></i>
                                        <i class="iconfont icon-bianji"
                                            @click="linkToEdit(item)"
                                        ></i>
                                        <i class="iconfont icon-shanchu" 
                                            @click="isRemove(item.time)"
                                        ></i>
                                    </div>
                            </transition>
                            <div class="image">
                                <img v-lazy="item.img" height="169px" alt="">
                            </div>
                            <div class="line"></div>
                        </li>
                    </transition-group>
                    <page :total="$store.state.article.length" class="page"></page>
                </ul>
        </div>
        <Modal 
        class-name="vertical-center-modal" 
        v-model="modal"
         @on-ok="remove" 
         :styles="{position:'relative'}"
         width="350">
                <p style="font-size:24px">确定删除这篇文章吗？</p>
        </Modal>
        <transition name="slide">
            <router-view :blog="blog"></router-view>
        </transition>
    </div> 
</template>

<script>
import Page from '../../base/Page/Page.vue';
import axios from 'axios';

export default {
    created() {
        this.$store.dispatch('GET_ARTICLE').then(() => {
            this.blogs = this.deepClone(this._blogs);
            console.log('hehe');
        });
        console.log('haha');
    },
    data() {
        return {
            blog: {},
            modal: false,
            removeTime: 0,
            blogs: null
        };
    },
    watch: {
        _blogs() {
            this.blogs = this.deepClone(this._blogs);
        }
    },
    computed: {
        _blogs() {
            return this.$store.state.article.slice(this.startDocument, this.startDocument + 5);
        },
        startDocument() {
            return (this.$store.state.currentArticlePage - 1) * 5;
        }
    },
    methods: {
        deepClone(b) {
            return JSON.parse(JSON.stringify(b));
        },
        linkToContent(item) {
            this.$router.push({
                path: `/article/${item.time}`
            });
            this.blog = item;
            window.scrollTo(0, 0);
        },
        linkToEdit({ content, time, img }) {
            this.$store.commit('SET_VIEW', 'edit');
            this.$store.commit('EDITARTICLE', content);
            this.$store.commit('EDIT_TIME', time);
            this.$store.commit('EDIT_IMG', img);
            this.$router.push({
                path: '/edit'
            });
            window.scrollTo(0, 0);
        },
        linkToAdd() {
            this.$store.commit('SET_VIEW', 'add');
            this.$router.push({
                path: '/edit'
            });
            window.scrollTo(0, 0);
        },
        remove() {
            axios.delete(`/blog/${this.removeTime}`).then(
                () => {
                    this.$store.dispatch('GET_ARTICLE').then(() => {
                        this.$store.state.article;
                    });
                },
                () => {
                    console.log('失败了');
                }
            );
        },
        isRemove(time) {
            this.modal = true;
            this.removeTime = time;
        },
        up(index) {
            if (index === 0) {
                return;
            }
            this.blogs.splice(index - 1, 0, this.blogs.splice(index, 1)[0]);
        },
        down(index) {
            if (index === this.blog.length - 1) {
                return;
            }
            this.blogs.splice(index + 1, 0, this.blogs.splice(index, 1)[0]);
        }
    },
    components: {
        Page
    }
};
</script>

<style lang="less" scoped>
.article {
    height: 1400px;
    width: 100%;
    padding-top: 100px;
    background: url('/app/components/Article/house.jpg');
    background-size: 100%;
    .wrapArticle {
        .write-enter-active,
        .write-leave-active {
            transition: all 0.6s;
        }
        .write-enter,
        .write-leave-to {
            opacity: 0;
        }
        .operating-enter-active,
        .operating-leave-active {
            transition: all 0.6s;
        }
        .operating-enter,
        .operating-leave-to {
            opacity: 0;
        }
        .write {
            position: absolute;
            right: 20px;
            top: 40px;
            width: 50px;
            height: 50px;
            .icon-zengjiatianjiamianxing {
                font-size: 40px;
                color: #444;
                transition: 0.5s;
                &:hover {
                    cursor: pointer;
                    color: rgb(25, 248, 118);
                }
            }
        }
        border-radius: 5px;
        background: rgba(148, 148, 151, 0.65);
        width: 1050px;
        margin: 0 auto;
        height: 1250px;
        position: relative;
        padding: 10px 60px 50px 60px;
        h1 {
            font-size: 36px;
            margin-top: 15px;
            margin-bottom: 45px;
            color: #aaa;
        }
        ul {
            height: 1107px;
            .listblogs-item {
                transition: all 1s;
            }
            .listblogs-enter,
            .listblogs-leave-to {
                opacity: 0;
            }
            .listblogs-leave-active {
                position: absolute;
            }
            li {
                display: flex;
                width: 920px;
                height: 200px;
                background: #fff;
                border-radius: 5px;
                position: relative;
                margin: 0 auto 15px auto;
                .image {
                    flex: 0 0 auto;
                    img {
                        transition: 0.6s;
                        position: relative;
                        left: 0;
                        top: 0;
                        z-index: 9;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                        filter: sepia(0.3);
                    }
                }
                .text {
                    padding: 30px;
                    flex: 1 1 auto;
                    position: relative;
                    h2 {
                        font-size: 28px;
                        line-height: 28px;
                        height: 28px;
                        font-weight: normal;
                        color: #222;
                        margin-bottom: 30px;
                        transition: 0.3s;
                        &:hover {
                            color: rgb(71, 174, 200);
                            cursor: pointer;
                            i {
                                opacity: 1;
                            }
                        }
                        i {
                            color: rgb(71, 174, 200);
                            transition: 0.5s;
                            display: inline-block;
                            margin-left: 15px;
                            opacity: 0;
                            font-size: 28px;
                        }
                    }
                    .preview {
                        text-indent: 2em;
                        color: #999;
                        font-size: 14px;
                    }
                    .date {
                        position: absolute;
                        bottom: 5px;
                        left: 30px;
                        font-size: 16px;
                        transition: 0.3s;
                        &:hover {
                            cursor: pointer;
                            color: rgb(58, 143, 255);
                        }
                    }
                }
                .oparating {
                    position: absolute;
                    right: 10px;
                    bottom: 0px;
                    .icon-shanchu {
                        transition: 0.5s;
                        font-size: 22px;
                        &:hover {
                            cursor: pointer;
                            color: rgb(250, 45, 45);
                        }
                    }
                    .icon-bianji,
                    .icon-down,
                    .icon-up {
                        font-size: 20px;
                        transition: 0.5s;
                        &:hover {
                            cursor: pointer;
                            color: rgb(82, 171, 255);
                        }
                    }
                }
                .line {
                    width: calc(100%);
                    position: absolute;
                    left: 0;
                    bottom: 30px;
                    height: 1px;
                    background: #ccc;
                    z-index: 0;
                }
                transition: 0.4s;
                &:hover {
                    box-shadow: 0 0 30px 3px rgb(71, 174, 200);
                    img {
                        filter: sepia(0);
                    }
                }
            }
        }
        .page {
            margin-left: 50%;
            transform: translateX(-50%);
        }
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.6s;
    }
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
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
