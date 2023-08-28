<template>
  <div v-if="!cart || cart.length === 0" class="d-flex text-h5 align-center justify-center pb-4"> The Cart is empty... </div>
  <div v-for="item in cart" :key="item.id" class="mb-2 px-4">
    <v-card variant="outlined" height="100px" class="d-flex align-center">
      <v-col cols="2">
        <v-img :src="item.cover" cover></v-img>
      </v-col>
      <v-col cols="2">{{ item.name }}</v-col>
      <v-spacer />
      <v-col cols="3" class="d-flex align-center">
        <v-btn icon="mdi-minus" variant="text" density="compact" @click="decrease(item.id)"></v-btn>
        <span class="text-body-1 mx-1">{{ item.qty }}</span>
        <v-btn icon="mdi-plus" variant="text" density="compact" @click="increase(item.id)"></v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn icon="mdi-cancel" density="compact" variant="text" @click="deleteItem(item.id)"></v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script setup lang="ts">
  import { inject, type Ref } from 'vue'
  import { type ICartProducts } from '@/interfaces/productsInterface'
  
  let cart: Ref<ICartProducts[]> | undefined = inject("cart")

  function deleteItem(id: string) {
    if(cart) {
      cart.value = cart.value.filter(el => el.id !== id)
    }
  }

  function increase(id: string) {
    if(cart) {
      cart.value.forEach((el) => {
        if(el.id === id) el.qty++
      })
    }
  }

  function decrease(id: string) {
    if(cart) {
      cart.value.forEach((el) => {
        if(el.id === id) {
          if(el.qty > 1) {
            el.qty--
          } else {
            el.qty = 1
          }
        }
      })
    }
  }

</script>