<template>

  <div>
    <ul class="photodata">

        <li v-for="(photo,index) in photolist" :key="photo.index">
          <router-link :to="'/photodetail/'+photo.index">
          <img :src="photo.src" alt="">
          </router-link>
        </li>


    </ul>

  </div>

</template>


<script>
import axios from 'axios';
  export default{
      data(){
          return{
              photolist:[]
          }
      },
    methods:{

    },
    created(){
          axios.get('/static/data/photodata.json').then(res=>{
              this.photolist=res.data.photoData;
              console.log(res);
          })
    }

  }
</script>

<style scoped>
  .photodata{

  }
  .photodata li{
    width: 49%;
    float: left;
    display: block;
    border:1px solid #fff;
  }

</style>
