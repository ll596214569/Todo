import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import LoginDlg from "@/views/LoginDlg";
import RegisterDlg from "@/views/RegisterDlg";
import ResetPasswordDlg from "@/views/ResetPassword";

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
        {
            // 注册界面
            path: "/Register",
            name: "Register",
            component: RegisterDlg,
        },
        {
            // 重置密码界面
            path: "/ResetPassword",
            name: "ResetPassword",
            component: ResetPasswordDlg,
        },
    ],
})
