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
            <v-btn color="primary" @click="eV2nm">convert</v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-text-field label="Wavelenth(nm)" v-model="wavelenth"></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-btn color="primary" @click="nm2eV">convert</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const energy = ref('')
const wavelenth = ref('')
const c = 2.99792458e8
const h = 6.62607004e-34
const e = 1.602176634e-19

function nm2eV() {
  energy.value = ((c * h * 1e9) / e / wavelenth.value).toFixed(2)
}

function eV2nm() {
  wavelenth.value = ((c * h * 1e9) / e / energy.value).toFixed(2)
}
</script>
