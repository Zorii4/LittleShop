<template>
  <v-btn class="my-2 d-block" color="primary" @click="backToMain">Back to Catalog</v-btn>
  <v-card variant="outlined" height="400px" width="1200px" class="d-flex">
    <v-col cols="4">
      <v-img :src="product?.cover" cover></v-img>
    </v-col>
    <v-col cols="8" class="d-flex flex-column justify-space-between">
      <div>
        <v-card-title>{{ product?.name }}</v-card-title>
        <div>{{ product?.description }}</div>
      </div>
      <div class="d-flex align-center">
        <div class="text-h4 mr-6">{{ product?.price }} ₽</div>
        <v-btn density="compact" variant="text" icon="mdi-cart-plus" @click.stop.prevent="add(product)"></v-btn>
      </div>
    </v-col>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, inject } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import data from "@/data/db.json"

  const route = useRoute()
  const router = useRouter()
  const product = ref(data.find(el => el.id === route.params.id))

  function backToMain() {
    router.push('/')
  }
  
  const add = inject("addItem") as Function
</script>