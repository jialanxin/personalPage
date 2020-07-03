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
            <template v-slot:chinese_title>拓扑材料：外尔半金属</template>
            <template v-slot:english_title>Topological materials: Weyl semimetal</template>
            <template v-slot:author>Yan 2017</template>
            <template v-slot:content>
              <p>如果外尔半金属中的时间反演对称性保持，那么将存在至少两对外尔费米子，费米弧依然存在，但反常霍尔效应消失了，因为总体的贝里相位为零，但如果考虑自旋相关的贝里相位，会出现自旋霍尔效应。</p>
              <p>第二类外耳半金属中会出现各向异性（电流）的手征反常和奇异的反常霍尔效应。</p>
              <p>通过量子共振实验我们可以得知，TaAs的费米面穿过W1和W2类外尔锥的上半锥，形成独立的电子口袋，从而有效抑制了不同手性的外尔点间的散射，形成手征反常；而TaP和NbP，费米面穿过W1上半锥和W2下半锥，理论上不存在手征反常，负磁阻效应源自于场导致的电流重分布。</p>
              <p>MoTe2的费米弧连接方式对应力很敏感。</p>
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
      title: "7月读书笔记",
      expanded: [],
      expand: false,
      numOfArticles: 1
    };
  },
  methods: {
    expandOrHide: function() {
      if (this.expand === false) {
        this.expanded = [...Array(this.numOfArticles).keys()];
        this.expand = true;
      } else {
        this.expanded = [];
        this.expand = false;
      }
    }
  },
  head() {
    return { title: this.title };
  }
};
</script>