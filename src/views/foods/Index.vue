<template>
  <div class="box">
    <van-notice-bar
      color="#3BB19C"
      background="#fff"
      left-icon="info-o"
      class="reserve"
    >
      为了保证您的按时用餐,请及时付款!
    </van-notice-bar>
    <div class="week">
      <div class="day">
        <button></button>
        <ul>
          <li>
            <p>今天</p>
            <span>1-11</span>
          </li>
          <li>
            <p>明天</p>
            <span>1-12</span>
          </li>
          <li>
            <p>后天</p>
            <span>1-13</span>
          </li>
          <li>
            <p>星期四</p>
            <span>1-14</span>
          </li>
        </ul>
        <button></button>
      </div>
      <div class="zzz">
        
        <van-cell :value="date" @click="show = true" >
            <img src="../../assets/imgs/下载.png" width="40px"/>
        </van-cell>
        <van-calendar v-model="show" @confirm="onConfirm" />
      </div>
    </div>
    <div class="people">
      <span>就餐人数</span>
      <p>0人</p>
    </div>
    <div class="nav">
      <div class="leixing">餐桌类型</div>
      <div>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="value in 6"
            :key="value"
            class="a"
            style="flex-basis: 30.3333%;"
          >
            <template #text>
              <div class="abc">
                文字
              </div>
            </template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="nav2">
      <div class="leixing">可预定时间</div>
      <van-grid :column-num="3">
        <van-grid-item
          v-for="value in 6"
          :key="value"
          class="b"
          style="flex-basis: 30.3333%;"
        >
            <template #text>
                <div>5 : 20</div>
            </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="take">立即预定</div>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, NoticeBar, Calendar, Cell } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NoticeBar);
Vue.use(Calendar);
Vue.use(Cell);
export default {
  data() {
    return {
      date: "",
      show: false,
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  },
};
</script>
<style lang="scss" scoped> 
* {
  margin: 0;
  padding: 0;
}
.box {
  background-color: #f5f5f5;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 80px;
  box-sizing: border-box;
}
.reserve {
  background-color: #fff;
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 15px;
  font-size: 16px;
  margin: 0 auto;
}

.week {
  background-color: #fff;
  margin: 15px 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.day {
  display: flex;
  justify-content: center;
  align-items: center;
}
.zzz > img {
  width: 40px;
  height: 40px;
}
.week > .day > ul {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  height: 50px;
}
.week > .day > ul > li {
  margin: 0 15px;
  color: #666666;
  font-size: 16px;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.people {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  color: #666666;
  font-size: 18px;
  background-color: #fff;
  padding: 0 15px;
  box-sizing: border-box;
  height: 50px;
}
.nav {
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
}
.a {
  color: #666666;
  border: 2px solid #b3e1d9;
  border-radius: 10px;
  margin: 5px;
  height: 70px;
}
.leixing {
  font-size: 18px;
  color: #666666;
  padding: 10px 5px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.nav2 {
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px 10px 10px;
  margin-top: 15px;
  box-sizing: border-box;
}
.b {
  color: #666666;
  border: 2px solid #b3e1d9;
  border-radius: 10px;
  margin: 5px;
}
.take {
  width: 60%;
  background-color: #3bb19c;
  color: #f5f5f5;
  height: 50px;
  margin: 0 auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.van-grid-item__text {
  font-size: 16px;
}
.abc {
  font-size: 18px;
  font-weight: 400;
}
</style>
