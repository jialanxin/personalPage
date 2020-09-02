<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="expandOrHide">Expand All/None</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels multiple v-model="expanded">
          <ReadingPanel>
            <template v-slot:chinese_title>二维材料中可用于单光子发射的二能级量子系统</template>
            <template
              v-slot:english_title
            >Two-Level Quantum Systems in Two-Dimensional Materials for Single Photon Emission</template>
            <template v-slot:author>Gupta 2019</template>
            <template v-slot:content>
           <p></p>
	   </template>
          </ReadingPanel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import ReadingPanel from "../../components/ReadingPanel.vue";
import mathexpression from "../../components/mathexpression.vue";
export default {
  components: { ReadingPanel, mathexpression },
  data() {
    return {
      title: "9月读书笔记",
      expanded: [],
      expand: false,
      numOfArticles: 1,
    };
  },
  methods: {
    expandOrHide: function () {
      if (this.expand === false) {
        this.expanded = [...Array(this.numOfArticles).keys()];
        this.expand = true;
      } else {
        this.expanded = [];
        this.expand = false;
      }
    },
  },
  head() {
    return { title: this.title };
  },
};
</script>
