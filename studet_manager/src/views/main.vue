<template>
  <p>
    {{content}}
  </p>
</template>

<script>
  export default {
    data(){
      return {
        content: '欢迎使用检测系统'
      }
    },
    mounted(){
      console.log('已经登陆...');
    }
  }

</script>

<style scoped>

</style>
