<template>
  <div class="register-container" >
    <div class="body" style="width: 100vh;margin: 0 auto;">
        <el-form ref="form" size="large" autocomplate="off" label-width="100px" >
            <el-form-item>
                <h1>登录</h1>
            </el-form-item>

            <el-form-item >
                <el-input prefix-icon="el-icon-user" placeholder="请输入用户名" v-model="username">
                </el-input>
            </el-form-item>

            <el-form-item >
                <el-input prefix-icon="el-icon-user" placeholder="请输入密码" v-model="password" show-password>
                </el-input>
            </el-form-item>

            <el-form-item class="flex">
                <div class="flex" style="display: flex;justify-content: center;">
                    <el-checkbox v-model="save_password" style="margin-right: 10px;">记住密码</el-checkbox>
                    <el-link type="primary" :underline="false" @click="OnResetPassword">忘记密码</el-link>
                </div>
            </el-form-item>

            <el-form-item class="flex">
                <el-link type="primary" :underline="false" @click.native="OnRegister">注册用户</el-link>
            </el-form-item>


            <el-form-item>
                <el-button class="button" type="primary" @click.native="OnLog">
                    登录
                </el-button>
            </el-form-item>

        </el-form>
    </div>
  </div>
</template>

<script src="./init.js"></script>

<style scoped>

.register-container {
    height: 100vh;
    background: url('@/assets/images/Login/background.jpg') center center fixed no-repeat;
    background-size: cover;
}
</style>
