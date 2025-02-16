<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{posttitle}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <极客时间
        <p class="font-weight-light">latest update: {{lastUpdate}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <slot name="content"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import json from "../pages/posts.json"

const props = defineProps(['posttitle'])
const lastUpdate = ref("")

onMounted(() => {
  lastUpdate.value = json.find(post => {
    return post.title === props.posttitle
  }).lastUpdate
})
</script>