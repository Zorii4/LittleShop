<template>
  <h1>Cards count: {{ finalData.length }}</h1>
  <v-slide-group v-if="finalData.length >= 3">
    <v-slide-group-item v-for="el in finalData" :key="el.id" show-arrows>
      <ProductCard :item="el" />
    </v-slide-group-item>
  </v-slide-group>
  <div class="d-flex" v-else>
    <ProductCard v-for="el in finalData" :key="el.id" :item="el" />
  </div>
</template>  

<script setup lang="ts">
  import data from "@/data/db.json"
  import ProductCard from "@/components/ProductCard.vue"
  import { type IProducts } from '@/interfaces/productsInterface'
  import { type ICartProducts } from '@/interfaces/productsInterface'
  import { ref, onMounted } from "vue";

  const newData: ICartProducts[] = data.map((el: IProducts) => {
    return {...el, qty: 0}
  })

  const finalData = ref<ICartProducts[]>([])
  
  onMounted(() => {
    const randomInt = Math.floor(1 + Math.random() * (10))
    finalData.value = newData.slice(0, randomInt)
  })

</script>

<style scoped>
  .card-wrapper {
    overflow-x: scroll;
  }
</style>