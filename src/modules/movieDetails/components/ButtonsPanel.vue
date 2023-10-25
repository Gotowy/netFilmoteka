<script setup lang="ts">
import ActionButton from './ActionButton.vue'
</script>

<template>
  <div :class="style.buttonsWrapper">
    <ActionButton
      :isExternal="false"
      path="/"
      text="Powrót"
    />
    <ActionButton
      :isExternal="true"
      path="https://www.imdb.com/"
      text="Profil IMDB"
    />
  </div>
</template>

<style module="style" lang="scss">
.buttonsWrapper {
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
}
</style>