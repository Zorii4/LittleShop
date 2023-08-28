<template>
  <RouterLink :to="props.item.id" class="product-card-link">
    <v-card variant="outlined" rounded="xl" class="product-card">
      <v-img :src="props.item.cover" height="300px" content></v-img>
      <div class="d-flex justify-space-between align-center">
        <v-card-title>{{ props.item.name }}</v-card-title>
        <v-btn class="mr-3" density="compact" variant="text" icon="mdi-cart-plus" @click.stop.prevent="add(props.item)"></v-btn>
      </div>
      <v-card-text class="text-h6">{{ props.item.price }} ₽</v-card-text>
    </v-card>
  </RouterLink>
</template>

<script setup lang="ts">
  import { inject } from 'vue';

  const props = defineProps(['item'])

  const add = inject("addItem") as Function
</script>

<style scoped>
  .product-card {
    background: #fff;
  }

  .product-card-link {
    flex: 1;
    gap: 0 10px;
    min-width: calc(1200px / 2.5);
  }
</style>
