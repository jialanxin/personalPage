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
        <p>记录一下为Caddy2设置HTTPS和Cloudflare Origin CA的步骤。</p>
        <ol>
            <li>首先在Cloudflare TLS申请Origin CA。下载证书和私钥保存在本地。（一定要注意把私钥和证书写进gitignore文件里，上传到开源库就不好了）</li>
            <li>将证书和私钥上传到服务器，修改Caddyfile，加入tls设置项，写入证书和私钥的地址。</li>
            <li>开放docker-compose的80和443端口。（一开始把443写成433，导致521错误，sigh~）</li>
            <li>将Cloudflare的设置改为严格HTTPS</li>
        </ol>
        <p>后续还有一步将HTTP重定向至HTTPS，暂时没找到方法做。吐槽一句，Caddy2的资料还是太少了~</p>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  data(){
    return {
      title: "为Caddy2设置HTTPS",
      lastUpdate:"2020-03-06"
    }
  },
  head(){
    return {
      title: this.title
    }
  }
  
}
</script>