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
    <v-row>
      <v-col>
          <p>写心得嘛，不搞点Rss，能让阅读器收到更新，就总觉得差了点什么，比不上别人用Wordpress和typecho的，现在终于会搞了！</p>
          <p>主要使用的是nuxt社区的插件<code>@nuxtjs/feed</code>。过程不复杂，跟着指引写就完事了。过程中还遇到了插件里的bug，官方示例里的一个是不能用的，还是看issue才发现有同道中人。</p>
          <p>最后就是在布局左上角加一个<v-icon>mdi-rss-box</v-icon>按钮，这时候要注意，xml页面不再受vue-router管理，不能用nuxt的<code>to</code>属性，需要回归到原始的<code>href</code>属性。</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import json from "../posts.json";
export default {
  data() {
    return {
      title: "创建Rss订阅",
      lastUpdate: ""
    };
  },
  mounted() {
    json.forEach(post => {
      if (post.title === this.title) {
        this.lastUpdate = post.lastUpdate;
      }
    });
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>