<template>
  <div>
    <div class="logo">
      <img src="../../assets/logo1.jpg" width="250px" height="200px"/>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="mobile"
          name="mobile"
          label="手机号"
          placeholder="手机号"
          :rules="[{ pattern, message: '请填写正确的手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button square block type="info" native-type="submit"
            >点击登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form, Field, Button, Toast } from "vant";
import { mapMutations } from "vuex";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
export default {
  data() {
    return {
      mobile: "",
      password: "",
      pattern: /^1[3-9]\d{9}$/,
    };
  },
  methods: {
        ...mapMutations("global", ["isShowFooter"]),
    onSubmit(values) {
      console.log(values)
      this.$http.post("http://127.0.0.1:2004/backend/login", values)
        .then((ret) => {
          console.log(ret)
          if (ret.error_code == 0) {
              Toast.success("登录成功！");
              // 跳转
              // 判断是否有回调地址
              if (this.$route.query.callback) {
                  this.$router.push(this.$route.query.callback);
              } else {
                  this.$router.push("/center");
              }
          } else {
              Toast.fail("登录失败！");
          }
      });
    },
  },
   created() {
       this.isShowFooter(false)
   },
   beforeDestroy() {
       this.isShowFooter(true)
   }
 
};
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 150px;
  margin-bottom: 100px;
  text-align: center;
}
</style>
