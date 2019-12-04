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
        <h2>强光学激发下，单层MoSe<sub>2</sub>的三激子非线性动力学</h2>
        <h3>Nonlinear dynamics of trions under strong optical excitation in monolayer MoSe<sub>2</sub></h3>
        <p class="font-weight-light">Ye 2018</p>
        <p>A-excition 1.653eV Trion 1.622eV</p>
        <p>pump 1.690~1.645eV</p>
        <p>Triexponential fit: A<sub>1</sub> + ,A<sub>2</sub> + ,A<sub>3</sub> - ,&tau;<sub>1</sub> 2.0ps ,&tau;<sub>2</sub> 450ps ,&tau;<sub>3</sub> 10ps</p>
        <p>&tau;<sub>1</sub>,&tau;<sub>2</sub>各pump下不变，随pump energy&uarr;，A<sub>1</sub>+A<sub>2</sub>&uarr;，A<sub>3</sub>&uarr;</p>
        <p>pump 1.69eV probe 1.65eV</p>
        <p>Biexponential: &tau;<sub>1</sub>, 6.2ps, radiative recombination/phonon scattering; &tau;<sub>2</sub>, 67ps, nonrediative recombination/defect</p>
        <p>pump 1.69eV probe 1.62eV</p>
        <p>Biexponential: &tau;<sub>1</sub>, 2.2ps, trion formation time; &tau;<sub>2</sub>, 450ps, population loss of trion</p>
        <p>pump 1.69eV, at T = 0.5ps, peaks at 1.65/1.62</p>
        <p>pump 1.65eV, at T = 0.5ps, peaks at 1.65, negative at 1.62, redshift and boardening of peak,bandgap renormailzation</p>
        <p>Near timezero, signal reversal: combined contribution from the coherent exciton-trion coupling and the blue-detuned optical Stark effect, as well as from the incoherent population decay from excitons and trions</p>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "12月读书笔记",
      lastUpdate: "2019-12-04"
    };
  }
};
</script>