<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>
        Archlinux的一大特色就是各种各样的aur包，安装和卸载都比较方便。今天找命令行下有什么好翻译工具的时候找到了
        <v-btn light small href="https://github.com/afc163/fanyi">
          <v-icon>mdi-github</v-icon>afc163/fanyi
        </v-btn>这个项目，而且也没有人在aur里打过包，所以我来试一次打包了。
      </p>
      <pre><code class="language-shell">
      # Maintainer: lstnbl &lt;******@****.**&gt;
      _npmname=fanyi
      pkgname=node-$_npmname
      pkgver=4.2.0
      pkgrel=1
      pkgdesc="A CN and US translate tool in your command line."
      arch=('any')
      url="https://github.com/afc163/fanyi"
      license=('MIT')
      depends=('nodejs' 'festival')
      makedepends=('npm')
      source=(https://github.com/afc163/$_npmname/archive/v$pkgver.tar.gz)
      noextract=("v$pkgver.tar.gz")
      sha256sums=('SKIP')
      package() {
          npm install \
              --user root --global \
              --prefix "$pkgdir/usr" \
              "$srcdir"/v$pkgver.tar.gz
          find "$pkgdir/usr" -type d -exec chmod 755 '{}' +
          install -Dm0644 "$pkgdir/usr/lib/node_modules/$_npmname/LICENSE" \
              "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
      }
      </code></pre>
      <p>
        整个PKGBUILD文件如图，前几行申明一些名称和版本信息。
        <code>depends</code>和
        <code>makedepends</code>是运行和构建时的依赖。
        <code>source</code>为代码源，默认是curl下载，也可以指明git下载。
        <code>noextract</code>不会自动解压压缩包。
        hash和由于作者没有提供，只能跳过。
        <code>package()</code>函数表示打包阶段，第一步，npm安装所有的依赖到fakeroot下的
        <code>usr/bin</code>和
        <code>usr/lib</code>；第二步给权限，暂时还看不懂；第三步安装协议到fakeroot下。<kbd>makepkg -s</kbd>执行打包命令并安装好所有依赖，<kbd>yay -U 包名</kbd>安装到系统。
      </p>
      <p>然后是上传到aur仓库。详细过程见<v-btn class="orange" small href="https://blog.yoitsu.moe/arch-linux/aur_sumbiting_guidebook.html">AUR 纯萌新向入门教学(3)-提交软件包到AUR</v-btn></p>
    </template>
  </posttemplate>
</template>

<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "创建一个aur包"
    };
  },

  head() {
    return {
      title: this.title
    };
  }
};
</script>
