<template>
  <div id="app">
    
    <Footer v-show="$store.state.global.isShows"></Footer>
    <router-view/>
  </div>
</template>
<script>
//底部导航组件
import Footer from '@/components/Footer.vue'
import uri from "@/config/uri"
import { mapMutations } from "vuex"

export default {
  data() {
    return {

    }
  },
  components: {
    Footer
  },
  methods: {
    ...mapMutations("global",['isnow'])
  },
  created() {
    // let a = this.$http.get(uri.getNow).then(ret => { return ret } )
    // this.$store.commit('global/isnow', a )

    // console.log(this.$store.state.global.datas)
    this.$http.get(uri.getNow).then(ret => {
        this.isnow(ret)
      // console.log(ret);
    // console.log(this.$store.state.global.datas)

    })
  },
  computed: {

  }
}
</script>

