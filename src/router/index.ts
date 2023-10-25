import { createRouter, createWebHistory } from 'vue-router'

const SearchResults = () => import('@/modules/searchResults/SearchResults.vue')
const MovieDetails = () => import('@/modules/movieDetails/MovieDetails.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'search results',
      component: SearchResults
    },
    {
      path: '/movies/movie',
      name: 'movie details',
      component: MovieDetails
    }
  ]
})

export default router
