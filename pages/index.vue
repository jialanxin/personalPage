<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <div class="display-1">Newest Articles</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list two-line>
            <v-list-item v-for="(post,i) in shownPosts" :key="i" :to="post.link" nuxt>
              <v-list-item-content>
                <v-list-item-title v-text="post.title"></v-list-item-title>
                <v-list-item-subtitle v-text="post.lastUpdate"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-pagination v-model="page_blue" :length="numOfPages" @input="this.goToPageNum"></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import json from "./posts.json";
export default {
  data() {
    return {
      page_blue: undefined,
      page: undefined,
      posts: json
    };
  },
  head() {
    return {
      title: "首页"
    };
  },
  created: function() {
    if (this.$route.query.page == undefined) {
      this.page = 1;
      this.page_blue = this.page;
    } else if (this.$route.query.page > this.numOfPages) {
      this.page = this.numOfPages;
      this.page_blue = this.page;
    } else {
      this.page = Number(this.$route.query.page);
      this.page_blue = this.page;
    }
  },
  methods: {
    goToPageNum(num) {
      if (num < 1) {
        this.$router.push({ path: "", query: { page: "1" } });
      } else if (num > this.numOfPages) {
        this.$router.push({ path: "", query: { page: this.numOfPages } });
      } else {
        this.$router.push({ path: "", query: { page: num } });
      }
    }
  },
  beforeRouteUpdate: function(to, from, next) {
    if (to.query.page == undefined) {
      this.page = 1;
      this.page_blue = this.page;
    } else {
      this.page = Number(to.query.page);
      this.page_blue = this.page;
    }
    next();
  },
  computed: {
    numOfPages: function() {
      return Math.ceil(this.posts.length / 5);
    },
    shownPosts: function() {
      var beginIndex = (this.page - 1) * 5;
      var endIndex = this.page * 5;
      if (endIndex > this.posts.length - 1) {
        endIndex = this.posts.length;
      }
      return this.posts.slice(beginIndex, endIndex);
    }
  }
};
</script>
