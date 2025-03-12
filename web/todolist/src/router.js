import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import LoginDlg from "@/views/LoginDlg";

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "Login" 
        },
        {
            // 登录界面
            path: "/Login",
            name: "Login",
            component: LoginDlg,
        },
    ],
})
