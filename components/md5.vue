<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>MD5</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <v-text-field label="Value+Key" v-model="value" @keyup.enter.prevent="tomd5"></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <p>{{hex}}</p>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import md5 from "blueimp-md5"
export default defineComponent({
  name: "md5",
  data() {
    return {
      value: "",
      hex: "",
    };
  },
  methods: {
    tomd5() {
      this.hex = md5(this.value);
    }
  }
});
</script>
