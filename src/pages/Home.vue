<script setup lang="ts">
import Table from "../components/Table.vue";
import Loading from "../components/Loading.vue";
</script>

<template>
  <div className="d-flex justify-content-end">
    <router-link to="/add" className="btn btn-outline-primary"
      >Añadir Producto</router-link
    >
  </div>
  <div className="mt-5 overflow-auto">
    <Table />
  </div>
</template>

<style>
</style>
