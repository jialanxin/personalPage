<template>
  <span v-html="texToHtml"></span>
</template>

<script>
import katex from "katex";
import "katex/dist/katex.min.css";
export default {
  props: ["tex"],
  computed: {
    texToHtml: function() {
      let html = katex.renderToString(this.tex);
      return html;
    }
  }
};
</script>