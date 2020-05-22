<template>
  <posttemplate :posttitle="title">
    <template v-slot:content>
      <p>新接触一个领域的时候，怎样进行文献调查是一个比较有技巧性的问题，如果一开始就读到了较为关键的文献，能起到事半功倍的效果。我以往一直使用的软件是HistCite，主要功能是利用Web of Science的引文数据库，分析出领域内被引用量高的文献，排除掉一些领域外的无关引用，并且能画出领域内文献引用关系图。</p>
      <v-img src="/img/IntroCiteNet/1.png" max-width="600" contain></v-img>
      <p>但是HistCite已经很多年没有更新了，本着自己造轮子的乐趣，我完成了CiteNet的第一个版本，实现了HistCite的主要功能。</p>
      <v-img src="/img/IntroCiteNet/2.png" max-width="600" contain></v-img>
      <p>使用步骤如下：</p>
      <ol>
        <li>在WoS上选择数据库为“Web of Science 核心合集”，搜索相关领域的关键词，在检索结果页面选择“导出...”，选择格式为“其他文件格式”，选择记录来源（最大500条），记录内容为“全记录与引用的参考文献”，文件格式选择为“纯文本”，而后将自动下载一个"savedrecs.txt"文件，这就是我们从WoS引文数据库得到的文献库数据。</li>
        <li>打开CiteNet的网页，点击"Upload savedrecs.txt"的文本框，选择文件，点击"Upload"按钮上传，稍等一会儿就能看到文献名，作者，发表年份等信息显示在下面的表格中，并可以点击表头进行排序。各项数据中LCS代表文献库内部的被引用数，GCS代表全部被引用数，LCR代表文献库内部的引用文献数，CR代表引用的所有文献数。LCS较大的文献可能是领域的开山鼻祖，LCR较大的文献可能是较为全面的综述性文献。表头上方还有搜索栏可以搜索文献名中的词或者是作者名。</li>
        <v-img src="/img/IntroCiteNet/3.png"  contain></v-img>
        <li>然后点击Graph按钮，可以选取LCS+LCR最高的10篇文献画出他们的引用关系图，箭头所指表示被引用。网络图可以放大、拖动。在文本框内输入想要显示的节点数，按下Enter，就可以改变图中显示的节点总数。</li>
        <v-img src="/img/IntroCiteNet/4.png"  contain></v-img>
        <li>点击列表或者网络图中的节点可以打开文献的详情页，点击doi就可以直接导向文献的主页。</li>
        <v-img src="/img/IntroCiteNet/5.png"  contain></v-img>
      </ol>
      <p>
        点击这个按钮→
        <v-btn href="https://citenet.lxj230.xyz" target="_blank" color="primary">CiteNet——文献引用网络分析工具</v-btn>，就可以使用了！欢迎提Issue报Bug
        <v-btn target="_blank" href="https://github.com/jialanxin/citenet/issues" dark>
          <v-icon>mdi-github</v-icon>Issue
        </v-btn>。
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
      title: "CiteNet——文献引用网络分析工具"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>