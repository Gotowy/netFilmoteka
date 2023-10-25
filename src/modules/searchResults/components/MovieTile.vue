<script setup lang="ts">
import { RouterLink } from 'vue-router'

const title = "Harry Potter i Kamień Filozoficzny"
const posterPath = "https://image.tmdb.org/t/p/w185//wNRk1vec98vfAQa2YdZOt7h0DGe.jpg"
</script>

<template>
  <RouterLink to="/movies/movie" :class="style.tileWrapper">
    <img 
      :src="posterPath"
      :class="style.poster"
    />
    <div :class="style.score">
      <i :class="[style.fa, style['fa-star']]"></i>&nbsp;
    </div>
    <div :class="style.titleMask">
      <div :class="style.title">
        {{ title }}
      </div>
    </div>
  </RouterLink>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

$radius: 5px;

$poster-width: 185px;
$poster-height: 278px;
$score-height: 24px;
$title-mask-height: 58px;
$title-mask-buffor: 100px;

$title-mask-height-extended: calc($title-mask-height + $title-mask-buffor);
$tile-wrapper-height: calc($poster-height + $score-height + $title-mask-height);

.tileWrapper {
  max-height: $tile-wrapper-height;
  max-width: $poster-width;

  &:hover .titleMask {
    max-height: $title-mask-height-extended;
    transition: max-height 1s;
  }
}

.titleMask {
  max-height: $title-mask-height;
  transition: max-height .5s;
  border-radius: 0 0 $radius $radius;
  overflow: hidden;

  .title {
    padding: 5px 10px;
    border-radius: 0 0 $radius $radius;
    background: color.$primary-light-1;
    color: color.$text;
    word-wrap: break-word;
  }
}

.poster {
  height: $poster-height;
  border-radius: $radius $radius 0 0;
}

.score {
  height: $score-height;
  background: color.$filler;
  color: color.$secondary;
}
</style>