<template>
    <div class="footer">
        <div class="text">
            <h1>欢迎来到渔人码头！</h1>
            <p>这里是渔人码头，这里有思维的碰撞，也有对生活的感悟。这里是一名95后前端小白的博客，为技术也为生活。</p>
        </div>
        <div class="icon">
            <h2>关于</h2>
            <div class="iconfont">
                <a href="http://hanzhibang.cn" target="_blank">
                    <i class="iconfont icon-githup"></i>
                </a>
                <a href="https://weibo.com/1810415550/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"     target="_blank">
                    <i class="iconfont icon-weibo"></i>
                </a>
                <a href="https://www.zhihu.com/people/zi-you-yu-ren-7/answers" target="_blank">
                    <i class="iconfont   icon-zhihu"></i>
                </a>
                <Tooltip content="WeChat: 354172676">
                    <i class="iconfont icon-weixin"></i>
                </Tooltip>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
    height: 220px;
    width: 100%;
    background: #222;
    color: #777;
    box-sizing: border-box;
    padding: 60px 40px 0 70px;
    .text {
        width: 500px;
        float: left;
        h1 {
            font-size: 22px;
            margin-bottom: 20px;
            color: #ccc;
        }
        p {
            font-size: 16px;
            text-indent: 2em;
        }
    }
    .icon {
        float: right;
        width: 400px;
        h2 {
            font-size: 22px;
            margin: 10px;
            color: #ccc;
        }
        .iconfont {
            margin-top: 30px;
            font-size: 40px;
            i {
                margin: 5px;
                color: #555;
                transition: 0.2s;
                &:hover {
                    color: rgb(62, 160, 240);
                }
            }
            .icon-weixin {
                &:hover {
                    color: rgb(30, 255, 49);
                }
            }
        }
    }
}
</style>
