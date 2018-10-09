import axios from 'axios';

export default {
    GET_ARTICLE({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/blog').then(res => {
                //根据提交的时间戳排序
                const _arr = res.data;
                _arr.sort(function(a, b) {
                    return b.time - a.time;
                });
                commit('GET_ARTICLE', _arr);
                resolve();
            });
        });
    }
};
