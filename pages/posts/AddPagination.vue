<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>随着文章数的增多，到了给目录页添加分页的时候了，要把每一页保持在5条左右才能在电脑端和手机端都能很好地占满屏幕。</p>
      <p>
        Vuetify提供的分页组件很好用，只需要
        <code>v-model</code>绑定一个
        <code>page</code>属性就可以了。
        <code>length</code>属性在
        <code>computed</code>属性里向上取整算出所需具体页数。最后将要展示的条目在
        <code>computed</code>里从所有条目中用索引切片切出来。注意最后一页要特殊处理，不能使索引越界。
      </p>
      <p>调整过程中还是对javascript不太熟悉，声明变量要加var，切片要用slice方法，取整要用Math.ceil()，好像有一点麻烦啊~</p>
      <v-divider />
      <h5>更新：</h5>
      <p>
        后来在使用的过程中发现，从文章页后退到目录页的时候总是会回到默认的第一页，而不是进入的那一页。对此的修正需要用到vue-router的导航守卫，使用组件内守卫
        <a
          href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB"
        >beforeRouteEnter</a> ，该守卫在进入组件之前可以从
        <code>from.path</code>属性可以得到之前的路径，在回调函数
        <code>next()</code>中与posts列表中的链接进行比对，得到正确的
        <code>page</code>属性。回调函数
        <code>next()</code>的调用时机在
        <code>mounted()</code>之后
      </p>
      <v-divider />
      <h5>再更新：</h5>
      <p>
        要在分页组件上实现浏览器的前进后退。这一步的前提是剥离分页组件
        <code>page</code>属性和视图的绑定，即不再用
        <code>page</code>属性操纵视图变化，而改用原生的vue-router和组件的生命周期实现。
      </p>
      <p>
        首先我将分页组件上的激活蓝色和一个新的属性
        <code>page_blue</code>绑定，
        <code>page_blue</code>由
        <code>page</code>复制得到，并不能直接操控页面。
      </p>
      <p>
        在
        <code>create()</code>时，读取url中的query中的page参数，转为数字后保存在
        <code>page</code>属性中。
      </p>
      <p>
        当点击分页条时，事件
        <code>input</code>发动，手动使router跳转到相应页面，并使用
        <code>beforeRouteUpdate</code>导航守卫使得组件刷新，此时路由历史就进入了浏览器
      </p>
      <p>
        此时，如果从文章页后退回目录页，由于浏览器记录了具体是目录页的哪一页，之前的
        <code>beforeRouteEnter</code>守卫是不需要的，但是导航栏上有一个Home按钮，如果还是要保持回到指定的目录页而不是第一页，还是要根据
        <code>from.path</code>属性判断到底去往哪一页。这里还有一个小漏洞，此时只是页面视图改变而没有将路由详情写入，如果再点击其他页面再返回就只是回到第一页了。
      </p>
      <p>
        考虑再三我决定去掉这个首页按钮（因为好像不是很必要）和
        <code>beforeRouteEnter</code>。
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
      title: "添加分页"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>