<template>
  <div>
    <ul>
      <li v-for="item in MusicList" :key="item.id" class="music">
        <router-link :to="'/musicdetail/'+item.id">
          <img :src="item.bg" alt="">
        </router-link>

      </li>
    </ul>
    <!--<ul class="list">-->
      <!--<h1>摇滚榜</h1>-->
      <!--<li class="Musiclist" v-for="music in MusicList">-->
        <!--<div>{{music.rank}}{{music.title}} {{music.language}} {{music.style}}</div>-->
        <!--<div>热度{{music.hot}}</div>-->
        <!--<div> 发行时间{{music.publishtime}}</div>-->
        <!--<div>{{music.ting_uid}}</div>-->
      <!--</li>-->
    <!--</ul>-->

  </div>

</template>


<script>
  import axios from 'axios';


  export default{
      data(){
          return{
              MusicList:[],
          };
      },
    methods:{
          getMusicData(){
              axios.get('/static/data/musiclist.json').then(res=>{
                  this.MusicList=res.data.albums;
              })
          }
//      getMusicData(){
//        axios.get(`${API_PROXY}http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&callback=&from=webapp_music&method=baidu.ting.billboard.billList&type=11&size=10&offset=0`)
//          .then(res=>{
//            let list=res.data.song_list;
//            console.log(res);
//            this.MusicList=this.MusicList.concat(list);
//          });
//      }


    },
    created(){
          this.getMusicData();
    }


  }
</script>

<style scoped>
  .music{
    width: 50%;
    float: left;
  }
  .music img{
    width: 100%;
  }


</style>
