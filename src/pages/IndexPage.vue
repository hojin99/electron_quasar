<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section>
        <q-input
          v-model="text"
          label="text"
          type="textarea" />
      </q-card-section>
      <q-card-actions>
        <q-btn label="save" @click="save" />
        <q-btn label="load" @click="load" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const text = ref('')

const save = async () => {
  await window.api.saveTextFile(text.value)
}

const load = async () => {
  text.value = await window.api.loadTextFile()
}

</script>
