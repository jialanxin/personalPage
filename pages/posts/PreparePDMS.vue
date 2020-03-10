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
        <p class="font-weight-bold">把旧博客上的东西搬一点过来，原文写于2018年12月15日</p>
        <p>今天试着做了一下PDMS，步骤如下：</p>
        <ol>
            <li>将Base与Agent按质量比7:1(10:1)混合搅拌10min。</li>
            <li>将混合物倒入干净的培养皿中</li>
            <li>将培养皿平放入真空罐内，静置1d（2d才干了）</li>
            <li>切割PDMS</li>
        </ol>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  data(){
    return {
      title: "如何制作PDMS",
      lastUpdate:"2020-03-10"
    }
  },
  head(){
    return {
      title: this.title
    }
  }
  
}
</script>