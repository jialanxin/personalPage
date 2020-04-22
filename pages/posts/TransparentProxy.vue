<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>iPad上的代理软件不想用了，所以想在上游搭建一个透明代理，没法直接搞路由器，用树莓派也麻烦，后来想一想手机反正一直开机，可以把代理放在上面。</p>
      <p>
        首先是在手机上下一个termux终端模拟器。
        <kbd>passwd</kbd>设置密码，
        <kbd>whoami</kbd>查看用户名，
        <kbd>ifconfig</kbd>查看局域网地址。
      </p>
      <p>
        然后是安装ssh server，
        <kbd>pkg install openssh</kbd>。运行
        <kbd>sshd</kbd>，中止
        <kbd>pkill sshd</kbd>，默认的端口不是22，是8022。
      </p>
      <p>
        接着准备编译，
        <kbd>pkg install git golang</kbd>。然后开始编译出可执行文件，
        <kbd>go get -u -v github.com/Dreamacro/clash</kbd>。这时候我发现，我手机上本来的surfboard代理没有关，termux下载golang代码的时候也会走代理，在正式使用的时候一定要把手机上本来的代理关掉，不然可能走两遍流量。
      </p>
      <p>将配置文件传到termux里，把其它不用的东西删掉，运行clash。</p>
      <p>
        关于代理选择，我找到一个网页，
        <v-btn href="https://clash.razord.top" dark small>Clash前端</v-btn>，可以用来切换代理。
      </p>
      <p>在iPad上设置使用代理是在wifi设置中，指定wifi，手动输入手机的ip和代理端口。</p>
    </template>
  </posttemplate>
</template>
  </posttemplate>
</template>

<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "手机建立透明代理"
    };
  },

  head() {
    return {
      title: this.title
    };
  }
};
</script>