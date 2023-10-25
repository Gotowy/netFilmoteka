<scrip setup lang="ts" />

<template>
  <footer :class="style.footer">
    Stopka
  </footer>
</template>

<style module="style" lang="scss">
@use '@/styles/color';

.footer {
  padding: 15px 15px 0px 15px;
  background: color.$filler-transparent /*#114488fb*/;
  text-align: right;
}
.powered {
  height: 50px;
  border-radius: 10px;
}
</style>