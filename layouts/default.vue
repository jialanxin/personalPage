<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      
      <v-btn icon href="/feed.xml">
        <v-icon>mdi-rss</v-icon>
      </v-btn>
      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer absolute app>
      <span>
        &copy; 2019-2020 Open sources and contact me on <v-btn x-small dark href="https://github.com/jialanxin/personalPage/issues"><v-icon>mdi-github</v-icon> issue</v-btn>.
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      clipped: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-book-open-variant",
          title: "Reading Notes",
          to: "/notes"
        },
        {
          icon: "mdi-timeline-text",
          title: "Moments",
          to: "/moments"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Tools",
          to: "/Tools"
        }
      ],
      title: "My Personal Page"
    };
  }
};
</script>
