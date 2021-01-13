<template>
        <div class="div_boss">
            <div class="box">首页</div>
            <div>
                <van-card
                class="box1"
                >
                    <template #thumb>
                        <div class="imgBox_img">
                            <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u9.png" width="80px" height="80px">
                        </div>
                    </template>

                    <template #title>
                        <span class="span_mei">美滋滋汉堡</span>
                    </template>

                    <template #desc>
                        <div class="box2">
                            111 2222 3333
                        </div>
                    </template>

                    <template #num>
                        <div class="box3">
                            <span class="span1">营业中</span>
                            <span class="span2" v-show="flays" @click="changess">详情</span>
                            
                        </div>
                    </template>
                </van-card>
            </div>
            <div class="span_divs" v-show="flay">
                <div class="top">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u140.png" alt="">
                    <span>
                        8:30 - 20:30
                    </span>
                </div>
                <div class="bottom">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u142.png" alt="">
                    <span>
                        北京市朝阳区万悦城A座5楼
                    </span>
                </div>
                <div class="shou" @click="hide">
                    收起
                </div>
            </div>
            <div class="box4"></div>
            <div class="four_all">
                <div class="one" @click="changes">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u27.png" alt="">
                    <span>
                        点餐
                    </span>
                </div>
                <div class="two" @click="youhuijuan">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u19.png" alt="">
                    <span>
                        优惠券
                    </span>
                </div>
                <!-- <div class="three" @click="paidui">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u31.png" alt="">
                    <span>
                        排队取号
                    </span>
                </div>
                <div class="four" @click="yuyue">
                    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u23.png" alt="">
                    <span>
                        餐桌预约
                    </span>
                </div> -->
            </div>
            <div class="box4"></div>
            <div class="box5">本店菜品</div>
        <div class="boss">
            <div>
                <van-sidebar v-model="activeKey"> 
                <van-sidebar-item v-for="(item,index) in text" :key="index" :title="item.msg"  @click="changesss(index)"/>
                <!-- <van-sidebar-item title="折扣" />
                <van-sidebar-item title="热销榜" />
                <van-sidebar-item title="汉堡包" />
                <van-sidebar-item title="鸡肉卷" />
                <van-sidebar-item title="饮品" />
                <van-sidebar-item title="双人套餐" />
                <van-sidebar-item title="单人套餐" /> -->
                </van-sidebar>
            </div>
            <div class="card_bot">
                <van-card
                class="card_botBox"
                v-for="(data,index) in text_data"
                 :key="index"
                >
                    <template #thumb>
                        <div imgBox1>
                            <img :src="data.img" width="100%">
                        <!-- https://axhub.im/pro/221031c5a692ef70/images/%E9%A6%96%E9%A1%B5/u35.png -->
                        </div>
                    </template>

                    <template #title>
                        <div class="xiang">
                            {{data.name}}
                        </div>
                    </template>

                    <template #desc> 
                        <div class="span_div">
                            <span class="span_one">香辣</span>
                        </div>
                    </template>

                    <template #price>
                        <div class="box_price">
                            ￥<span>{{data.zhe}}</span>
                        </div>
                    </template>

                    <template #origin-price>
                        <div>
                            {{data.price}}
                        </div>
                    </template>

                    <template #price-top>
                        <div>
                            月售：<span>{{data.buy}}</span>
                        </div>
                    </template>

                    <template #bottom>
                        <div class="xian">
                                <span>{{data | getdata}}</span> 折
                        </div>
                    </template>
                </van-card>
            </div>
        </div>
            
        </div>
</template>
        
<script>

import Vue from 'vue';
import { Card, Sidebar, SidebarItem  } from 'vant';
import uri from "@/config/uri"

