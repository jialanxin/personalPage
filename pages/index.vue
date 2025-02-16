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
          <v-pagination v-model="page_blue" :length="numOfPages" @input="goToPageNum"></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import json from "./posts.json"

const route = useRoute()
const router = useRouter()

const page_blue = ref(undefined)
const page = ref(undefined)
const posts = ref(json)

if (route.query.page == undefined) {
  page.value = 1
  page_blue.value = page.value
} else if (route.query.page > numOfPages.value) {
  page.value = numOfPages.value
  page_blue.value = page.value
} else {
  page.value = Number(route.query.page)
  page_blue.value = page.value
}

const numOfPages = computed(() => Math.ceil(posts.value.length / 5))
const shownPosts = computed(() => {
  const beginIndex = (page.value - 1) * 5
  let endIndex = page.value * 5
  if (endIndex > posts.value.length - 1) {
    endIndex = posts.value.length
  }
  return posts.value.slice(beginIndex, endIndex)
})

function goToPageNum(num) {
  if (num < 1) {
    router.push({ path: "", query: { page: "1" } })
  } else if (num > numOfPages.value) {
    router.push({ path: "", query: { page: numOfPages.value } })
  } else {
    router.push({ path: "", query: { page: num } })
  }
}
</script>
