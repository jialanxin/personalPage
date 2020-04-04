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
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col class="pa-0">
                      <p class="font-weight-black title ma-0">激光可调的外延生长的MoS2和Bi2Se3异质结</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pa-0">
                      <p
                        class="caption ma-0"
                      >Tunable and laser-reconfigurable 2D heterocrystals obtained by epitaxial stacking of crystallographically incommensurate Bi2Se3 and MoS2 atomic layers</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="auto">
                  <p class="font-weight-light">Vargas 2017</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
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
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col class="pa-0">
                      <p class="font-weight-black title ma-0">Bi2Se3和各种TMD异质结</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pa-0">
                      <p
                        class="caption ma-0"
                      >Widely tunable Bi2Se3 /transition metal dichalcogenide 2D heterostructures for write-readerase-reuse applications</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="auto">
                  <p class="font-weight-light">Hennighausen 2019</p>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content></v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "4月读书笔记",
      lastUpdate: "2020-04-04"
    };
  },
  head() {
    return { title: this.title };
  }
};
</script>