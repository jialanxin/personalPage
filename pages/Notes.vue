<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div class="subtitle-1 font-weight-light">My personal page is still under devlopment.</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="display-1">Newest Articles</div>
        </v-col>
      </v-row>
      <v-row v-for="post in posts" :key="post.id">
        <v-col>
          <Postcard :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Postcard from "../components/Postcard";
export default {
  components: {
    Postcard
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "12月读书笔记",
          lastUpdate: "2019-12-04",
          link: "/notes/ReadingDec2019"
        },

      ]
    };
  }
};
</script>