<template>
  <v-container>
    <v-row>
     极客时间
    </v-row>
    <v-row>
      <v-col>
        <p class="font-weight-light">latest update: {{lastUpdate}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p>想用github actions的缘由是，一直以来，博客的编写和部署是分在两个仓库里进行的，中间涉及到编译出的站点文件的拷贝工作。每次都会变化的js文件把部署仓库的git撑的好大。采用github actions之后就只需要把代码推送上去，就直接得到最后的docker镜像了。</p>
        <p>怎么操作没什么好说的，看官方文档，还有大量的示例可以用。只把我遇到的一些坑记录一下。</p>
        <p>
          首先是
          <kbd>nuxt generate</kbd>得到了
          <code>dist</code>文件夹，在使用
          <code>actions/upload-artifact</code>之后得到的是一个zip压缩包，在接下来的步骤中使用
          <code>actions/download-artifact</code>时会自动解包成文件夹。我以为下载时还是压缩包，还用了unzip，结果目录下没有这个压缩包
        </p>
        <p>第二个坑是我忘记了docker image的名字必须是小写字母</p>
        <p>
          第三个坑是我不太会用
          <code>DockerPublish</code>这个action，显示登陆不到dockerhub，后来是用命令里的
          <kbd>docker login -u username -p password</kbd>才上传到dockerhub的。username和password要提前在serect里写好，才不会在脚本里显示出来
        </p>
        <p>第四个坑是因为调试，访问了网站太多遍，导致cloudflare缓存了一部分过期的html和js，导致加载js的时候404，html是缓存的，js却命中了主机，当然是找不到文件的。</p>
        <p>
          在使用github actions之后，一部分的配置命令从
          <code>极客时间
          </code>转移到了
          <code>action.yml</code>里，例如下载caddy之类的，镜像编写变得简单了。部署的时候不是每一次都要重新build了，直接pull新镜像就可以了。当然了https的证书是挂在镜像外面的。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import json from "../posts.json"

const title = ref("用Github actions发布博客之踩坑")
const lastUpdate = ref("")

onMounted(() => {
  lastUpdate.value = json.find(post => {
    return post.title === title.value
  }).lastUpdate
})
</script>