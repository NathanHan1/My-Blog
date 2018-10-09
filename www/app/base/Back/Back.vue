<template>
    <div>
        <div @click="back" class="back">
            <i class="iconfont icon-back"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:['view'],
    methods: {
        back() {
            this.$router.push({
                path:`/${this.view}`
            })
            this.$store.commit('SET_VIEW',this.view)
        }
    }
};
</script>

<style lang="less" scoped>
.back {
    position: fixed;
    left: 50px;
    top: 100px;
    i {
        font-size: 32px;
        transition: 0.5s;
        &:hover {
            cursor: pointer;
            color: rgb(39, 140, 199);
        }
    }
}
</style>
