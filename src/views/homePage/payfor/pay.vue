<template>
    <div>
        <div class="img">
            <img src='@/assets/微信图片_20210113095506.jpg' alt="">
        </div>
    </div>
</template>
<script>

import uri from '@/config/uri.js'
export default {
    data(){
        return{
            img: ""
        }
    },
    created() {
        this.$http.post('https://m.28sjw.com/order/getQR.php',{_s: '美滋滋汉堡', _f: 0.01, _t: 1}).then(res => {
            this.img = res.qr_code
           
        })
    }
}
</script>
<style scoped>
    .img {
        width: 100%;
        height: 100%;
        
    }
    .img > img {
        width: 100%;
        height: 100%;
    }
</style>