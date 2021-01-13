<template>
  <div class="box">
   
      <van-nav-bar
        title="我的优惠券"
        color="black"
        left-arrow
        @click-left="clickleft"
      >
        <template #right>
          <van-icon name="question-o" size="20"  />
        </template>
      </van-nav-bar>
    
    <van-tabs
      v-model="activeName"
      :animated="true"
      duration="0.8"
      line-width="80px"
      color="#1ABC9C"
    >
      <van-tab title="未使用" name="a">


        <div class="box-indent" v-for="(item,index) in allyouhuiquan" :key="index" @click="clickss(item.manjian,item.id)">
          <div class="left">
            <h3>￥{{item.manjian}}元</h3>
            <p>满{{item.price}}元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
          </div>
        </div>
 
       </van-tab>
      <van-tab title="已过期" name="c">
        <div class="box-indent">
          <div class="left" style="background:#CCCCCC">
            <h3>￥10元</h3>
            <p>满100元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
            <img
              src="../../assets/guoqi2.png"
              width="58px"
              height="58px"
              alt=""
            />
          </div>
        </div>
        <div class="box-indent">
          <div class="left" style="background:#CCCCCC">
            <h3>￥10元</h3>
            <p>满100元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
            <img
              src="../../assets/guoqi2.png"
              width="58px"
              height="58px"
              alt=""
            />
          </div>
        </div>
        <div class="box-indent">
          <div class="left" style="background:#CCCCCC">
            <h3>￥10元</h3>
            <p>满100元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
            <img
              src="../../assets/guoqi2.png"
              width="58px"
              height="58px"
              alt=""
            />
          </div>
        </div>
        <div class="box-indent">
          <div class="left" style="background:#CCCCCC">
            <h3>￥10元</h3>
            <p>满100元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
            <img
              src="../../assets/guoqi2.png"
              width="58px"
              height="58px"
              alt=""
            />
          </div>
        </div>
        <div class="box-indent">
          <div class="left" style="background:#CCCCCC">
            <h3>￥10元</h3>
            <p>满100元可用</p>
          </div>
          <div class="right">
            <span>通用</span>
            <p>有效期至:2012-12-12</p>
            <img
              src="../../assets/guoqi2.png"
              width="58px"
              height="58px"
              alt=""
            />
          </div></div
      ></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs, NavBar, Toast, Icon } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Icon);
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      activeName: "a",
      allyouhuiquan:[],
    };
  },
  methods: {
        ...mapMutations("global", ["isShowFooter"]),

    clickleft() {
      this.$router.go(-1)
    },
    onClickRight() {

    },
    clickss(manjian,id){

      // console.log(manjian);
      // console.log(id);

      this.$store.state.global.clicks = id
      this.$store.state.global.manjians = manjian

      // console.log(this.$store.state.global.clicks);
      this.$router.push('/shopcar')
    }
  },
  created() {
       this.isShowFooter(false)
      // console.log(this.$route);
      this.$http.get('http://127.0.0.1:3000').then(res => {

        this.allyouhuiquan = res[0].fullDec
        this.$store.state.global.arrs = res[0].fullDec
        // console.log(this.$store.state.global.arrs);

        // console.log(this.allyouhuiquan);
      })
  },
};
</script>
<style lang="scss" scoped>
.box {
  background-color: #f9f9f9;
  height: 762px;
}
.box-indent {
  width: 100%;
  background-color: #f9f9f9;
  display: flex;
  padding: 10px 20px;
  color: white;
  box-sizing: border-box;
}
.left {
  width: 119px;
  height: 100px;
  float: left;
  text-align: center;
  background-color: #1abc9c;
}

.right {
  width: 220px;
  height: 100px;
  background-color: white;
  float: right;
  padding-top: 25px;
  box-sizing: border-box;
  color: #999999;
  padding-left: 20px;
  position: relative;
}
.right > img {
  position: absolute;
  left: 150px;
  top: 15px;
}
</style>
