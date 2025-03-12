<template>
    <div id="app">
        <div class="bar" v-if="show">
            <transition name="main" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>

  <!--<div id="app">
    <LoginDlg />
  </div>-->
</template>

<script>
import bridge from "./assets/js/client_bridge.js";
import LoginDlg from './views/LoginDlg'

export default {
    name: 'App',
    components: {
        LoginDlg,
        bridge
    },
    data() {
        return {
            show: false,
        };
    },
    async created() {
        await this.init();

        this.show = true;
    },
    methods: {
        init() {
            // TODO
            bridge.bridge({
                namespace: "TodoList",
                method: "Ready",
                params: [],
                callback: function (res) {
                    if (res) {
                        if (!res.ErrorInfo || res.ErrorInfo.length <= 0) {
                            console.info("bridge Ready")
                        }
                    }
                },
            });
        },
        initUser() {
            bridge.bridge({
                namespace: "TodoList",
                method: "GetUserInfo",
                params: [],
                callback: function (res) {
                    if (res && (!res.ErrorInfo || res.ErrorInfo.length <= 0)) {
                        
                    }
                },
            });
        },
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
