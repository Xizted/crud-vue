<script lang="ts" setup>
import { onMounted, ref } from "vue";
import total from "../helpers/total.helpers";
import { getProduts, deleteProduct } from "../services/products.services";
import { deleteProductHelper } from "../helpers/products.helpers";
import { Products } from "../interface/product.interface";

const products = ref<null | Products>(null);
let totalStock = ref<number>(0);
let totalCost = ref<number>(0);

const handleDelete = (id: number | undefined) => {
  if (id) {
    deleteProduct(id).then(() => {
      products.value = deleteProductHelper(products.value!, id);
      totalStock.value = total(products.value, "cantidad");
      totalCost.value = total(products.value, "costo");
    });
  }
};

onMounted(() => {
  getProduts().then((data) => {
    products.value = data;
    totalStock.value = total(products.value, "cantidad");
    totalCost.value = total(products.value, "costo");
  });
});
</script>

<template>
  <table
    className="table table-striped table-responsive"
    v-if="products?.length !== 0"
  >
    <thead className="table-dark">
      <tr>
        <th>id</th>
        <th>Descripción</th>
        <th>Cantidad</th>
        <th>Costo</th>
        <th className="text-center">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="products">
        <tr v-for="product in products" v-bind:key="product.id">
          <td>
            <strong> {{ product.id }} </strong>
          </td>
          <td>
            {{ product.descripcion }}
          </td>
          <td>
            {{ product.cantidad }}
          </td>
          <td>
            {{ product.costo }}
          </td>
          <td className="text-center">
            <router-link
              :to="{ name: 'product.edit', params: { id: product.id } }"
              className="btn btn-warning me-3"
              >Editar</router-link
            >
            <button @click="handleDelete(product.id)" className="btn btn-danger">
              Eliminar
            </button>
          </td>
        </tr>
      </template>
      <Loading v-else />
    </tbody>
    <tfoot className="table-dark">
      <tr>
        <td className="text-center"><strong>Total:</strong></td>
        <td></td>
        <td>
          <strong>{{ totalStock }}</strong>
        </td>
        <td>
          <strong>{{ totalCost }}</strong>
        </td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  <div className="alert alert-info" v-else>
    No hay productos en la base de datos
  </div>
</template>

<style>
</style>