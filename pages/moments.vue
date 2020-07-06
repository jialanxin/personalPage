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
              <v-container v-if="moment.hasOwnProperty('imgs')">
                <v-row justify="center">
                  <v-col v-for="(img,idx) in moment.imgs" :key="idx" cols="4">
                    <v-img :src="img.src" aspect-ratio="1" @click="clickOnImg(moment,img)"></v-img>
                  </v-col>
                  <v-overlay :value="overlayOn">
                    <v-row>
                      <v-col>
                        <v-carousel hide-delimiter-background v-model="idxOnOverlay" height="auto">
                          <v-carousel-item v-for="(src,ix) in shownOnOverlay" :key="ix">
                            <v-img :src="src" contain :max-width="imgWidth" :max-height="imgHeight"></v-img>
                          </v-carousel-item>
                        </v-carousel>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="text-center">
                        <v-btn icon @click="overlayOn = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-overlay>
                </v-row>
              </v-container>
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
          imgs: [
            { src: "/img/Moments/2020-07-06/1.jpg" },
            { src: "/img/Moments/2020-07-06/2.jpg" },
            { src: "/img/Moments/2020-07-06/3.jpg" }
          ],
          text: "480石头，35呼符，1个阿周那，2个马嘶，后面几百个石头想抽二宝结果到处歪。",
          icon: "7/6"
        },
        {
          text:
            "昨天晚上手机突然就开始无限重启了，今天去售后修要400块觉得不太划算，就到小米之家以旧换新了，换了红米K30 Pro，售价2700，旧手机折了500块。换机导数据的时候一直祈祷着旧手机别中途无限重启，好在一直坚持到了最后。",
          icon: "7/2"
        },
        {
          text:
            "FGO2.4章花了两天通关了，只有最后两次打阿周那和空想树比较难.19-1的阿周那是迦摩体验关，借了一个3宝迦摩，直接秒第一面的芦屋道满，打阿周那用月灵髓液撑住等迦摩np满。19-2还是用月灵髓液硬撑，令咒给迦尔纳放宝具。19-4用艾蕾过，中间渣操翻车了一次，要点还是月灵髓液。",
          icon: "6/30"
        },
        {
          text:
            "练了二十多天的车，终于把科二考过了。第一圈还没开出去多久就报不及格，原来是前面的人把数码的安全带插孔给解开了，还掉在了座椅下面，而我把安全带插在了车本身的机械安全带插孔里。还好第二圈90分，就是坡道离边线稍微远了一些扣了十分。还好第二圈过了，要不然就被坑了。😨",
          icon: "6/29"
        },
        {
          text: "🕯️",
          icon: "5/13"
        },
        {
          text:
            "要给Overleaf使用Git真就要会员，8刀一月不含税真的贵，而且它的默认仓库必须用git clone，设置为远程库结果和本地没有共同祖先，没法merge，没办法必须要覆写本地才能把历史给它接上。",
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
            '今天在车上把服务器上的ubuntu升级到了20.04，做法参照<a target="_blank" href="https://soulteary.com/2020/04/25/server-upgrade-ubuntu-20-04-lts.html">《服务端升级 Ubuntu 20.04 LTS 记录》</a>，就是不知道升级之后默认的ssh端口号也会换。。。',
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
      ],
      overlayOn: false,
      shownOnOverlay: [],
      idxOnOverlay: 0
    };
  },
  methods: {
    clickOnImg: function(moment, img) {
      this.overlayOn = true;
      this.shownOnOverlay = moment.imgs.map(img => img.src);
      this.idxOnOverlay = this.shownOnOverlay.indexOf(img.src);
    }
  },
  computed: {
    imgWidth: function() {
      return window.innerWidth;
    },
    imgHeight: function() {
      return window.innerHeight - 50;
    }
  },
  head() {
    return {
      title: "个人动态"
    };
  }
};
</script>