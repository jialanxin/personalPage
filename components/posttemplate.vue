<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{posttitle}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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

<script>
import json from "../pages/posts.json";
export default {
  props: ["posttitle"],
  data() {
    return {
      lastUpdate: ""
    };
  },
  created() {
    this.lastUpdate = json.find(post => {
      return post.title === this.posttitle;
    }).lastUpdate;
  }
};
</script>