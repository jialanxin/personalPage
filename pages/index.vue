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
          <v-pagination v-model="page" :length="numOfPages"></v-pagination>
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
      page: 1,
      posts: json
    };
  },
  head() {
    return {
      title: "首页"
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      for (let idx = 0; idx < vm.posts.length; idx++) {
        if (vm.posts[idx].link === from.path) {
          vm.page = Math.ceil((idx + 1) / 5);
        }
      }
    });
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
