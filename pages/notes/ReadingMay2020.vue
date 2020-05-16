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
            <template v-slot:chinese_title>2D/0D异质结中的超快电子转移和杂化激子形成</template>
            <template
              v-slot:english_title
            >Ultrafast Charge Transfer and Hybrid Exciton Formation in 2D/0D Heterostructures</template>
            <template v-slot:author>Boulesbaa 2016</template>
            <template v-slot:content>
              <p>核/壳 CdSe/ZnS 复合量子点的1s激子能量为2.25eV。量子点的尺寸设计使得量子点和WS2单层的能带对齐为第二类，使得空穴和电子有相反的流向。</p>
              <p>静态的PL，激发能量为3.1eV，异质结中量子点和单层的PL峰都减少幅度了。由于量子点仅吸收7%的光，而WS2的PL下降了90%以上，绝不是因为量子点把光吸收完了的结果。</p>
              <p>因为WS2带隙比量子点小，所以排除WS2向量子点的能量转移，量子点PL减小也印证了这一点。反方向的能量转移，WS2PL减小了90%，也不太可能。</p>
              <p>另有一种核直径略大的量子点，激子能量为1.9eV。因为空穴的有效质量是电子的3倍，两种量子点的价带位置改变不大，激子能量不同由导带位置决定。有关异质结中量子点激子的生命时长，如果以量子点向二维的空穴转移为主，两种量子点激子的PL峰的生命时长应当接近，而实际上不同。量子点向二维能量转移的效率，1.9eV的量子点会更低，与实际的PL生命时长相反，也说明能量转移不是主要途径。1.9eV的量子点导带和二维的导带的能量差更大，电子转移效率更高，与更短的PL生命时长一致。</p>
              <p>用2.5eV激发单独的2.25eV量子点，1s能级和蓝侧的瞬时吸收减少了，不仅是由于激子本身的产生，还有高阶激子和多体作用，导致整体的峰移动、增宽。2.1eV的激发不能引起瞬时吸收的变化。</p>
              <p>用2.1eV激发单独的WS2单层，2eV的X-A激子和2.4eV的X-B激子的瞬时吸收都减少了，X-B激子的出现是由于深处的电子要填X-A造成的空穴，引起了更深的空穴。</p>
              <p>在2.1eV激发异质结的瞬时吸收谱中，除了X-A和X-B的信号，还有一个2.25eV的1s信号，是由二维向量子点的电子转移带来的（能量转移，WS2带隙比量子点小；空穴转移，不符合带对齐；WS2更深处的空穴向量子点价带的转移，由于上文PL的生命时长不同，这种也不是主要通路）。</p>
              <p>1s和X-B之间还出现了一个新的信号，而且X-B消失得很快，这可能是由于二维向量子点电子转移形成了杂化激子HX1（电子在量子点CBM，空穴在二维X-B处）。</p>
              <p>用异质结和单独WS2的静态吸收光谱相减，2.3eV有一个HX1峰，2.7eV有一个HX2峰，HX2的空穴源自于X-C，位于VB中的嵌套带。</p>
              <p>能带位置显示HX1的能量是2.4eV，但测量得到的是2.26eV，差值就是激子结合能。</p>
              <p>与X-B相同，异质结中的X-A也消失得比较快，但没有与之相关的HX出现，可能是深处的电子也把空穴填了。</p>
              <p>2.1eV的激发WS2单层，2eV处的X-A有时间常数0.9和12.6ps，与非辐射复合（俄歇、缺陷）和辐射复合有关。加上量子点后，75%下降发生在18fs，25%发生在0.62ps</p>
              <p>2.5eV单独激发量子点，时间常数16ps和417ps。2.1eV激发异质结，时间常数34fs和416fs。</p>
              <p>用45fs的高斯IRF解卷积，X-A和1S信号的形成过程，X-A花了45fs，1s花了57fs，中间差了12fs就是电子转移的时间。</p>
              <p>HX1的信号的时间常数是19fs和1.3ps，与X-A、1S信号差不多，可以共同归结于电子和空穴捕获(trapping)。</p>
            </template>
          </ReadingPanel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import ReadingPanel from "../../components/ReadingPanel.vue";
export default {
  components: { ReadingPanel },
  data() {
    return {
      title: "5月读书笔记",
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