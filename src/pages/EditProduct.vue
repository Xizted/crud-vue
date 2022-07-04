<script lang="ts" setup>
import { editProduct, getProduct } from "../services/products.services";
import { onMounted, reactive, ref } from "vue";
import { Product } from "../interface/product.interface";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const id = ref(route.params.id as string);

const form = reactive<Product>({
  id: parseInt(""),
  descripcion: "",
  cantidad: parseInt(""),
  costo: parseInt(""),
});

const handleSubmit = () => {
  editProduct(parseInt(id.value), form).then(() => {
    router.back();
  });
};

onMounted(() => {
  getProduct(id.value).then((data) => {
    form.cantidad = data.cantidad;
    form.descripcion = data.descripcion;
    form.costo = data.costo;
    form.cantidad = data.cantidad;
  }).catch((e) => {
    if(e.code === "ERR_BAD_REQUEST"){
      router.back();
    }
  });
});
</script>

<template>
  <div className="d-flex justify-content-center">
    <div className="card p-5">
      <form @submit.prevent="handleSubmit">
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input
            v-model="form.descripcion"
            type="text"
            placeholder="Computadora..."
            className="form-control"
            id="descripcion"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="form-label">Cantidad</label>
          <input
            v-model="form.cantidad"
            placeholder="1"
            type="number"
            className="form-control"
            id="cantidad"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="costo" className="form-label">Costo</label>
          <input
            v-model="form.costo"
            placeholder="1"
            type="number"
            className="form-control"
            id="costo"
            required
          />
        </div>
        <div className="text-end">
          <router-link to="/" className="btn btn-secondary me-4"
            >Cancelar</router-link
          >
          <button type="submit" className="btn btn-primary">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 25%;
  }
}
</style>