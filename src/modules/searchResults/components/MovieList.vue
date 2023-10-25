<script setup lang="ts">
import MovieTile from './MovieTile.vue'
</script>

<template>
  <div class="movieList">
    <MovieTile />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/color';

.movieList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;
  margin: auto;
  padding: 30px;
}

.noResults {
  color: color.$secondary;
  text-align: center;
  font-size: 32px;
}

.movie {
  margin: 5px;
  padding-bottom: 10px;
  width: 185px;
  height: 350px;
  overflow: hidden;
  border-radius: 5px;
  background: color.$primary-light-1; /*#259, 59f*/
}

.pages {
  display: flex;
  justify-content: center;
  margin: 0 auto 30px auto;
  width: 400px;
}

.page {
  width: 24px;
  height: 24px;
}

a {
  color: color.$text;
}

.active {
  background: color.$filler;
  border: 1px solid color.$secondary;
  border-radius: 30%;
  color: color.$secondary;
  font-weight: bold;
}

@media screen and (max-width: 1200px) {
  .movieList {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 870px;
  }

  /*.movieBackdrop {
    background-size: 1280px;
  }*/
}

@media screen and (max-width: 960px) {
  .movieList {
    grid-template-columns: 1fr 1fr;
    width: 420px;
  }
}

@media screen and (max-width: 500px) {
  .movieList {
    grid-template-columns: 1fr;
    width: 200px;
  }
}
</style>