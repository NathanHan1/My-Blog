<template>
    <div class="edit">
        <div class="wrap">
            <div class="editorHeader" ref="editor1"></div>
            <div style="padding: 5px 0"></div>
            <div class="editorContent" ref="editor2"></div>
            <div class="imgSrc">
                <i @click="showImgSrc" class="iconfont icon-tupian"></i>
                <transition name="imgSrcSlide">
                    <Input class="iptImg" v-show="imgSrc" v-model="img" placeholder="请添加图片地址..." />
                </transition>
            </div>
            <div class="btnWrap">
                <Button @click="back" size="large" class="btn" type="default">取消</Button>
                <Button @click="showModal" size="large" class="btn" type="primary">确定</Button>
            </div>
        </div>
        <Modal 
            class-name="vertical-center-modal" 
            v-model="modal"
            @on-ok="submit" 
            width="350">
                <p style="font-size:24px">确定提交吗？</p>
        </Modal>
        <back view="article"></back>
    </div>
</template>

<script>
import E from 'wangeditor';
import axios from 'axios';
import Back from '../../base/Back/Back.vue';

export default {
    data() {
        return {
            editor: null,
            JSON: {},
            img: 'https://goss.vcg.com/creative/vcg/800/version23/VCG21gic19582777.jpg',
            imgSrc: false,
            modal: false
        };
    },
    mounted() {
        this.editor = new E(this.$refs.editor1, this.$refs.editor2);
        this.editor.create();
        if (this.$store.state.currentArticle && this.$store.state.view === 'edit') {
            this.editor.txt.html(this.$store.state.currentArticle);
        } else {
            this.editor.txt.html('');
        }
    },
    activated() {
        this.imgSrc = false;
        if (this.$store.state.currentArticle && this.$store.state.view === 'edit') {
            this.editor.txt.html(this.$store.state.currentArticle);
        } else {
            this.editor.txt.html('');
        }
    },
    methods: {
        submit() {
            this.setJSON();
            if (this.$store.state.view === 'add') {
                this.add();
            } else if (this.$store.state.view === 'edit') {
                this.edit();
            }
            this.$store.commit('SET_VIEW', 'article');
        },
        add() {
            axios({
                method: 'post',
                url: '/blog',
                headers: { 'Content-type': 'application/json' },
                data: this.JSON
            }).then(
                data => {
                    console.log(data);
                    this.$store.dispatch('GET_ARTICLE');
                    this.$router.push({
                        path: '/article'
                    });
                },
                err => {
                    console.log(err);
                }
            );
        },
        edit() {
            axios.delete(`/blog/${this.$store.state.currentArticleTime}`).then(() => {
                this.add();
            });
        },
        back() {
            this.$store.commit('SET_VIEW', 'article');
            this.$router.back();
        },
        getID() {
            return Math.floor(Math.random() * 324683269);
        },
        getTitle() {
            const txt = this.editor.txt.getJSON()[0].children[0];
            const res = txt.replace(/\s+/g, '');
            return res;
        },
        getPrev() {
            const txt = this.editor.txt.getJSON()[1].children[0];
            return txt.slice(0, 84);
        },
        getContent() {
            const txt = this.editor.txt.html();
            return txt.replace(/"+/g, "'");
        },
        setJSON() {
            this.JSON = {
                id: this.getID(),
                content: this.getContent(),
                date: {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth() + 1,
                    day: new Date().getDate()
                },
                title: this.getTitle(),
                prev: this.getPrev(),
                img: this.img,
                time: new Date().getTime()
            };
        },
        showImgSrc() {
            this.imgSrc = !this.imgSrc;
        },
        showModal() {
            this.modal = true;
        }
    },
    components: {
        Back
    }
};
</script>

<style lang="less" scoped>
.edit {
    height: 800px;
    width: 100%;
    background: rgb(177, 211, 219);
    padding-top: 100px;
    .wrap {
        width: 900px;
        margin: 0 auto;
        .editorHeader {
            background: #333;
        }
        .editorContent {
            border: 1px solid #333;
            height: 500px;
            background: #fff;
            z-index: 800 !important;
        }
        .imgSrc {
            width: 600px;
            i {
                position: relative;
                top: 7px;
                display: inline-block;
                font-size: 32px;
                transition: 0.5s;
                height: 34px;
                &:hover {
                    color: #111;
                    cursor: pointer;
                }
            }
            .iptImg {
                width: 500px;
            }
            .imgSrcSlide-enter-active,
            .imgSrcSlide-leave-active {
                transition: width 0.6s;
            }
            .imgSrcSlide-enter,
            .imgSrcSlide-leave-to {
                width: 0;
            }
        }
        .btnWrap {
            text-align: center;
            padding: 30px 0;
            .btn {
                margin: 0 30px;
            }
        }
    }
}
</style>
