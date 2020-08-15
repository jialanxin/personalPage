<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <h3>安装</h3>
      <p>办公室分了我一台老爷机，i7-3770加Radeon 550，自带的win7已经卡的不能用了，我便用manjaro的安装盘装了一个。后来又发现CPU压根没有虚拟化功能，虚拟机用不了，只好再装win10，前前后后引导驱动老是出问题，最后才弄成这样。记录一下过程，以后有可能还有用。</p>
      <p>双系统首先从windows开始，linux下制作windows liveusb的工具是woeusb，windows下不管是装windows还是linux都用rufus就可以了。</p>
      <p>
        在win7下面检查机器的启动模式，
        <kbd>msinfo32</kbd>，发现老爷机是传统BIOS+MBR方式启动的。在win7的磁盘管理中进行卷压缩，不需要格式化，分出win10和manjaro各自的空间。
      </p>
      <p>接着重启按F1（联想Think系列主板）进入BIOS，设置从U盘启动，选择对应的分区安装win10。等待win10安装好，重启拔掉U盘从硬盘启动win10，并用AMD Radeon联网配置好显卡驱动。中间需要重启多次。</p>
      <p>
        再制作Manjaro的liveusb，再从U盘启动，在安装过程中选择手动分区，将根目录
        <code>/</code>挂载到对应分区上，并将引导分区放在根目录下，而不是MBR中，那样会抹掉windows的win boot manager，变成只能从grub启动。
      </p>
      <p>重启时会自动进入win10,下载EasyBCD，为windows boot manager添加到grub2的启动，grub2在linux的分区里。</p>
      <p>这样的双系统就做好了。接着开始配置Manjaro。</p>
      <h3>配置</h3>
      <p>
        首先是添加Archlinuxcn的仓库并配置镜像源。在
        <code>/etc/pacman.conf</code>文件的最后添加：
        <br />
        <code>
          [archlinuxcn]
          <br />SigLevel = Never
          <br />Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
          <br />
        </code>
        再输入命令
        <kbd>sudo pacman-mirrors -c China</kbd>完成换源。
      </p>
      <p>
        然后
        <kbd>sudo pacman -Syu</kbd>刷源更新系统。接着从pacman安装aur包管理器yay。
      </p>
      <p>
        然后再配置好中文输入法。
        <kbd>yay -S fcitx fcitx-im fcitx-configtool fcitx-sogoupinyin</kbd>安装好软件包，在用户主目录下创建
        <code>.xprofile</code>文件，内容是：
        <br />
        <code>
          export GTK_IM_MODULE=fcitx
          <br />export QT_IM_MODULE=fcitx
          <br />export XMODIFIERS="@im=fcitx"
          <br />
        </code>
        最后重启就完成了基本配置。
      </p>
      <h3>onedrive和clash的开机启动</h3>
      <p>
        首先安装不用说了，
        <kbd>onedrive</kbd>完成登录，在
        <code>~/.config/onedrive</code>目录下创建
        <code>sync_list</code>选择要同步的文件夹。再以systemd服务启动：
        <br />
        <kbd>
          systemctl --user enable onedrive
          <br />systemctl --user start onedrive
          <br />systemctl --user status onedrive
          <br />journalctl --user-unit=onedrive -f
          <br />
        </kbd>
      </p>
      <p>
        将
        <code>config.yaml</code>文件放在
        <code>~/.config/clash</code>文件夹下。创建服务脚本
        <code>/etc/systemd/system/clash.service</code>:
        <br />
        <code>
          [Unit]
          <br />Description=Clash service
          <br />After=network.target
          <br />[Service]
          <br />Type=simple
          <br />User=***
          <br />ExecStart=/usr/bin/clash
          <br />Restart=on-failure
          <br />RestartPreventExitStatus=23
          <br />[Install]
          <br />WantedBy=multi-user.target
          <br />
        </code>
        User字段填自己，输入命令：
        <br />
        <kbd>
          systemctl daemon-reload
          <br />systemctl --user enable clash
          <br />systemctl --user start clash
          <br />systemctl --user status clash
          <br />journalctl --user-unit=clash -f
          <br />
        </kbd>
        最后在firefox中设置代理即可
      </p>
    </template>
  </posttemplate>
</template>
<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "从BIOS开始的Manjaro双系统安装指南",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>