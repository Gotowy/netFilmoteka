<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header :class="style.headerContainer">
    <RouterLink to="/">
      <div :class="style.logo">
        <span :class="style.logo_secondaryColor">net</span>
        <span>Filmoteka</span>
      </div>
    </RouterLink>
    <input
      :class="style.searchInput"
      type="search"
      placeholder="Nazwa filmu..."
    />
  </header>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

.headerContainer {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background: color.$filler-light-transparent; /* #114488fb */
  background-color: color.$filler-light-transparent;
  background-image: linear-gradient(100deg, color.$filler-transparent 0%, color.$primary-transparent 170%);
  box-shadow: 0 0 35px 0 color.$filler-transparent;
}

.logo {
  font-family: "Fredericka the Great";
  font-size: 36px;
  color: color.$annotation-light;

  &_secondaryColor {
    color: color.$secondary;
  }
}

.searchInput {
  min-width: 300px;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 10px;
  background: color.$annotation-light;
  font-family: "Poppins";
  color: color.$primary-dark-1;
  cursor: text;

  &::placeholder {
    color: color.$annotation;
  }
}
</style>
