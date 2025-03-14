import bridge from "../../assets/js/client_bridge.js";

export default {
    username: "RegisterDlg",
    data() {
        const validateusername = (rule, value, callback) => {
            if ("" == value) {
                callback(new Error("用户名不能为空"));
            } else {
                callback();
            }
        };
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error("密码不能少于6位"));
            } else {
                callback();
            }
        };
        const validateKey = (rule, value, callback) => {
            callback();
        };
        return {
            isGetphone: false,
            showRegister: false,
            title: this.$baseTitle,
            form: {},
            registerRules: {
                username: [
                    { required: true, trigger: "blur", message: "请输入用户名" },
                    { max: 20, trigger: "blur", message: "最多不能超过20个字" },
                    { validator: validateusername, trigger: "blur" },
                ],
                password: [
                    { required: true, trigger: "blur", message: "请输入密码" },
                    { validator: validatePassword, trigger: "blur" },
                ],
                key: [
                    { required: true, trigger: "blur", message: "请输入密保，找回&重置账号需要使用密保" },
                    { max: 20, trigger: "blur", message: "最多不能超过12个字" },
                    { validator: validateKey, trigger: "blur" },
                ],
            },
            loading: false,
            passwordType: "password",
        };
    },
    created() {
    },
    methods: {
        handleReister() {
            let param = {
                username: this.form.username,
                key: this.form.key,
                password: this.form.password,
            };

            bridge.bridge({
                namespace: "TodoList",
                method: "Register",
                params: [param],
                callback: function (res) {
                    if (res && (!'ErrorInfo' in res || res.ErrorInfo.length <= 0)) {
                        let user = {
                            username: param.username,
                            password: param.password,
                            save_password: false,
                        };
                        this.$store.commit("setUserInfo", user);
                        this.$router.push("/Login");
                    } else {
                        this.$message.error("注册失败");
                    }
                },
            });
        },
    },
};
