<template>
  <v-container>
    <v-btn append-icon="mdi-cart" color="success" class="mb-2" @click="showModal = true">Go To Cart -></v-btn>
    <RouterView />
    <ModalWindow :visible="showModal" @close="showModal = false">
      <CartItem />
    </ModalWindow>
  </v-container>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { ref, provide } from "vue"
  import CartItem from '@/components/CartItem.vue'
  import ModalWindow from '@/components/ModalWindow.vue'
  import { type ICartProducts } from '@/interfaces/productsInterface'

  const showModal = ref(false)

  let cart = ref<ICartProducts[]>([])

  function addItem(item: ICartProducts) {
    if(cart.value.length <= 0) cart.value.push(item)
    const itemIndex = cart.value.findIndex(el => el.id === item.id)
    if(itemIndex >= 0) {
      cart.value[itemIndex].qty += 1
      return
    } else {
      cart.value.push({...item, qty: 1})
    }
  }

  provide("cart", cart)
  provide("addItem", addItem)
</script>

<style scoped>
  .v-container {
    width: 1200px;
  }
</style>
