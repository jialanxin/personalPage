<template>
<div>
  <v-list-item two-line>
    <v-list-item-content>
        <v-contianer>
            <v-row justify="space-between" align="center">
                <v-col>
    <nuxt-link :to=post.link ><v-btn text class="title d-inline-flex" >{{post.title}}</v-btn></nuxt-link>
                </v-col>
                <v-spacer />
                <v-col class="right">
                   {{post.lastUpdate}}
                </v-col>
            </v-row>
        </v-contianer>
    <!-- <v-list-item-subtitle class="pa-4"></v-list-item-subtitle> -->
  </v-list-item-content>
  </v-list-item>
  <v-divider></v-divider>
</div>
</template>

<script>
export default {
    name:"Postcard",
    props:["post"]
}
</script>

<style scoped>
a {
    text-decoration: none
}
.right{
    text-align: right
}
</style>