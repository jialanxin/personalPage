<template>
  <span v-html="texToHtml"></span>
</template>

<script>
import { defineComponent } from 'vue';
import katex from "katex";
import "katex/dist/katex.min.css";
export default defineComponent({
  props: ["tex"],
  computed: () => ({
    texToHtml: () => {
      let html = katex.renderToString(this.tex);
      return html;
    }),
  }
};
</script>