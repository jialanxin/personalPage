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
            <template v-slot:chinese_title>磁性外尔半金属Co3Sn2S2中磁化和电子输运的各向异性</template>
            <template
              v-slot:english_title
            >On the anisotropies of magnetization and electronic transport of magnetic Weyl semimetal Co3Sn2S2</template>
            <template v-slot:author>Shen 2019</template>
            <template v-slot:content>
              <p>Co原子的排布在ab平面内，磁矩朝向c方向。</p>
              <p>XRD只显示(0,0,3z)族的峰，表明样品薄片的法向是c轴方向。</p>
              <p>相变点温度之下时，B平行于c方向的磁化程度比B平行于ab平面的磁化程度强一百多倍，体现出极强的各向异性。</p>
              <p>磁熵的计算表明磁热效应的各项异性也十分显著。</p>
              <p>贝里曲率各项异性显著。</p>
              <p>一般输运表现为各向同性。</p>
              <p>2K低温下，两种载流子共存，与费米面上的外尔点以及nodal line有关。150K时恢复为空穴导电。</p>
              <p>反常霍尔电导和反常霍尔角都为各向同性。表明了2K时电子和空穴的接近完全补偿</p>
              <p>但此时磁阻曲线偏离了完全补偿金属的<mathexpression tex="B^2" />的规律，原因被认为是自旋有关的散射。</p>
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
      title: "8月读书笔记",
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