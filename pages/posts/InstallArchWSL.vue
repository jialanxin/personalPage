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
      <p>记录一下安装ArchWSL的步骤，基于Windows 10 20H1 版本的WSL2。</p>
      <ol>
          <li>激活Windows的相关设置，这部分略过，可以看微软的文档。</li>
          <li>Github上下载yuk7/ArchWSL，完成软件安装。安装包的命名决定了最后实例的命名。</li>
          <li>由于后续yay不能用root用户，需要设置好root用户的密码和添加新用户，最后设置默认用户。参见yuk7/ArchWSL的wiki部分。</li>
          <li>修改<code>/etc/pacman.d/mirrorlist</code>，随后<kbd>sudo pacman-key --init</kbd>和<kbd>sudo pacman-key --population</kbd>激活初始key。</li>
          <li><kbd>sudo pacman -Syyu base-devel</kbd>刷新软件列表，安装base-devel软件包。</li>
          <li>安装yay，<kbd>git clone</kbd> ，<kbd>cd</kbd> ，最后<kbd>makepkg -sic</kbd>。 </li>
          <li>yay安装pacvis，可视化依赖关系。</li>
          <li>yay安装openssh，生成密钥使用<kbd>ssh-keygen</kbd>。</li>
      </ol>
    </v-col>
  </v-row>
</v-container>
</template>

<script>

export default {
  data(){
    return {
      title: "安装ArchWSL",
      lastUpdate:"2020-03-02"
    }
  },
  head(){
    return {
      title: this.title
    }
  }
  
}
</script>