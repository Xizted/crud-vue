<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div className="p-2 p-md-5">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  height: auto;
}
</style>
