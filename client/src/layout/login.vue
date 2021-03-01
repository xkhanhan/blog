<template>
    <a-row type="flex" justify="center" class="login_content">
        <a-col :xs="18" :md="10" :xl="8">
            <login-form />
        </a-col>
    </a-row>
</template>

<script>
import loginForm from "../components/login/login_main";
export default {
  name: "login",
  components: {
    loginForm,
  },
};
</script>

<style>
.login_content{
    height: 100%;
    align-items: center;
    background-image: url('../assets/image/login_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>