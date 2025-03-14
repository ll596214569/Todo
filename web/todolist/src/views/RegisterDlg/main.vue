<template>
    <div class="register-container">
        <el-row>
            <el-col :lg="16" :md="12" :sm="24" :xl="16" :xs="24">
                <div style="color: transparent">占位符</div>
            </el-col>

            <el-col :lg="8" :md="12" :sm="24" :xl="8" :xs="24">
                <el-form
                    ref="registerForm"
                    class="register-form"
                    :model="form"
                    :rules="registerRules"
                    size="mini"
                >
                    <el-form-item prop="username">
                        <el-input
                            v-model.trim="form.username"
                            auto-complete="off"
                            placeholder="请输入用户名"
                            style="margin-top: 20px"
                            type="text"
                            prefix-icon="el-icon-user"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input
                            v-model.trim="form.password"
                            autocomplete="new-password"
                            placeholder="设置密码"
                            type="password"
                            prefix-icon="el-icon-user"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item prop="key">
                        <el-input
                            v-model.trim="form.key"
                            autocomplete="off"
                            maxlength="12"
                            placeholder="请输入密保关键字"
                            show-word-limit
                            type="text"
                            prefix-icon="el-icon-s-promotion"
                        >
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button
                            class="register-btn"
                            type="primary"
                            @click.native.prevent="handleReister"
                            >注册</el-button
                        >
                        <router-link to="/Login">
                            <div style="margin-top: 20px">登录</div>
                        </router-link>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script src="./init.js"></script>

<style lang="scss" scoped>
  .register-container {
    height: 100vh;
    background: url('@/assets/images/Login/background.jpg') center center fixed no-repeat;
    background-size: cover;

    .title {
      font-size: 54px;
      font-weight: 500;
      color: rgba(14, 18, 26, 1);
    }

    .title-tips {
      margin-top: 29px;
      font-size: 26px;
      font-weight: 400;
      color: rgba(14, 18, 26, 1);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .register-btn {
      display: inherit;
      width: 220px;
      height: 60px;
      margin-top: 5px;
      border: 0;

      &:hover {
        opacity: 0.9;
      }
    }

    .register-form {
      position: relative;
      max-width: 100%;
      margin: calc((100vh - 499px) / 2) 10% 10%;
      overflow: hidden;

      .forget-password {
        width: 100%;
        margin-top: 40px;
        text-align: left;

        .forget-password {
          width: 129px;
          height: 19px;
          font-size: 20px;
          font-weight: 400;
          color: rgba(92, 102, 240, 1);
        }
      }

      .per-code {
        width: 100px;
        height: 36px;
        font-size: 20px;
        line-height: 36px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: #bbc1ce;
      }

      .phone-code {
        width: 120px;
        height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 3px;
      }
    }

    .tips {
      margin-bottom: 10px;
      font-size: 14px;
      color: #fff;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .title-container {
      position: relative;

      .title {
        margin: 0 auto 40px auto;
        font-size: 34px;
        font-weight: bold;
        color: #409eff;
        text-align: center;
      }
    }

    .svg-container {
      position: absolute;
      top: 14px;
      left: 15px;
      z-index: 999;
      font-size: 16px;
      color: #d7dee3;
      cursor: pointer;
      user-select: none;
    }

    .show-pwd {
      position: absolute;
      top: 14px;
      right: 25px;
      font-size: 16px;
      color: #606266;
      cursor: pointer;
      user-select: none;
    }

    ::v-deep {
      .el-form-item {
        padding-right: 0;
        margin: 20px 0;
        color: #454545;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 2px;

        &__content {
          min-height: 32px;
          line-height: 32px;
        }

        &__error {
          position: absolute;
          top: 100%;
          left: 18px;
          font-size: 12px;
          line-height: 18px;
          color: #f34d37;
        }
      }

      .el-input {
        box-sizing: border-box;

        .el-input__count {
          .el-input__count-inner {
            background: transparent;
          }
        }

        .el-input__prefix {
          left: 15px;
          line-height: 56px;

          .svg-inline--fa {
            width: 20px;
          }
        }

        input {
          height: 58px;
          padding-left: 45px;
          font-size: 14px;
          line-height: 58px;
          color: #606266;
          background: #f6f4fc;
          border: 0;
          caret-color: #606266;
        }
      }
    }
  }
</style>
