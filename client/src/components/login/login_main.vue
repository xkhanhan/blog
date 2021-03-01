
<template>
  <div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <img :style="{ width: '100px' }" src="@/assets/logo.png" alt="" />
        <p :style="{ color: '#fff' }">个人博客登陆页面</p>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'Admin_name',
            {
              rules: [{ required: true, message: '请输入用户名!' }],
            },
          ]"
          placeholder="用户名"
          autocomplete="off"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'Admin_pass',
            {
              rules: [{ required: true, message: '请输入密码!' }],
            },
          ]"
          type="password"
          placeholder="密码"
          autocomplete="off"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
 

<script>
import api from "@/api/api";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const This = this;
      this.form.validateFields((err, values) => {
        if (err) {
          return;
        } else {
          api.login(values).then((data) => {
            if (data.code) {
              This.$message.success(data.message).then(()=>{
                    This.$router.push({name : 'my'})
              },1);
            } else {
              This.$message.error(data.message);
            }
          });
        }
      });
    },
  },
};
</script>

<style>
.login-form {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 5px;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>