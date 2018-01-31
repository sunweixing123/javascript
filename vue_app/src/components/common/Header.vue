<template>
 <div class="header" :style="{background: bgcolor}">
   <span class="home" :style="{background: bgcolor}" @click="$emit('home')">首页</span>
   <h2 class="title">
      <slot name="title">默认值</slot>
   </h2>
 </div>
</template>

<script>
  export default{
    props: ['bgcolor']
  }

</script>

<style scoped>
  .header{
    height: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    color: #fff;
    line-height: 1rem;
  }
  .title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .home{
    color:#fff;
    margin-left: .1rem;
  }
</style>
