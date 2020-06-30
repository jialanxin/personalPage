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
            <template v-slot:chinese_title>三维固体中的外尔和狄拉克半金属</template>
            <template v-slot:english_title>Weyl and Dirac semimetals in three-dimensional solids</template>
            <template v-slot:author>Armitage 2018</template>
            <template v-slot:content>
              <p>
                量子力学中，“意外的简并”(accidental degeneracy)指的是巧合发生的，没有对称性保护的能量简并。
                <a
                  href="http://doi.org/10.1007/s11467-017-0712-8"
                  target="_blank"
                >这一篇文章</a>证明了任何的两重简并都是由隐藏的对称性保护的，可由一个平方为-1的反幺正算符表示。所以“意外的简并”并不是真正的没有对称性保护。
              </p>
              <p>外尔费米子的传播方向和它的自旋平行或反平行，三维中不存在单个手性的外尔费米子，但可以存在动量分离的一对，这就是外尔半金属。</p>
              <p>和物理磁场不同，贝里场允许存在磁单极子。贝里场的存在还恢复了仅有洛伦磁力导致的r-p运动方程的对称性破缺。由此可以半经典地描述电子的运动。</p>
              <p>小的哈密顿量上的扰动不影响外尔点的存在。</p>
              <p>外尔半金属的特征之一：外尔点之间的有拓扑保护的表面态费米弧</p>
              <p>特征之二：手征反常，外尔点邻近区域的电子密度会因为电场和磁场的存在而发生变化，即外尔点成为电子的源和漏，所以外尔点之间的相对化学势不同。在静磁场下，不同的化学势的外尔点之间又存在着平行于磁场的次生电流（手征磁效应），造成实验上测量的平行于磁场方向的依赖磁场强度的负阻效应。</p>
              <p>外尔半金属作为二维陈绝缘体的堆叠，每一层陈绝缘体都有边缘态的霍尔电导。烧绿石结构的晶体，在用非轴向微小应力破坏了对称性之后可以探测到反常霍尔效应（无外加磁场的横向电导）。</p>
              <p>手征磁效应和反常霍尔效应都可以放到一个轴子的电动力学的框架下去理解。</p>
              <p>施加一个磁场，电子将在费米弧上滑动，并穿越外尔点到达另一个表面态，这个轨迹称为外尔轨道。</p>
            </template>
          </ReadingPanel>
          <ReadingPanel>
            <template v-slot:chinese_title>贝里相位导致的电子效应</template>
            <template v-slot:english_title>Berry phase effects on electronic properties</template>
            <template v-slot:author>Xiao 2010</template>
            <template v-slot:content>
              <p>
                几篇介绍贝里相位的知乎专栏：
                <a href="https://zhuanlan.zhihu.com/p/24086259" target="_blank">量子绝热定理</a>、
                <a href="https://zhuanlan.zhihu.com/p/24110994" target="_blank">Berry phase（几何相位）</a>、
                <a href="https://zhuanlan.zhihu.com/p/24402528" target="_blank">贝利相位、联络与曲率</a>
              </p>
              <p>贝里相位γ<sub>n</sub>是一个规范不变量，只能加上2π的整数倍。</p>
              <p>与贝里矢势不同，贝里曲率<mathexpression tex="\Omega^n_{\mu\nu}(\bold{R})"></mathexpression>是一个规范不变量，并且是可观测量，可以被认为是参数空间中的磁场。</p>
              <p>态矢量的简并会导致贝里曲率形成参数空间中的单极子。</p>
              <p>贝里曲率在一个闭流形上的积分除以2π等于其中的单极子数目，称为陈数。</p>
              <p>关于贝里曲率对布罗赫电子运动的影响，在具有时间反演对称性和空间反演对称性的晶体中，在一个布里渊区内，贝里曲率的的影响相互抵消。</p>
            </template>
          </ReadingPanel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import ReadingPanel from "../../components/ReadingPanel.vue";
import mathexpression from "../../components/mathexpression.vue"
export default {
  components: { ReadingPanel,mathexpression },
  data() {
    return {
      title: "6月读书笔记",
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
  computed:{
    berry_curvration:function(){
      let html = katex.renderToString("\\Omega^n_{\\mu}")
      return html
    }
  },
  head() {
    return { title: this.title };
  }
};
</script>
