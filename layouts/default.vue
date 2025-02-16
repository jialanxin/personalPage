<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-title>
            <v-list-item-subtitle>
              <v-icon start>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-subtitle>
          </v-list-item-title>
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
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
    <v-footer absolute app>
      <span>
        &copy; 2019-2020 Open sources and contact me on
        <v-btn
          color="primary"
          variant="text"
          href="https://github.com/jialanxin/personalPage/issues"
        >
          <v-icon>mdi-github</v-icon>issue
        </v-btn>.
      </span>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const clipped = ref(true);
const title = ref("My Personal Page");

const items = ref([
  {
    icon: "mdi-apps",
    title: "Home",
    to: "/",
  },
  {
    icon: "mdi-book-open-variant",
    title: "Reading Notes",
    to: "/notes",
  },
  {
    icon: "mdi-timeline-text",
    title: "Moments",
    to: "/moments",
  },
  {
    icon: "mdi-chart-bubble",
    title: "Tools",
    to: "/Tools",
  },
  {
    icon: "mdi-currency-usd",
    title: "Fund",
    to: "/Fund",
  },
]);
</script>
