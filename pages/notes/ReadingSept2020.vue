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
            <template v-slot:chinese_title>二维范德瓦尔斯异质结中偶极子耦合之外的亮激子和暗激子的超快能量转移</template>
            <template
              v-slot:english_title
            >Ultrafast Energy Transfer of Both Bright and Dark Excitons in 2D van der Waals Heterostructures Beyond Dipolar Coupling</template>
            <template v-slot:author>Wu 2019</template>
            <template v-slot:content>
           <p>MoTe2/WSe2异质结中，能带以type I形式对齐，MoTe2带隙包裹在WSe2的带隙中。</p>
           <p>比较单体和异质结的静态反射谱，异质结相当于两种材料的峰的加和，仅存在一点红移，原因可能是激子介电环境的改变。</p>
           <p>比较PL谱，异质结中的MoTe2峰变宽变高了，WSe2峰完全消失，表明存在WSe2到MoTe2的能量转移。</p>
           <p>对异质结中的WSe2激子频率进行激发，MoTe2的激子PL强度却显著增加了，更加反映了能量转移和type I的对齐方式。</p>
           <p>与荧光类实验不同，瞬时透过、反射、吸收实验可以获得总体的激子和电子空穴对的信息，不仅包括亮激子，还包括非辐射放出的暗激子，包括动量限制的和自旋限制的。</p>
           <p>异质结的反射谱峰消失的很快（180fs），而同样type I的电荷转移异质结WSe2/WS2在电荷转移之后（100fs），反射峰依然保持了数百ps，原因是滞留的空穴。说明单纯的电荷转移不是原因。</p>
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
