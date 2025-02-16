<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-row>
        <v-col>
          <div class="text-h6 font-weight-black"><slot name="chinese_title"></slot></div>
          <div class="text-caption"><slot name="english_title"></slot></div>
        </v-col>
        <v-col cols="auto">
          <div class="font-weight-light"><slot name="author"></slot></div>
        </v-col>
      </v-row>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot name="content"></slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
