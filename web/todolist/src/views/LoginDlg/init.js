import bridgr from "../../assets/js/client_bridge.js";

export default {
    name: "LoginView",
    components: {},
    data() {
        return {
            username: "",
            password: "",
            save_password: false,
        };
    },
    created() {
        this.init();
    },
    computed: {
    },
    methods: {
        init() {
            let userInfo = this.$store.state.UserInfo;
            this.username = userInfo.username;
            this.password = userInfo.password;
            this.save_password = userInfo.save_password;
        },
        OnLog() {
            if (this.username == "") {
                this.$message.error("账号不可以为空！");
                return;
            }
            if (this.password == "") {
                this.$message.error("密码错误");
                return;
            }

            let param = {
                username: this.username,
                password: this.password,
            };
            bridgr.bridge({
                namespace: "TodoList",
                method: "Login",
                params: [param],
                callback: function (res) {
                    if (!res.ErrorInfo || res.ErrorInfo.length <= 0) {
                        // TODO
                        this.$store.commit("setUsername", this.username);
                    }
                },
            });
        },
    },
    created() {},
};
