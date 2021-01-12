<template>
  <div id="app">
    <Footer v-show="isShow"></Footer>
    <router-view/>
  </div>
</template>
<script>
//底部导航组件
import Footer from '@/components/Footer.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    Footer
  },
  created() {

  },
  computed: {
    isShow() {
      return this.$store.state.global.isShow
    }
  }
}
</script>

