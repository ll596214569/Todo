import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        UserInfo: {
            username: "",
            password: "",
            save_password: "",
        },
    },
    mutations: {
        setUsername(state, name) {
            state.UserInfo.username = name
        },
        setUserInfo(state, info) {
            state.UserInfo.username = info.username
            state.UserInfo.password = info.password
            state.UserInfo.save_password = info.save_password
        },
    },
    actions: {
    },
    modules: {
    },
})
