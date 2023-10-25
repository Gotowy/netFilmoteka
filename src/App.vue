<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPanel from '@/modules/shared/header/HeaderPanel.vue'
import AppFooter from '@/modules/shared/footer/AppFooter.vue'
</script>

<template>
  <div :class="style.appContainer">
    <HeaderPanel />
    <RouterView :class="style.mainContent" />
    <AppFooter />
  </div>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

.appContainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: color.$primary-dark-1;
}

.mainContent {
  flex: 1;
}

.notFound {
  color: color.$text;
}
</style>
