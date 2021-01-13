<template>
    <div>
        <div class="box"> 
            <span @click="back">&lt;</span>
            <div>点餐</div>
            </div>
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

                    <template #footer>
                            <div class="footer">
                                <div class="footer_top" @click="gouwuche(index,data.id)">
                                    加入购物车
                                </div>
                            </div>
                    </template>


                </van-card>
            </div>
        </div>
        <div class="jiao">
            <div class="yuan active">
                <img src="https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u151.png" alt="">
            </div>
            <div class="center active">
                <span>
                    请添加菜品
                </span>
            </div>
            <div class="right active" @click="go">
                去下单
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
            text:[],
            text_data: [],
            num:0,
            totlo:0,
            arr:[],
            str:[],
            datass:[],
        };
    },
    created(){
        this.fun()
        this.$store.commit('global/isShowFooter',false)


        this.str.forEach(ret => {
            this.arr.push(ret.id)
        })
        this.str = JSON.parse(window.localStorage.getItem('data')) ? JSON.parse(window.localStorage.getItem('data')) : []
        // console.log(this.$store.state.global.datas);
         
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
    methods:{
        // fu(){
        //     // console.log(this.$store.state.global.datas)
        //     let b = 0
        //     this.arr.forEach(item => {
        //         this.$http.get(uri.getNow).then(ret => {
        //             // console.log(ret)
        //             ret.forEach(ress => {
        //                 ress.data.forEach(el => {
        //                     // console.log(el);
        //                     // console.log(item);
        //                     if(el.id == item){
                                
        //                         this.all += el.num * el.zhe
                                
        //                     }else{
                               
        //                     }
        //                 })
        //             })
        //         })
        //     })
        //     this.all = b
        // },

         fun(){
            this.$http.get(uri.getNow).then(ret => {
                this.text = ret
                // console.log(this.text);
                this.text_data = this.text[this.num].data
            })
        },
        changesss(index){
          this.num = index
          this.fun()
      },
      back(){
          this.$router.push("/")

      },
      gouwuche(index,id){
        //   console.log(id);
            if(!this.arr.includes(id)){

                this.arr.push(id)
                this.str.push(this.text_data[index])
                

                console.log(this.str);
            window.localStorage.setItem("data",JSON.stringify(this.str))
            }else{
                this.str.forEach(el => {
                    if(el.id == id){
                        el.num++
                        
             window.localStorage.setItem("data",JSON.stringify(this.str))

                    }
                })
            }
      },
    //   add(index,id){
    //         this.datass = this.$store.state.global.datas
    //         console.log(this.datass);


    //         this.text_data[index].num++
    //         if(!this.arr.includes(id)) {
    //             this.arr.push(this.text_data[index].id)
    //         }  

    //         this.fu()
    //         // fun()
    //         // console.log(this.arr);
            
    //   },
    //   jian(index,id){
            
    //         this.text_data[index].num--
    //         let a = 0
    //         if(this.arr.includes(id)){
    //             this.arr.forEach(el => {
    //                 if(el == id){
    //                     // console.log("duile");
    //                     if(this.text_data[index].num <= 0){
    //                         // console.log(a);
    //                         this.text_data[index].num = 0
    //                             this.arr.splice(a,1)

    //                     }
    //                     a++

    //                 }else{
    //                     // console.log("cuole");
    //                 }
    //             }) 
    //         }
    //         // console.log(this.arr);
    //     },
        go(){
            this.$router.push("/shopcar")
        }
        // fun(){
        //     if(this.arr.length > 0 ){
        //         this.asd = "yuan " + "active"
        //         this.center = "center " + "active"
        //         this.right = "right" + "active"
        //     }else{

        //         this.asd = "yuan"
        //         this.center = "center"
        //         this.right = "right"
        //     }
        // }
    },
    //     beforeDestroy(){

    //     this.$store.commit('global/isShowFooter',false)
    // },

}
</script>




<style lang="scss" scoped>
.footer_top{
    position: absolute;
    top: 60px;
    left: 200px;
    width: 80px;
    height: 30px;
    // background: red;
    background: orange;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 13px;
    border-radius: 10px;
}
.footer_top > span{
    width: 20px;
    height: 20px;
    background: #D7D7D7;
    color: black;
    border-radius: 90px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer_top > input{
    width: 20px;
    height: 20px;
    outline: none;
    border: none;
    color: 20px;
}

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
.box > span{
    float: left;
    font-size: 30px;
    position: absolute;
    top: 10px;
    left: 20px;
}
.boss{
    position: relative;
    display: flex;
}
.card_bot{
    position: absolute;
    top: 0;
    left: 80px;
    width: 270px;
    padding-bottom: 100px;
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
}
.imgBox_img{
    width: 80px;
    height: 80px;
    background: #FFCC99;
    border-radius: 45px;
}
.footer > span{
    width: 20px;
    height: 20px;
    background: #FF9900; 
    border-radius: 45px;
    position: absolute; 
    top: 80px;
    right: 0px;
    color: white;  
    text-align: center;
    line-height: 20px;
}
.van-card__content{
    position: relative;
}
.four_all{
    width: 100%;
    height: 235px;
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    padding: 15px 10px;
}

.jiao{
    width: 290px;
    height: 53px;
    position: fixed;
    bottom: 30px;
    margin-left: 50px;
    display: flex;

}
.yuan{
    width: 53px;
    height: 53px;
    border-radius: 45px;
    background: #BCBCBC;
    display: flex;
    justify-content: center;
    align-items: center;

}
.yuan.active{
    background: #333333;
}
.yuan > img{
    width: 33px;
    height: 33px;
}
.center{
    width: 202px;
    height: 53px;
    background: #E4E4E4;
    position: absolute;
    z-index: -99;
    margin-left: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.center.active{
    background: #666666;

}
.center > span{
    font-size: 20px;
    color: white;
}
.right{
    width: 100px;
    height: 53px;
    background: #BCBCBC;
    margin-left: 130px;
    border-radius: 0 45px 45px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;

}
.right.active{
    background: #FF0000;

}
</style>