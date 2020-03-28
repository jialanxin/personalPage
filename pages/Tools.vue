<template>
  <v-container>
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