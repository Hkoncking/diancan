<template>
  <div>
    <van-nav-bar title="我的订单"  left-arrow @click-left="clickleft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <div class="big">
          <div class="box" v-for="(item, index) in food" :key="index">
            <div class="box1"><span>{{item.name}}</span><em>等待付款</em></div>
            <div class="box2"><img :src="item.img" width="77px"
            height="77px"/>
            <img :src="item.img" width="77px"
            height="77px"/> 
            <img :src="item.img" width="77px"
            height="77px"/>
            </div>
            <div class="box3">
              <a>应付金额：<span>￥{{item.price}}元</span></a>
              <div class="cl">
                <span class="qx">取消订单</span>
                <span class="fk">立即付款</span>
                </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="已完成">内容 3</van-tab>
      <van-tab title="已取消">内容 4</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, NavBar, Panel, Button } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Panel);
Vue.use(Button);
import uri from "@/config/uri";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
      food: [],
    };
  },
  methods:{
    clickleft(){
      this.$router.back()
    },
    ...mapMutations("global/",["isShowFooter"])
  },
  created() {
    this.$http.get(uri.getNow).then((ret) => {
      this.food = ret[1].data;
      // console.log(this.food)
    });
    this.isShowFooter(false)
  },
  beforeDestroy(){
    this.isShowFooter(true)
  }
};
</script>
<style lang="scss" scoped>
.big{
  background-color: #F9F9F9;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
}
  .box{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
  }
.box1{
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    height: 30px;
  }
.box1 > em{
  color: rgb(247, 46, 46);
}
.box3{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box3 > a{
  color: #9CA6B0;
  font-size: 16px;
}
.box3 > .cl{
  display: flex;
  align-items: center;
}
.box3 > .cl > .qx{
  border: 1px solid #666666;
  color: #9CA6B0;
  padding: 3px 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box3 > .cl > .fk{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 6px;
  box-sizing: border-box;
  color: #fff;
  background-color: #3BB19C;
  margin-left: 20px;
}
img{
  margin-left: 10px;
}
</style>
