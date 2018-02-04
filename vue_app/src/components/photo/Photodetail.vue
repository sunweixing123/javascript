<template>
  <div>
    <ul>
      <li v-for="photo in photolist">
        <img src="" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default{
      data(){
          return{
            photolist:[],
            nowindex:0,
          }
      },
    created(){
      axios.get('/static/data/photodata.json').then(res=>{
        this.photolist=res.data.photoData;
      })
    }
  }
</script>

<style>
  div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
  }

</style>
