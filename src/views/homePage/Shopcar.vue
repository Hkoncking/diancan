<template>
    <div>
        <van-card title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" class="foodInfo">
            <template #num>
                <p class="num">$15.8</p>
            </template>
            <template #price>
                <p class="price">x10</p>
            </template>
            <template #footer>
                <button class="del">删除</button>
            </template>
        </van-card>
        <div class="discounts">
            <p><span>惠</span>优惠券</p><span>-$15 <em>></em></span>
        </div>
        <div class="total">
            已优惠: <span>$30</span>
            小计: <span>$28</span>  
        </div>
        <div class="personNum">
            <p>就餐人数 <span @click="choseNum">{{personnum}}人<b>></b></span></p>
            <ul  v-show="showlist">
                <p>请选择就餐人数</p>
                <li v-for="(item, index) in list" :key= "index" @click="getperson(item)">{{item}}</li>
            </ul>
        </div>
        <div class="atention">
            备注 <input type="text" placeholder="请输入口味,偏好等要求">
        </div>
        <div class="pay">
            <span>应付金额 ￥<b>35</b></span><span>立即支付</span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Card, ShareSheet } from 'vant';

Vue.use(Card);
Vue.use(ShareSheet);
//vuex映射
import { mapMutations } from "vuex";
export default {
   data() {
       return {
           personnum:"1",
           list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,'10人以上'],
           showlist: false
       }
   },
   methods: {
        ...mapMutations("global", ["setFooter"]),
       choseNum() {
           this.showlist = true
       },
       getperson(num) {
           this.personnum = num,
           this.showlist = false
       },
   },
   created() {
       this.setFooter(false)
   },
   beforeDestroy() {
       this.setFooter(true)
   }
}
</script>

<style scoped>
.foodInfo {
    margin: 5px 0;
    background-color: #FFFFFF;
}

.num {
   font-size: 20px;
   color: red;
   margin-top: 6px;
}
.price {
    margin-top: 20px;
}

.del {
    outline: none;
    border: none;
    color: black;
    background-color: orange;
    border-radius: 5px;
}

.discounts {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    font-size: 20px;
    border-top: 2px solid #F5F5F5;
}

.discounts > p > span {
    background-color: orangered;
    padding: 3px;
    color: white;
    border-radius: 3px;
    margin-right: 10px;
}

.discounts > span {
    font-size: 17px;
    color: darkgray;
}

.total {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    align-items: center;
    font-size: 20px;
    color: grey;
    border-bottom: 2px solid #F5F5F5;
}
.total > span {
    margin-right: 10px;
    margin-left: 3px;
    color: red;
}
.total > span:nth-of-type(2){
    font-size: 24px;
}
.personNum {
    font-size: 20px;
    color: #666666;
}
.personNum > p {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
}
.personNum > p > span > b {
    color:silver;
    margin-left: 5px;
}
.personNum > ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    position: fixed;
    z-index: 999;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
}
.personNum > ul > li {
    width: 100%;
    padding: 10px 0;
    border-top: 2px solid #F5F5F5;
    text-align: center;
    font-size: 16px;
    color: grey;
}
.atention {
    color: #666666;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    border-top: 10px solid #F5F5F5;
}
.atention > input {
    outline: none;
    border: none;
    margin-left: 36px;
    font-size: 20px;
}
.pay {
    width: 100%;
    position: fixed;
    bottom: 20px;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: center;
}
.pay > span:nth-of-type(1){
    background-color: #666666;
    border-radius: 30px 0 0 30px;
    padding: 10px 26px;
}
.pay > span:nth-of-type(2){
    border-radius:  0 30px 30px 0;
    background-color: #FF0000;
    padding: 10px 26px;
}
</style>