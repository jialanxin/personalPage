<template>
  <v-container>
    <v-row>
      <v-col>
        <v-timeline dense >
          <v-timeline-item fill-dot class="white--text">
            <template v-slot:icon>
          <span>3月</span>
        </template>
             
           
            <v-card>
                <v-img src="/img/Moments/2020-03-19/1.webp"></v-img>
                <v-card-title>2020-03-19</v-card-title>
                <v-card-text>打过了零灯杀生院，手机电池杀手</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "个人工具"
    };
  }
};
</script>