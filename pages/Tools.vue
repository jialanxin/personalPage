<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn href="https://citenet.lxj230.xyz" target="_blank" color="primary">CiteNet——文献引用网络分析工具</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <md5 />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <OpticalUnitConvert />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OpticalUnitConvert from "../components/OpticalUnitConvert";
import md5 from "../components/md5.vue";
export default {
  components: { OpticalUnitConvert, md5 },
  head() {
    return {
      title: "个人工具"
    };
  }
};
</script>