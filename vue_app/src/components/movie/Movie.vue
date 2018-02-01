<template>

  <div>
    <ul class="list">
      <li v-for="movie in movieList" class="movie" :key="movie.id" @click="getDetail(movie.id)">
        <div class="movie-img">
          <img :src="movie.img" alt="">
        </div>
        <div class="movie-info">
          <p class="movie-name">{{ movie.nm }}</p>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isLoading">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
    <div class="tip" v-show="isEnd">
      <h2>数据到底了！</h2>
    </div>
  </div>

</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        movieList: [],
        isLoading: true,
        isEnd: false
      };
    },
    methods: {


      getMovieData(){
        axios
          .get(
            API_PROXY+ `http://m.maoyan.com/movie/list.json?type=hot&offset=${this.movieList.length}&limit=10`
          )
          .then(res=>{
            let list = res.data.data.movies;
            if(list.length<10){
              this.isEnd=true;
            }
            this.movieList=this.movieList.concat(list);
            this.isLoading=false;
          }).catch(res=>{
          alert('获取数据失败啦！');
        });
      },
      getDetail(movieId) {
        this.$router.push(`/moviedetail/${movieId}`);
      }
    },
    created() {
      this.getMovieData();
    },
    mounted() {
      window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        console.log(scrollTop);
        console.log(clientHeight);
        console.log(scrollHeight);
        if (scrollTop + clientHeight == scrollHeight && !this.isEnd) {
          this.isLoading = true;
          setTimeout(() => {
            this.getMovieData();
          }, 1000);
        }
      };
    }
  };
</script>
<style scoped>
  .list {
    margin-bottom: 2rem;
    padding: 0 0.1rem;
  }
  .movie {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 0.1rem;
  }
  .movie-img {
    flex-grow: 1;
    width: 0;
    margin-right: 0.1rem;
  }
  .movie-info {
    flex-grow: 2;
    width: 0;
  }

  .movie-name {
    font-weight: bolder;
  }


  .loading {
    text-align: center;
    position: fixed;
    bottom: 1rem;
    width: 100%;
  }



  .tip {
    text-align: center;
    margin-bottom: 1rem;
  }
</style>

