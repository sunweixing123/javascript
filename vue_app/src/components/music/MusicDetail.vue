<template>
  <aplayer autoplay :music="MusicList" :showlrc="true" :mutex="true" v-if="loadsuccess" id="autoplayer"></aplayer>
</template>

<script>
  import Aplayer from 'vue-aplayer'
  import axios from 'axios';
  export default{
      data(){
          return{
            MusicList:[],
            loadsuccess:false,
          }
      },
    created(){
        axios.get('/static/data/musicdata.json').then(res=>{
            res.data.musicData.forEach(element=>{
                this.MusicList.push(
                  {
                      title:element.title,
                    author:element.author,
                    url:element.src,
                    pic:element.musicImgSrc,
                    lrc:'/static/'+element.lrc
                  }
                );
                this.loadsuccess=true;
            });
//            console.log(res);
        })
    },
    components:{
        Aplayer,
    }



  }

</script>
<style>
  #autoplayer{
    margin-top: 1rem;
  }

</style>




