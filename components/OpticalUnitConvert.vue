<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Optical Unit Convert</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <v-text-field label="Energy(eV)" v-model="energy"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn color="primary" small @click="eV2nm">convert</v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-text-field label="Wavelenth(nm)" v-model="wavelenth"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn color="primary" small @click="nm2eV">convert</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "OpticalUnitConvert",
  data: () => ({
    return {
      energy: "",
      wavelenth: "",
      c: 2.99792458e8,
      h: 6.62607004e-34,
      e: 1.602176634e-19
    };
  },
  methods: () => ({
    nm2eV() {
      this.energy = ((this.c * this.h * 1e9) / this.e / this.wavelenth).toFixed(
        2
      );
    },
    eV2nm() {
      this.wavelenth = ((this.c * this.h * 1e9) / this.e / this.energy).toFixed(
        2
      );
    }),
  }
};
</script>