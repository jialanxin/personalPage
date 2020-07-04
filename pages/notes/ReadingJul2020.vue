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
          <ReadingPanel>
            <template v-slot:chinese_title>拓扑半金属中外尔费米子手性的直接光学探测</template>
            <template
              v-slot:english_title
            >Direct optical detection of Weyl fermion chirality in a topological semimetal</template>
            <template v-slot:author>Ma 2017</template>
            <template v-slot:content>
              <p>外尔半金属的中红外激发，光电流探测————圆偏振光伏效应。</p>
              <p>有两个限制因素，其一是手性选择定则，对于沿+z方向传播的右旋偏振光，对于+1的外尔点，仅有<mathexpression tex="+k_z" />一侧的跃迁是允许的，<mathexpression tex="-k_z" />一侧的是不允许的，原因是角动量守恒。</p>
              <p>第二个是泡利不相容，当化学势远离外尔点，并且外尔锥出现倾斜的时候，有一侧的导带可能已经被占据了，因而无法跃迁。</p>
              <p>当光从a轴直入射，b轴方向存在电流，在右旋时正向最大，左旋时反向最大，线偏振光时为零，c轴方向电流始终为零。</p>
              <p>将入射点调整得更加靠近一个电极，发现b方向和c方向都出现了电流强度的偏置。被归因为光热效应引发的温度梯度。</p>
              <p>因为TaAs中的化学势靠经W2点，W2点的光电流贡献可以忽略，由相关方程给出。</p>
              <p>本实验验证了W1点的+1手性。</p>
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
      numOfArticles: 2
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