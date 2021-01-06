<template>
  <v-data-table
    :headers="headers"
    :items="funds"
    :items-per-page="20"
  ></v-data-table>
</template>

<script>
import axios from "axios";
export default {
  mounted: async function () {
    const param = this.funds.map((fund) => fund.index).join(",");
    const res = await axios.get("https://api.doctorxiong.club/v1/fund", {
      params: { code: param },
    });
    const resData = res.data.data;
    const length = this.funds.length;
    for (let idx = 0; idx < length; idx++) {
      this.funds[idx].unitValue = resData[idx].netWorth;
    }
    const totalValue = this.funds
      .map(
        (fund) => fund.unitValue * (fund.alipayQuantity + fund.wechatQuantity)
      )
      .reduce((sum, value) => sum + value);
    this.funds.forEach((fund) => {
      fund.alipayValue = (fund.unitValue * fund.alipayQuantity).toFixed(2);
      fund.wechatValue = (fund.unitValue * fund.wechatQuantity).toFixed(2);
      fund.difference = (
        fund.unitValue * (fund.alipayQuantity + fund.wechatQuantity) -
        (totalValue * fund.percent) / 100
      ).toFixed(2);
    });
  },
  data() {
    return {
      headers: [
        { text: "名称", value: "name" },
        { text: "代码", value: "index" },
        { text: "净值", value: "unitValue" },
        { text: "支付宝份额", value: "alipayQuantity" },
        { text: "支付宝价值", value: "alipayValue" },
        { text: "微信份额", value: "wechatQuantity" },
        { text: "微信价值", value: "wechatValue" },
        { text: "比重", value: "percent" },
        { text: "差额", value: "difference" },
      ],
      funds: [
        {
          name: "交银信用添利债券(LOF)",
          index: "164902",
          unitValue: 1.1639,
          alipayQuantity: 331.20,
          wechatQuantity: 0,
          percent: 13.01,
        },
        {
          name: "交银双轮动A/B",
          index: "519723",
          unitValue: 1.0602,
          alipayQuantity: 167.42,
          wechatQuantity: 192.96,
          percent: 12.93,
        },
        {
          name: "交银裕隆纯债债券A",
          index: "519782",
          unitValue: 1.0398,
          alipayQuantity: 296.65,
          wechatQuantity: 0.0,
          percent: 12.0,
        },
        {
          name: "交银纯债A/B",
          index: "519718",
          unitValue: 1.0398,
          alipayQuantity: 244.29,
          wechatQuantity: 28.13,
          percent: 10.0,
        },
        {
          name: "交银稳鑫短债债券A",
          index: "006793",
          unitValue: 1.0398,
          alipayQuantity: 124.53,
          wechatQuantity: 112.94,
          percent: 8.47,
        },
        {
          name: "交银多策略回报灵活配置混合A",
          index: "519755",
          unitValue: 1.397,
          alipayQuantity: 50.01,
          wechatQuantity: 88.77,
          percent: 6.58,
        },
        {
          name: "交银周期回报灵活配置混合A",
          index: "519738",
          unitValue: 1.252,
          alipayQuantity: 126.88,
          wechatQuantity: 0,
          percent: 5.55,
        },
        {
          name: "交银新回报灵活配置混合A",
          index: "519752",
          unitValue: 1.363,
          alipayQuantity: 43.98,
          wechatQuantity: 66.98,
          percent: 5.56,
        },
        {
          name: "交银新生活力灵活配置混合",
          index: "519772",
          unitValue: 2.933,
          alipayQuantity: 24.06,
          wechatQuantity: 9.73,
          percent: 3.68,
        },
        {
          name: "中银腾利混合C",
          index: "002503",
          unitValue: 1.076,
          alipayQuantity: 112.56,
          wechatQuantity: 0,
          percent: 4.04,
        },
        {
          name: "中银新机遇混合C",
          index: "002058",
          unitValue: 1.077,
          alipayQuantity: 113.39,
          wechatQuantity: 0,
          percent: 4.04,
        },
        {
          name: "中银润利混合C",
          index: "003967",
          unitValue: 1.0707,
          alipayQuantity: 105.02,
          wechatQuantity: 0,
          percent: 4.0,
        },
        {
          name: "中银宏利混合C",
          index: "002435",
          unitValue: 1.078,
          alipayQuantity: 110.66,
          wechatQuantity: 0,
          percent: 4.02,
        },
        {
          name: "中银瑞利混合C",
          index: "002414",
          unitValue: 1.145,
          alipayQuantity: 105.52,
          wechatQuantity: 0,
          percent: 4.04,
        },
        {
          name: "交银先进制造混合",
          index: "519704",
          unitValue: 1.951,
          alipayQuantity: 13.55,
          wechatQuantity: 0,
          percent: 2.06,
        },
      ],
    };
  },
};
</script>
