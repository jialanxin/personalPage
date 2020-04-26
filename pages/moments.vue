<template>
  <v-container>
    <v-row>
      <v-col>
        <v-timeline dense>
          <v-timeline-item v-for="(moment,idx) in moments" :key="idx" fill-dot class="white--text">
            <template v-slot:icon>
              <span>{{moment.icon}}</span>
            </template>

            <v-card>
              <v-carousel show-arrows-on-hover hide-delimiter-background height="auto">
                <v-carousel-item v-for="(img,i) in moment.imgs" :src="img.src" :key="i" contain></v-carousel-item>
              </v-carousel>
              <v-card-text v-if="moment.hasOwnProperty('text')">{{moment.text}}</v-card-text>
              <v-card-text v-else v-html="moment.html"></v-card-text>
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
          text: "要给Overleaf使用Git真就要会员，8刀一月不含税真的贵，而且它的默认仓库必须用git clone，设置为远程库结果和本地没有共同祖先，没法merge，没办法必须要覆写本地才能把历史给它接上。",
          icon: "5/07"
        },
        {
          imgs: [{ src: "/img/Moments/2020-04-30/1.webp" }],
          text: "活动换了5个护符，2个BX，我麻了，真就只没有迦摩。",
          icon: "4/30"
        },
        {
          imgs: [{ src: "/img/Moments/2020-04-25/carbon.svg" }],
          html:
            '今天在车上把服务器上的ubuntu升级到了20.04，做法参照<a href="https://soulteary.com/2020/04/25/server-upgrade-ubuntu-20-04-lts.html">《服务端升级 Ubuntu 20.04 LTS 记录》</a>，就是不知道升级之后默认的ssh端口号也会换。。。',
          icon: "4/25"
        },
        {
          imgs: [
            { src: "/img/Moments/2020-04-23/1.webp" },
            { src: "/img/Moments/2020-04-23/2.webp" },
            { src: "/img/Moments/2020-04-23/3.webp" },
            { src: "/img/Moments/2020-04-23/4.webp" }
          ],
          text:
            "打迦摩贼难打，打的还不是满德川迦摩。倒是哭起来的立绘真好看。可惜300石只拿了4个雪山樱，歪出大王和小玉。",
          icon: "4/23"
        },
        {
          imgs: [{ src: "/img/Moments/2020-03-26/1.webp" }],
          text:
            "打帝王花，帝王花耐性低了之后用两个始皇帝宝具加梅林爆伤输出，一张中间红卡150万，尾红不知道多少伤害。",
          icon: "3/26"
        },
        {
          imgs: [{ src: "/img/Moments/2020-03-19/1.webp" }],
          text: "打过了零灯杀生院，手机电池杀手",
          icon: "3/19"
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