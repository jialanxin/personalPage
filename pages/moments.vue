<template>
  <v-container>
    <v-row>
      <v-col>
        <v-timeline dense>
          <v-timeline-item v-for="moment in moments" :key=moment.key fill-dot class="white--text">
            <template v-slot:icon>
              <span>{{moment.icon}}</span>
            </template>

            <v-card>
              <v-img :src=moment.img></v-img>
              <v-card-title>{{moment.title}}</v-card-title>
              <v-card-text>{{moment.text}}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      moments: [
        {
          img: "/img/Moments/2020-03-26/1.webp",
          title: "2020-03-26",
          text: "打帝王花，帝王花耐性低了之后用两个始皇帝宝具加梅林爆伤输出，一张中间红卡150万，尾红不知道多少伤害。",
          icon: "3月",
          key:2
        },
        {
          img: "/img/Moments/2020-03-19/1.webp",
          title: "2020-03-19",
          text: "打过了零灯杀生院，手机电池杀手",
          icon: "3月",
          key:1
        }
      ]
    };
  },
  head() {
    return {
      title: "个人动态"
    };
  }
};
</script>