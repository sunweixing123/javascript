import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Book from '@/components/book/Book'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import MovieDetail from '@/components/movie/MovieDetail'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Movie
  }, {
    path: '/music',
    component: Music,
    beforeEnter(to,from,next){
      from.name === null ? next('/'):next();
    }
  }, {
    path: '/book',
    component: Book,
    beforeEnter(to,from,next){
      from.name === null ? next('/'):next();
    }

  }, {
    path: '/photo',
    component: Photo,
    beforeEnter(to,from,next){
      from.name === null ? next('/') : next();
    }
    },{
    path: '/moviedetail/:movieId',
    component: MovieDetail
  }]
})
