<template>
    <posttemplate :posttitle="title">
        <template v-slot:content>
            <p>网上有关三菱中央空调的说明书少之又少，连怎么定时都很难找，在网上找到一段视频讲了怎么定时。</p>
            <ol>
                <li>同时按返回(BACK)和定时器开关(Clock On/Off)键3秒以上，面板显示Change Language</li>
                <li>按两次返回键(BACK)，面板显示基本模式</li>
                <li>按菜单键(Menu)，再按定时器开关键(Clock On/Off)切换至面板显示简易定时器</li>
                <li>同时按返回(BACK)和定时器开关(Clock On/Off)键3秒以上，返回到主界面</li>
                <li>按菜单键(Menu)，面板显示定时器状态，再按菜单键(Menu)，显示定时器</li>
                <li>按空调开关键(On/Off)，可选择定时开/定时关</li>
                <li>按定时器上下键(Clock Up/Down)选择时间</li>
                <li>按回车键(Filter/Enter)确认设置，按返回键(Back)回到主界面</li>
                <li>在主界面按定时器开关键(Clock On/Off)即可启用定时</li>
            </ol>
            <p>很复杂好吧👌</p>
        </template>
    </posttemplate>
</template>
<script>
import posttemplate from "../../components/posttemplate";
export default {
  components: { posttemplate },
  data() {
    return {
      title: "三菱空调线控面板定时器操作"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>