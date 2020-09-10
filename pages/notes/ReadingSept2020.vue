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
