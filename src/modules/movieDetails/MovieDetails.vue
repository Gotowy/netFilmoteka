<script setup lang="ts">
import ButtonsPanel from './components/ButtonsPanel.vue'
import MovieCast from './components/MovieCast.vue'
import MovieTitle from './components/MovieTitle.vue'
import MovieScore from './components/MovieScore.vue'

const backgroundImage = 'url(https://image.tmdb.org/t/p/original//hziiv14OpD73u9gAak4XDDfBKa2.jpg)'
const moviePoster = 'https://image.tmdb.org/t/p/w300//wNRk1vec98vfAQa2YdZOt7h0DGe.jpg'
</script>

<template>
  <div :class="style.movieBackdrop" :style="{ backgroundImage }">
    <div :class="style.contentWrapper">
      <MovieTitle :class="style.showMobile" />
      <div :class="style.posterAndButtonsWrapper">
        <img :src="moviePoster" :class="style.poster" />
        <ButtonsPanel />
      </div>
      
      <div :class="style.movieInfoWrapper">
        <MovieTitle :class="style.showDesktop"/>
        <MovieScore />
        <MovieCast />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam id deleniti provident debitis consequuntur dolores velit illo omnis. Commodi totam inventore quis facere qui ea pariatur odio dolor! Cum, fuga! Maiores rerum ex commodi voluptate suscipit deserunt qui eligendi libero necessitatibus sint corporis ipsam at, placeat dolor dolorem quasi? Nemo asperiores dolorum dolore sed ipsum repellendus odio ut! Incidunt facilis sunt inventore voluptatum dolorem eaque error libero eligendi suscipit expedita? Necessitatibus adipisci saepe vitae aperiam, quas deleniti voluptates placeat eum? Beatae, nemo impedit minus voluptates, repudiandae soluta in, sit fugit accusantium nihil cupiditate repellendus iusto natus laudantium. Tempore, molestiae omnis!
        </div>
      </div>

    </div>
  </div>
</template>

<style module="style" lang="scss">
@use '@/styles/color';
@use '@/styles/rwd';
@use '@/styles/shared';

.movieBackdrop {
  display: flex;
  background-size: cover;
  background-color: color.$primary-dark-2;
  background-blend-mode: overlay;
  overflow: auto;
  color: color.$text;
}

.contentWrapper {
  @include shared.content-wrapper;

  padding: 30px;
  display: flex;
  gap: 40px;

  @media (max-width: rwd.$tablet) {
    flex-direction: column;
    align-items: center;
  }
}

.posterAndButtonsWrapper {
  width: fit-content;
  margin: 0 auto;
  padding-top: 10px;

  .poster {
    border-radius: 10px;
  }
}

.movieInfoWrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  flex: 1;

  @media (max-width: rwd.$tablet) {
    align-items: center;
  }
}

.showMobile {
  display: none;

  @media (max-width: rwd.$tablet) {
    display: block;
  }
}

.showDesktop {
  @media (max-width: rwd.$tablet) {
    display: none;
  }
}
</style>