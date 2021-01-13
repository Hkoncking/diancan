<template>
    <div>我的预约
        <button @click="send">
            发送
        </button>
    </div>
</template>
<script>
export default {
    methods: {
        send() {
            this.$http.post("http://127.0.0.1:3000/indent",{data:1})
        }
    }
}
</script>