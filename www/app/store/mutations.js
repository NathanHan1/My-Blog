const mutations = {
    SET_VIEW(state, view) {
        state.view = view;
    },
    GET_ARTICLE(state, data) {
        state.article = data;
    },
    SET_ARTICLEPAGE(state, page) {
        state.currentArticlePage = page;
    },
    LOGING(state, boolean) {
        state.login = boolean;
    },
    LOGINVIEW(state, boolean) {
        state.loginView = boolean;
    },
    EDITARTICLE(state, article) {
        state.currentArticle = article;
    },
    EDIT_TIME(state, time) {
        state.currentArticleTime = time;
    },
    EDIT_IMG(state, img) {
        state.currentArticleImg = img;
    }
};

export default mutations;
