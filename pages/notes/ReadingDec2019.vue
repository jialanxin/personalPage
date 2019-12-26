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
        <h2>
          强光学激发下，单层MoSe
          <sub>2</sub>的三激子非线性动力学
        </h2>
        <h3>
          Nonlinear dynamics of trions under strong optical excitation in monolayer MoSe
          <sub>2</sub>
        </h3>
        <p class="font-weight-light">Ye 2018</p>
        <p>A-excition 1.653eV Trion 1.622eV</p>
        <p>pump 1.690~1.645eV</p>
        <p>
          Triexponential fit: A
          <sub>1</sub> + ,A
          <sub>2</sub> + ,A
          <sub>3</sub> - ,&tau;
          <sub>1</sub> 2.0ps ,&tau;
          <sub>2</sub> 450ps ,&tau;
          <sub>3</sub> 10ps
        </p>
        <p>
          &tau;
          <sub>1</sub>,&tau;
          <sub>2</sub>各pump下不变，随pump energy&uarr;，A
          <sub>1</sub>+A
          <sub>2</sub>&uarr;，A
          <sub>3</sub>&uarr;
        </p>
        <p>pump 1.69eV probe 1.65eV</p>
        <p>
          Biexponential: &tau;
          <sub>1</sub>, 6.2ps, radiative recombination/phonon scattering; &tau;
          <sub>2</sub>, 67ps, nonrediative recombination/defect
        </p>
        <p>pump 1.69eV probe 1.62eV</p>
        <p>
          Biexponential: &tau;
          <sub>1</sub>, 2.2ps, trion formation time; &tau;
          <sub>2</sub>, 450ps, population loss of trion
        </p>
        <p>pump 1.69eV, at T = 0.5ps, peaks at 1.65/1.62</p>
        <p>pump 1.65eV, at T = 0.5ps, peaks at 1.65, negative at 1.62, redshift and boardening of peak,bandgap renormailzation</p>
        <p>Near timezero, signal reversal: combined contribution from the coherent exciton-trion coupling and the blue-detuned optical Stark effect, as well as from the incoherent population decay from excitons and trions</p>
        <v-divider />
        <h2 class="mt-4">氧化石墨烯及其还原衍生物的绝缘体-半导体-半金属转变的超快光谱学研究</h2>
        <h3>Ultrafast Spectroscopic Study of Insulator−Semiconductor−Semimetal Transitions in Graphene Oxide and Its Reduced Derivatives</h3>
        <p class="font-weight-light">Wang 2019</p>
        <p>部分还原氧化石墨烯（rGO）随着氧组分的降低会经历绝缘体-半导体-半金属的转变，原因是sp2电子云重新占据主要分布。</p>
        <p>pump 400nm/500nm/600nm probe 400-850nm</p>
        <p>T-DA positive: 由氧官能团引起 negative：band-filling effect</p>
        <p>从绝缘体到半导体到半金属，激发这一点T-DA为负，DOS越连贯，激发点的红方向negative区域越长</p>
        <p>半导体类型中，还会有负峰出现在激发区域外，此处的电子累积在带边</p>
        <p>从绝缘体到半导体到半金属，弛豫时间也变短了</p>
        <v-divider />
        <h2 class="mt-4">从子带间跃迁确定剥离的少层石墨烯的载流子寿命</h2>
        <h3>Carrier Lifetime in Exfoliated Few-Layer Graphene Determined from Intersubband Optical Transitions</h3>
        <p class="font-weight-light">Limmer 2013</p>
        <p>在半导体中可以观察PL时间或者probe设置在bandgap位置来观察载流子寿命，半金属中不允许</p>
        <p>pump 1.55eV probe 0.35-0.8eV</p>
        <p>1层，T-DA全为负，2345层存在正的区域。正的区域由子带间跃迁导致。</p>
        <p>The depopulation of states at a specific k is determined by several physical processes such as intraband relaxation by optical and acoustic phonons, Coulomb scattering, and eventually interband recombination </p>
        <p>Thus, it is difficult to extract reliable information on the carrier lifetime from the bleaching, since a number of processes are contributing to the recorded decay which has a signal vanishing without necessarily having the graphene carrier distribution equilibrated at room temperature. Often a typical biexponential curve is observed, which is ascribed to optical and acoustic phonon scattering </p>
        <p>the decay of the intersubband photoinduced absorptions is only sensitive to the presence of a hot carrier distribution which differs from the one at room temperature. </p>
        <v-divider />
        <h2 class="mt-4">CVD生长的石墨烯中的超快电子-光学声子散射和赝粒子寿命</h2>
        <h3>Ultrafast Electron-Optical Phonon Scattering and Quasiparticle Lifetime in CVD-Grown Graphene</h3>
        <p class="font-weight-light">Shang 2011</p>
        <p>pump 350nm probe 400~650nm</p>
        <v-divider />
        <h2 class="mt-4">PtSe<sub>2</sub>中半导体到半金属转变的非线性光学信号 </h2>
        <h3>Nonlinear Optical Signatures of the Transition from Semiconductor to Semimetal in PtSe<sub>2</sub> </h3>
        <p class="font-weight-light">Wang 2019</p>
        <p>从500nm到2000nm的波长内，吸收光谱和反射光谱，随层数增加，吸收变强。Tauc图外推表明，层数增加，带隙减少(0.87eV到0)，半导体转变为半金属。</p>
        <p>pump和probe在1040nm(1.19eV),&Delta;T/T的正信号源于Pauli Blocking，负信号源于激发形成的自由载流子对probe光子的增强吸收。</p>
        <p>有几个途径，半导体情形，单光子吸收加声子（基态到导带底），双光子吸收（基态到导带1），自由电子激发（导带底、导带1到导带2），e-ph（导带2到导带1），e-ph（导带1到导带底），e-h复合（数百ps）；半金属情形，只有单光子吸收，自由电子激发，e-ph，e-h复合（e-e,e-ph介导，13ps）</p>
        <v-divider />
        <h2 class="mt-4">通过Mn掺杂减缓狄拉克半金属Cd<sub>3</sub>As<sub>2</sub>中的光生载流子弛豫 </h2>
        <h3>Slowing down photocarrier relaxation in Dirac semimetal Cd<sub>3</sub>As<sub>2</sub> via Mn doping</h3>
        <p class="font-weight-light">Sun 2019</p>
        <p></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "12月读书笔记",
      lastUpdate: "2019-12-26"
    };
  }
};
</script>
