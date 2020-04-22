<template>
  <v-container>
    <v-row>
      <v-col>
        <v-timeline dense>
          <v-timeline-item v-for="moment in moments" :key="moment.key" fill-dot class="white--text">
            <template v-slot:icon>
              <span>{{moment.icon}}</span>
            </template>

            <v-card>
              <v-carousel cycle show-arrows-on-hover height="this.hight_of_img()">
                <v-carousel-item v-for="(img,i) in moment.imgs" :src="img" :key="i" contain></v-carousel-item>
              </v-carousel>
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
          imgs: [
            "/img/Moments/2020-04-23/1.webp",
            "/img/Moments/2020-04-23/2.webp",
            "/img/Moments/2020-04-23/3.webp",
            "/img/Moments/2020-04-23/4.webp"
          ],
          title: "2020-04-23",
          text:
            "打迦摩贼难打，打的还不是满德川迦摩。倒是哭起来的立绘真好看。可惜300石只拿了4个雪山樱，歪出大王和小玉。",
          icon: "4月",
          key: 3
        },
        {
          imgs: ["/img/Moments/2020-03-26/1.webp"],
          title: "2020-03-26",
          text:
            "打帝王花，帝王花耐性低了之后用两个始皇帝宝具加梅林爆伤输出，一张中间红卡150万，尾红不知道多少伤害。",
          icon: "3月",
          key: 2
        },
        {
          imgs: ["/img/Moments/2020-03-19/1.webp"],
          title: "2020-03-19",
          text: "打过了零灯杀生院，手机电池杀手",
          icon: "3月",
          key: 1
        }
      ],
      windowSize: { x: 0, y: 0 }
    };
  },
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  },
  computed: {
    hight_of_img() {
      return (this.windowSize.x / 1920) * 1080;
    }
  },
  head() {
    return {
      title: "个人动态"
    };
  }
};
</script>