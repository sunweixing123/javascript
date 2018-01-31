import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Book from '@/components/book/Book'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Movie
  }, {
    path: '/music',
    component: Music
  }, {
    path: '/book',
    component: Book
  }, {
    path: '/photo',
    component: Photo
  }]
})
