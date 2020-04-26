<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>iPad上的代理软件不想用了，所以想在上游搭建一个透明代理，没法直接搞路由器，用树莓派也麻烦，后来想一想手机反正一直开机，可以把代理放在上面。</p>
      <p>后来我发现我搞错了，所谓透明代理是要将网关放在路由器或者其他设备上，以实现内网所有指定该网关为默认网关的设备所有流量均走代理分流，不在乎本地是否实现了代理。而我只是把ipad上的正向代理服务器放到其他设备上去了，并不是真正地透明代理。实际操作中还发现，iOS系统的wifi代理设置可以代理绝大部分应用，而安卓系统代理只支持浏览器，而且绝大部分应用既不走系统也不支持单独设置代理，还是要用VPN软件。</p>
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


<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "手机建立内网正向代理"
    };
  },

  head() {
    return {
      title: this.title
    };
  }
};
</script>