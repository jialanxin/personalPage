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
        <p class="font-weight-bold">把旧博客上的东西搬一点过来，原文写于2019年1月12日</p>
        <ol>
            <li>Clean the beaker in ultrasound with acetone then IPA then DI water.</li>
            <v-alert type="warning" border="left" colored-border class="font-italic font-weight-light">make sure no residual of acetone in the beaker because acetone may react with chloroform and produce explosive compounds.</v-alert>
            <li>Dissolve polycarbonate in chloroform, mass ratio 6% (6%~10%), using ultrasound to accelerate the dissolution.</li>
            <v-alert type="warning" border="left" colored-border class="font-italic font-weight-light">must wear a mask when using chloroform because chloroform can generate COCl<sub>2</sub> (10 times toxicity of Cl<sub>2</sub>) under light</v-alert>
            <li>Clean 3 glass slides with IPA, remove dust.</li>
            <li>Put a PDMS membrane near the edge of a glass side.</li>
            <li>Take a piece of double-sided tape and cut out a diamond shape hole at the center. Cover the glass slide with the tape and expose PDMS from the hole.</li>
            <v-img src="/img/DryTransfer/1.webp" max-width="400px"/>
            <li>Drop some polycarbonate solution on one glass slide. Use another glass slide to even the PC solution and rotate the slides to separate them.</li>
            <v-img src="/img/DryTransfer/2.webp" max-width="400px"/>
            <li>Use double side tape with hole to paste the PC film. Peel out this tape from the glass slide.</li>
            <v-img src="/img/DryTransfer/3.webp" max-width="400px"/>
            <li>Stick the tape with PC to the tape with PDMS. The tape sides are face to face. Align the hole to hole.</li>
            <v-img src="/img/DryTransfer/4.webp" max-width="400px"/>
            <li>Cut out the outer area of the tape.</li>
            <v-img src="/img/DryTransfer/5.webp" max-width="400px"/>
            <li>Fix the glass slide to the holder. Target the hole at a 2D flake.</li>
            <li>Slowly tune down the glass slide until PC film touch the flake surface. We can see the color change when the contact happens.</li>
            <v-img src="/img/DryTransfer/6.webp" />
            <li>Heat the sample to 80 &#8451; for 5 min and then cool down to room temperature.</li>
            <li>Slowly pick up the glass slide. We can find the disappearance of the target flask on the substrate and when we focus onto the polymer membrane we find the profile of such flake.</li>
            <v-img src="/img/DryTransfer/7.webp" />
            <li>Target the profile to another flake. Slowly tune down the glass slide until PC touch the sample.</li>
            <v-img src="/img/DryTransfer/8.webp" />
            <li>Heat up to 170 C for 5 min or longer.</li>
            <li>Pick up the glass slides first and then cool down the sample.</li>
            <v-img src="/img/DryTransfer/9.webp" />
            <li>Clean the sample by soaking in chloroform, acetone and IPA</li>
            <v-alert type="warning" border="left" colored-border class="font-italic font-weight-light">Clean up chloroform before using acetone to ensure safety</v-alert>
            <v-img src="/img/DryTransfer/10.webp" max-width="400px"/>
        </ol>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  data(){
    return {
      title: "Procedure of dry transfer",
      lastUpdate:"2020-03-11"
    }
  },
  head(){
    return {
      title: this.title
    }
  }
  
}
</script>