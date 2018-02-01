<template>

  <ul class="footer" :style="{background: bgcolor}">
    <li><router-link to="/" @click.native="$emit('change','movie')">电影</router-link></li>
    <li><router-link to="/music" @click.native="$emit('change','music')">音乐</router-link></li>
    <li><router-link to="/book" @click.native="$emit('change','book')">书籍</router-link></li>
    <li><router-link to="/photo" @click.native="$emit('change','photo')">图片</router-link></li>
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
  outline:none;
}

.footer li a.router-link-exact-active {
  color: #fff;
}
</style>
