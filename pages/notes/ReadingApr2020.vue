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
    </v-container>
</template>

<script>
export default {
      data() {
    return {
      title: "4月读书笔记",
      lastUpdate: "2020-04-01"
    };
  },
  head(){
    return {title:this.title}
  }
}
</script>