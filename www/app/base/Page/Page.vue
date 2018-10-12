<template>
    <div>
        <Page 
            @on-change="setpage" 
            :current="$store.state.currentArticlePage"
            :total="total" :page-size="5" 
            :styles="settings"
        />
    </div>
</template>

<script>
export default {
    props: ['total'],
    data() {
        return {
            settings: {
                'font-size': 14 + 'px'
            }
        };
    },
    methods: {
        setpage(data) {
            this.$store.commit('SET_ARTICLEPAGE', data);
            window.scrollTo(0, 0);
        }
    }
};
</script>

<style lang="less">
</style>
