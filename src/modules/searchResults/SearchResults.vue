<script setup lang="ts">
import MovieList from './components/MovieList.vue'
</script>

<template>
  <div class="results">
    <form class="filteringPanel">
      <select
        class="select genres annotation"
        defaultValue="{ this.props.genre.name }"
        @change="() => null"
      >
        <option value="Gatunek" disabled hidden>
          Gatunek
        </option>
        <option value="wszystkie">Wszystkie gatunki</option>
        {genreList}
      </select>

      <select class="select sorting" @change="() => null">
        <option value="popularity">Najpopularniejsze</option>
        <option value="score">Najwyżej oceniane</option>
        <option value="trendy">Obecnie na czasie</option>
      </select>
    </form>
    <MovieList />

    <nav class="pages">{pageList}</nav>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/color';
@use '@/styles/shared';

.results {
  @include shared.content-wrapper;
}

.filteringPanel {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 40px;
}

.select {
  padding: 3px;
  border: solid 2px color.$primary-light-2;
  border-radius: 5px;
  outline: none;
  background: color.$primary-dark-1;
  font-family: "Poppins";
  color: color.$text;
  cursor: pointer;

  &[disabled="true"] {
    color: color.$primary-dark-1;
    border-color: color.$primary;
    pointer-events: none;
  }

  &.option {
    background: color.$primary-dark-1;
    color: color.$text;
    border-radius: 5px;
  }
}

.annotation {
  color: color.$annotation;
}
</style>