<template>
  <span v-html="texToHtml"></span>
</template>

<script setup>
import { ref, computed } from 'vue';
import katex from "katex";
import "katex/dist/katex.min.css";

const props = defineProps(['tex'])
const texToHtml = computed(() => {
  return katex.renderToString(props.tex)
})
</script>
