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
      <v-row >
        <v-col>
        <v-list two-line>
          <v-list-item v-for="post in posts" :key=post.id  :to=post.link nuxt>
            <v-list-content>
              <v-list-item-title v-text="post.title"></v-list-item-title>
              <v-list-item-subtitle v-text="post.lastUpdate"></v-list-item-subtitle>
            </v-list-content>
          </v-list-item>
        </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 6,
          title: "为Caddy2设置HTTPS",
          lastUpdate: "2020-03-06",
          link: "/posts/Caddy2HTTPS"
        },
        {
          id: 5,
          title: "记录-广州签证之行",
          lastUpdate: "2020-03-05",
          link: "/posts/VisaGuangzhou"
        },
        {
          id: 4,
          title: "安装ArchWSL",
          lastUpdate: "2020-03-02",
          link: "/posts/InstallArchWSL"
        },
        {
          id: 3,
          title: "Docker-compose部署aria2和filebrowser",
          lastUpdate: "2019-12-23",
          link: "/posts/Aria2Filebrowser"
        },
        {
          id: 2,
          title: "Docker-compose部署静态页面",
          lastUpdate: "2019-12-03",
          link: "/posts/DockerDeploy"
        },
        {
          id: 1,
          title: "用Nuxt编写一个个人页面",
          lastUpdate: "2019-11-30",
          link: "/posts/ToBuildNuxtBlog"
        }
      ]
    };
  },
  head(){
    return{
      title:"首页"
    }
  }
};
</script>
