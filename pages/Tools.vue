<template>
<v-container>
  <v-row>
    <v-col class="text-center">
      <OpticalUnitConvert />
    </v-col>    
  </v-row>
    
</v-container>

  
</template>

<script>
import OpticalUnitConvert from '../components/OpticalUnitConvert'
export default {
  components:{OpticalUnitConvert},
  head(){
    return{
    title:"个人工具"}
  }
}
</script>