Vue.use(Card);
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
    data() {
        return {
            activeKey: 0,
            flay:false,
            flays:true,
            text:[],
            text_data: [],
            num:0,
        };
  },
  methods:{
       fun(){
            this.$http.get(uri.getNow).then(ret => {
            this.text = ret
            // console.log(this.text);
            this.text_data = this.text[this.num].data
        })
        },
      changes(){
        this.$router.push("./buy")
      },
      changess(){
        this.flay = true
        this.flays = false
      },
      hide(){
        this.flay = false
        this.flays = true
      },
      changesss(index){
          this.num = index
          this.fun()
      },
      youhuijuan(){
          this.$router.push("/coupon")
      },
      yuyue(){

      },
      paidui(){

      }
  },
  filters:{
      getdata(data){
          if(!data.zhe){
              return 10
          } else{

            return parseInt((data.zhe/data.price)*10)
          }
      }
  },
  created(){
    //   this.text = this.$store.state.global.datas
    //   console.log(this.$store.state.global.datas);
        this.$store.commit("global/isShowFooter",true)

        this.fun()

        // this.text_data = this.text[1].data
  },

}
</script>
        
<style lang="scss" scoped>

.box{
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 0.5px solid #dfdfdf;
    margin-bottom: 15px;
    display: fixed;
    top: 0;
}
.box1{
    background: white;
    height: 78px;
    font-size: 20px;
}
.box2{
    margin: 0;
    margin-top: 20px;
    position: relative;
    color: #787878;
}
.span1{
    display: block;
    font-size: 12px;
    width: 59px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    background: #3BB19C;
    color: white;
    position: absolute;
    top: 0;
    right: 2px;
}
.span2{
    font-size: 18px;
    width: 47px;
    height: 17px;
    color: #666666;
    // margin-right: 10px;
    // margin-bottom: 10px;
    position: absolute;
    top: 50px;
    right: 2px;
}
.span_divs{
    width: 100%;
    height: 86px;
    position: absolute;
    top: 170px;
    background: white;
    font-size: 14px;
    line-height: 20px;
    border-top: 1px solid #F2F2F2;
}
.top{
    padding:5px 20px;
    height: 20px;
}
.top > span{
    margin-left: 5px;
    color: #9A9A9A;

}
.bottom{
    padding:5px 20px;
    height: 20px;

}
.bottom > span{
    margin-left: 5px;
    color: #9A9A9A;
}

.shou{
    font-size: 16px;
    color: #9A9A9A;
    float: right;
    margin-right: 20px;
    margin-top: -10px;
}
.span_divs  img{
    width: 20px;
    height: 20px;
}

.box4{
    width: 100%;
    height: 15px;
    background: #F5F5F5;
    margin-top: 30px;
}
.box5{
    height: 37px;
    font-size: 15px;
    line-height: 37px;
    padding-left: 20px;
    border-bottom: 1px solid #dfdfdf;
}
.boss{
    position: relative;
    display: flex;
}
.card_bot{
    position: absolute;
    top: 0;
    left: 80px;
    width: 250px;
}
.card_botBox{
    background: white;
}
.imgBox1{
    width: 135px;
    height: 135px;
    background: white;
}
.xiang{
    font-size: 16px;
}
.span_one{
    font-size: 12px;
    padding: 5px 10px;
    background: #F3F5F9;
    color: #666666;
}
.span_div{
    margin: 5px 0px;

}
.box_price{
    font-size: 14px;
    color: #FF5A5A;

}
.box_price > span{
    font-size: 18px;
}
.xian{
    font-size: 12px;
    color: #FF5A5A;

}
.span_mei{
    color: #000000;
    font-size: 25px;
}
.imgBox_img{
    width: 80px;
    height: 80px;
    background: #FFCC99;
    border-radius: 45px;
}

.van-card__content{
    position: relative;
}
.four_all{
    width: 100%;
    height: 135px;
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    padding: 10px 10px;
}
.four_all > div{
    width: 45%;
    height: 95%;
    margin: 8px 8px;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
.four_all > div > img{
    width: 30px;
    height: 30px;
}

.one{
    background: #FF9381;
}
.two{
    background: #B3C4FE;
}
.three{
    background: #8581FF;
}
.four{
    background: #FFB180;
}
</style>>
        
