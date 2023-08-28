<template>
  <v-dialog v-model="dialog">
    <v-card width="600px">
      <div class="d-flex align-center justify-end">
        <v-btn flat icon color="transparent" @click="dialog = false">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </div>
      <slot></slot>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps(["visible"])
  const emit = defineEmits(["close"])

  const dialog = computed({
    get() {
      return props.visible
    },
    set(value) {
      if (!value) {
        emit("close")
      }
    },
  })
</script>

<style scoped>
  :deep(.v-overlay__content) {
    justify-content: center;
    align-items: center;
    max-width: initial !important;
    width: initial !important;
    max-height: initial !important;
  }
</style>