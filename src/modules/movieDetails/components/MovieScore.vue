<script setup lang="ts">
</script>

<template>
  <div :class="style.movieRating">
    <div :class="style.movieScore">
      <i :class="[style.fa, style['fa-star']]"></i>&nbsp;5
    </div>
    &nbsp;
    <div>
      0
      <br />ocen
    </div>
  </div>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

.movieRating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Righteous", "Poppins";
  color: color.$secondary;
}

.movieScore {
  font-size: 48px;
}
</style>