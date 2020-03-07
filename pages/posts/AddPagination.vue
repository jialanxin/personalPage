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
        <p>随着文章数的增多，到了给目录页添加分页的时候了，要把每一页保持在5条左右才能在电脑端和手机端都能很好地占满屏幕。</p>
        <p>Vuetify提供的分页组件很好用，只需要<code>v-model</code>绑定一个<code>page</code>属性就可以了。<code>length</code>属性在<code>computed</code>属性里向上取整算出所需具体页数。最后将要展示的条目在<code>computed</code>里从所有条目中用索引切片切出来。注意最后一页要特殊处理，不能使索引越界。</p>
        <p>调整过程中还是对javascript不太熟悉，声明变量要加var，切片要用slice方法，取整要用Math.ceil()，好像有一点麻烦啊~</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "添加分页",
      lastUpdate: "2020-03-07"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>