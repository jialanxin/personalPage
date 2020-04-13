<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="font-weight-light">latest update: {{lastUpdate}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-expansion-panels multiple>
          <ReadingPanel>
            <template v-slot:chinese_title>激光可调的外延生长的MoS2和Bi2Se3异质结</template>
            <template
              v-slot:english_title
            >Tunable and laser-reconfigurable 2D heterocrystals obtained by epitaxial stacking of crystallographically incommensurate Bi2Se3 and MoS2 atomic layers</template>
            <template v-slot:author>Vargas 2017</template>
            <template v-slot:content>
              <p>MoS2三层和Bi2Se3五层的垂直异质结</p>
              <p>Bi2Se3在几个纳米下有2.5eV的可调扩展带隙（正常体带隙300meV）和多个PL峰</p>
              <p>1TL+1QL复合体有一个0.37eV的间接带隙，QL变多，带隙变窄。前体和异质结能带结构的不同，归咎于很强的层间作用，虽然晶格不那么适配。</p>
              <p>拉姆光谱显示前体的特征峰被强烈抑制，这和其他异质结显著不同</p>
              <p>MoS2的PL峰也被强烈抑制了，还是说明了能带结构的破坏</p>
              <p>转移得到的异质结，PL峰只抑制了一部分，说明不完全由charge transfer承担PL峰的消失</p>
              <p>异质结比MoS2透过率降低，但激子态保留，即使能带结构不同</p>
              <p>K和K'附近的价带和MoS2是相近的，保留了A、B激子</p>
              <p>DFT显示，QL层的增多导致导带DOS向下延申，透射光谱也向低频权重增加。AB激子也有类似变化</p>
              <p>用激光照过的部分颜色、SEM和AFM都有所改变，说明不仅是刻蚀，还有结构变化和电子特性改变。MoS2的PL峰、拉曼和透过光谱都有所恢复</p>
              <p>氩气下加热过之后，异质结的特性恢复</p>
              <p>SEAD显示，激光照射的部分，QL层分为更小的区域，每个区域Bi2Se3取向不一致，可能部分脱离MoS2表面。Bi2Se3本身的特征峰在2.5eV以上，不在观测范围内。</p>
              <p>相比于单层MoS2，异质结对于AB激子的透过光谱幅度变小并发生红移，这与多层MoS2是一致的。说明层间作用相似，红移来自于带隙变小</p>
              <p>激光照过的AB激子红移依然保持，说明Bi2Se3还依附在MoS2上，没有脱离。SEAD也发现，只有方向变化，没有多出来的衍射点</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>Bi2Se3和各种TMD异质结</template>
            <template
              v-slot:english_title
            >Widely tunable Bi2Se3 /transition metal dichalcogenide 2D heterostructures for write-readerase-reuse applications</template>
            <template v-slot:author>Hennighausen 2019</template>
            <template v-slot:content>
              <p>所有的异质结中，原TMD的PL峰都消失了，表明层间作用产生了新的非辐射复合途径提供给了这些光生激子们。因为能带杂化和新形成的间接带隙</p>
              <p>激光照过之后，层间作用就被打断了，PL峰恢复，但位置有所不同，退火之后层间作用恢复</p>
              <p>Bi2Se3可以长在好多种TMD上，表明它的晶格可塑性好，适配性高</p>
              <p>尽管晶格性质差不多，Bi2Te3和Sb2Se3都不会使得TMD的PL峰消失，不明原因。Bi2Se3和TMD的层间作用是特殊的。这两种TI都不能在TMD上形成良好的异质结接触，PL部分降低可能是由于TI的高反射率使得TMD的进光量减少。</p>
              <p>这篇文章把上一篇提到的激光照射后的变化归咎于氧的插入导致层分离</p>
              <p>其他文章使用了TEM比较层间作用，发现Bi2Se3和MoSe2最强。TEM和SEM的电子束还可以改变构型和改变光学性质</p>
              <p>激光造成的表面颜色变化可以维持数月，原因也不是因为Bi2Se3被激光移除了，样品的高度没有发生改变</p>
              <p>异质结中存在暗激子，即非辐射复合的激子，从透过光谱等证据中可获得相关信息。同上一篇文章。至于charge transfer这种不同机理的东西，激光暴露过的样品PL就恢复了，一定程度上否认了charge transfer的存在，进一步确认需要其他证据</p>
              <p>异质结中的层间作用会减小TMD的Raman峰高。Bi2Se3峰在照射过后减小，可能是单晶体取向旋转变为多晶体</p>
              <p>不同能量的激光，给恢复的PL峰带来了不同的位置和峰强。从中解析出A激子和A-三激子的计数和结合能变化。带隙宽度和结合能都有变化，导致红蓝移都存在。带隙的变化取决于总体能带的变化，结合能的变化，取决于激子所处的复杂的介电环境的不同。</p>
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
      title: "4月读书笔记",
      lastUpdate: "2020-04-14"
    };
  },
  head() {
    return { title: this.title };
  }
};
</script>