<template>

  <ul class="footer" :style="{background: bgcolor}">
    <li><router-link to="/">电影</router-link></li>
    <li><router-link to="/music">音乐</router-link></li>
    <li><router-link to="/book">书籍</router-link></li>
    <li><router-link to="/photo">图片</router-link></li>
  </ul>
</template>

<script>
  export default{
    props:['bgcolor']
  }
</script>


<style scoped>
.footer{
  height: 1rem;
  line-height: 1rem;
  bottom: 0;
  width: 100%;
  position: fixed;
  display: flex;
}
.footer li {
  flex-grow: 1;
  text-align: center;
}

.footer li a {
  color: #ccc;
}

.footer li a.router-link-exact-active {
  color: #fff;
}
</style>
