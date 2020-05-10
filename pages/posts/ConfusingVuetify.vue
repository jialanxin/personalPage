<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>
        <span class="font-weight-bold">更新：</span>我后续发现了，移动端上v-carousel不是加载不出来，而是要加载很久，手机上基本上读不出速度的那种，且不是网络问题，更令人奇怪的是，上下滑动两下似乎能稍微加快一点点。
      </p>
      <v-divider />
      <p>使用Vuetify的本意是想用它的一大堆预设和组件，但是用久了就有了一堆问题</p>
      <ul>
        <li>Safari下支持不好：首先Safari或者说所有的ios浏览器都不能显示webp格式，这个先不谈，但是v-img中的svg也被截断得乱七八糟，体验很差</li>
        <li>搞不懂的轮播组件v-carousel：首先，默认的height是500而不是auto就很迷惑了，然后在移动端，一个页面上如果有多个v-carousel，就最多有一个能正常显示，还可能一个都显示不出来，必须切换到桌面模式再多刷新几次才可以，我怀疑和浏览器加载/缓存机制适配有问题。</li>
        <li>无限大的遮罩层v-overlay：对付尺寸小于屏幕的对象还可以，一旦对象尺寸大，遮罩层的边界并不是浏览器框而是大得多得多，必须手动限制内部对象的尺寸。</li>
      </ul>
    </template>
  </posttemplate>
</template>

<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "令人头大的Vuetify"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>