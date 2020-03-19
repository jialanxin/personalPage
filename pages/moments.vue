<template>
  <v-container>
    <v-row>
      <v-col>
        <v-timeline>
          <v-timeline-item>
            <template v-slot:opposite>
              <span>2020-03-19</span>
            </template>
            <v-card>
                <v-img src="/img/Moments/2020-03-19/1.webp"></v-img>
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