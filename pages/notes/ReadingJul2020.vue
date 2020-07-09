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
              <p>
                有两个限制因素，其一是手性选择定则，对于沿+z方向传播的右旋偏振光，对于+1的外尔点，仅有
                <mathexpression tex="+k_z" />一侧的跃迁是允许的，
                <mathexpression tex="-k_z" />一侧的是不允许的，原因是角动量守恒。
              </p>
              <p>第二个是泡利不相容，当化学势远离外尔点，并且外尔锥出现倾斜的时候，有一侧的导带可能已经被占据了，因而无法跃迁。</p>
              <p>当光从a轴直入射，b轴方向存在电流，在右旋时正向最大，左旋时反向最大，线偏振光时为零，c轴方向电流始终为零。</p>
              <p>将入射点调整得更加靠近一个电极，发现b方向和c方向都出现了电流强度的偏置。被归因为光热效应引发的温度梯度。</p>
              <p>因为TaAs中的化学势靠经W2点，W2点的光电流贡献可以忽略，由相关方程给出。</p>
              <p>本实验验证了W1点的+1手性。</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>从氟化石墨烯到羟基石墨烯转变中的可调控光致发光和谱劈裂</template>
            <template
              v-slot:english_title
            >Tunable photoluminescence and spectrum split from fluorinated to hydroxylated graphene</template>
            <template v-slot:author>Gong 2014</template>
            <template v-slot:content>
              <p>少层的氟化石墨烯通过液体法剥离。随后用碱溶液羟基化，溶液从不溶变溶解</p>
              <p>傅里叶变换红外光谱（FTIR），表征随着碱的比例增大，羟基化程度变高。</p>
              <p>XRD中(001)峰变低，(002)峰变高。</p>
              <p>XPS中F的1s峰和俄歇电子带消失。O的1s和俄歇电子出现。XPS中C-OH键286.2eV，C-O-C键287.0eV</p>
              <p>氟化石墨烯原料中的F/C比是0.43</p>
              <p>羟基化石墨烯中羟基占多数，少数环氧键。O/C比最高到0.30，少的部分来自于环氧键的形成和少数的羟基脱离，恢复了sp2的结构。</p>
              <p>随着sp2的恢复，PL峰变尖锐且出现分裂，整体向高能方向蓝移。</p>
              <p>石墨烯有两个特征的拉曼峰，G band形成于sp2碳原子的E2g声子的无序散射；D band形成于k点的A1g的breathing mode。氧化石墨烯还原过程中D/G峰比变高。</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>第一类外尔半金属中的电子-声子散射和声子动力学</template>
            <template
              v-slot:english_title
            >Uncovering electron-phonon scattering and phonon dynamics in type-I Weyl semimetals</template>
            <template v-slot:author>Coulter 2019</template>
            <template v-slot:content>
              <p>NbAs的B1(1)和B1(2)的峰型分别向低能和高能区偏移，称为Fano峰型，偏移的程度相同，方向相反。TaAs则没有这一峰型，A1峰也没有。</p>
              <p>A1峰的峰宽随温度非单调的变化，不能用单纯的光学声子向声学声子非谐转变解释。与光学声子向费米型激发的转变类似。</p>
              <p>计算显示，NbAs的声子谱中的拉曼模式处声子的自能很强，与电声作用有关。TaAs则没有。</p>
              <p>此外，NbAs同一个声子模从不同的方向测，关于温度的单调性不同，可能与自旋极化只允许一个方向的声子诱导的带间跃迁有关。</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>外尔半金属TaP的极化拉曼光谱的声子模的反常依赖性</template>
            <template
              v-slot:english_title
            >Anomalous phonon-mode dependence in polarized Raman spectroscopy of the topological Weyl semimetal TaP</template>
            <template v-slot:author>Zhang 2020</template>
            <template v-slot:content>
              <p>TaP的部分声子模在某些激发光波长下被极限抑制。</p>
              <p>B1(1)和B1(2)尽管有着相同的声子对称性，但在关于激发波长的依赖性上完全相反。</p>
              <p>测量范围内没有显著的光吸收峰。</p>
              <p>
                通过调整DFT参数中的峰宽常数
                <mathexpression tex="\gamma=\frac{\hbar}{\tau}" />（
                <mathexpression tex="\tau" />是光生载流子的生命周期），可以调整简并的导带对于某一跃迁的贡献程度，达到调整极化依赖的目的，而峰宽常数与激发能量有关。
              </p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>在二维磁体CrI3中通过对称性调节非弹性光散射</template>
            <template
              v-slot:english_title
            >Tuning inelastic light scattering via symmetry control in the two-dimensional magnet CrI3</template>
            <template v-slot:author>Huang 2020</template>
            <template v-slot:content>
              <p>在居里温度45K之上，单层是顺磁性的。拉曼光谱中发现了2个A1g的峰和2个Eg的峰，共有4个Eg模式，另两个可能由于过于小的散射截面而没有被发现。线偏振ZXYZ模式中本应出现的A1g峰没有被发现则是由于共振效应等因素。</p>
              <p>当温度降到居里温度以下时，A1g峰本来的极化方向出现了偏转，偏转角度随着温度的进一步下降继续增大，这是由于单层中的铁磁序。</p>
              <p>换用圆偏振光，居里点以上时，入射和出射的偏振性保持一致，不存在偏振翻转；居里点以下时其中一种偏振型占主导，改变铁磁方向，则相反的偏振型占主导，也不存在偏振翻转。</p>
              <p>对于双层晶体，在零场条件（反铁磁态）和磁场条件（全极化态）下出现拉曼蜂的偏移。</p>
              <p>在双层晶体中，由于弱的范德瓦尔斯相互作用，原先单层中的一个声子模被分为两个，又由于中心对称性，分为一个奇宇称模式和一个偶宇称模式（称为Davydov split）。不同的态的宇称对称性不同，故有的态下某些宇称模式的不可见，故拉曼蜂显示为另一个宇称的峰。</p>
              <p>E模式没有显著受磁序影响。</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>磁性外尔半金属Co3Sn2S2中的电子关联和平带</template>
            <template
              v-slot:english_title
            >Electronic correlations and flattened band in magnetic Weyl semimetal Co3Sn2S2</template>
            <template v-slot:author>Xu 2019</template>
            <template v-slot:content>
              <p>费米能处的态主要由Co的3d轨道贡献。</p>
              <p>铁磁态的转变温度在177K附近。</p>
              <p>反射光谱中的痕迹包括铁磁自旋的相互作用，红外活性的声子模式以及其他。</p>
              <p>电子动能占比少，说明多体电子相互作用的显著存在。这既不是因为自旋相互作用，也不是因为极化子的存在，也不是因为声子作用，只是由于中等强度的电子关联。</p>
              <p>电子关联显著的缩窄了带间间隙。</p>
              <p>当计算加入多体作用后，出现了连接外尔点的接近费米面的接近于平的（无色散）的带，贡献了极大的DoS。平带之间的跃迁在光导率上表现为洛伦兹峰。实验峰的多峰拟合与DFT计算结果一致。</p>
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
      numOfArticles: 7
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