<template>
    <div>
        <van-tabbar v-model="active" @change="choose" active-color="#ee0a24" inactive-color="#000">
            <van-tabbar-item>
                <van-icon class-prefix="iconfont icon-shouye" slot="icon" size="1.5rem"></van-icon>
                <span>首页</span>
            </van-tabbar-item>
            <van-tabbar-item>
                <van-icon class-prefix="iconfont icon-wode" slot="icon" size="1.5rem"></van-icon>
                <span>我的</span>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabbarItem, Icon } from 'vant';
import "@/assets/font/iconfont.css"
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon)
export default {
     data() {
        return {
            active: 0,
            urls: ["/homePage", "/center"]
        }
    },
    methods: {
        choose(index) {
            // console.log(index)
            this.$router.push(this.urls[index])
        }
    },
    created() {
        // console.log(this.$route.path)
        this.active = this.urls.indexOf(this.$route.path)
    }
}
</script>