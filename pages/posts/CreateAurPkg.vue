<template>
<posttemplate :posttitle="title">
    <template v-slot:content>
        <p></p>
    </template>
</posttemplate>
</template>

<script>
import posttemplate from "../../components/posttemplate";
export default {
    components:{posttemplate},
  data() {
    return {
      title: "创建一个aur包",    
    };
  },

  head() {
    return {
      title: this.title
    };
  }
};
</script>