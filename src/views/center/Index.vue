<template>
    <div class="center-view">
        <div
            class="avatar"
            data-enter-time="1608645908"
            data-click-fun="track_f_737069"
        >
            <img
                src="../../assets/icon.png"
                class="avator-icon"
            />
            <div class="nick-name">
                爱笑的娃娃
            </div>
        </div>
        <!---->
        <div
            class="margin-set my-card"
            data-enter-time="1608645908"
            data-click-fun="track_f_299313"
        >
            
            <span class="label" @click="indent" >我的订单</span>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
        <div
            class="margin-set my-card"
            data-enter-time="1608645908"
            data-click-fun="track_f_433177"
        >
            
            <span class="label" @click="order">我的预约</span>
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
        <div
            class="margin-set my-balance"
            data-enter-time="1608645908"
            data-click-fun="track_f_475218"
        >
           
            <span class="label" @click="coupon">我的优惠券</span>
            <span class="value"
                ><span class="price-decimal price-fmt"
                    >
                    <span class="interge" style="font-size: 15px;">3</span>
                    <span style="display: none;">.</span>
                    <span class="decimal" style="font-size: 10px;"></span>
                    <span style="display: none;">.</span>
                    <span
                        class="decimal"
                        style="font-size: 10px; display: none;"
                        >00</span
                    >
                </span></span
            >
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                alt=""
                class="arrow"
            />
        </div>
        
    </div>
</template>

<script>
export default {
  methods:{
    indent(){
      this.$router.push("/indent");
    },
    order(){
        this.$router.push("/order");
    },
    coupon(){
        this.$router.push("/coupon");
    }
  }
    
};
</script>

<style lang="scss" scoped>
.center-view {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
}
.center-view .avatar {
    text-align: center;
    height: 135px;
    padding-top: 64px;
    background-color: #464C5B;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    margin-bottom: 40px;
}
.center-view .avatar .avator-icon {
    width: 63px;
    height: 63px;
    border-radius: 35px;
    border: 2px solid #fff;
    margin-bottom: 10px;
}
.center-view .avatar .nick-name {
    font-size: 16px;
}
.center-view .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .my-order-tab li {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
}
.center-view .my-card {
    position: relative;
}
.center-view .margin-set {
    background: #fff;
    padding: 0 15px;
    height: 49px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.center-view .margin-set .label {
    margin-left: 15px;
    color: #191a1b;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.center-view .margin-set .arrow {
    text-align: right;
    width: 6px;
    height: 10px;
}
.center-view .my-balance .value,
.center-view .my-card .value {
    text-align: right;
    color: #797d82;
    padding-right: 14px;
}
</style>
