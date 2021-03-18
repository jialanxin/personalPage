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
    let totalValue = 0.0
    let increment = 0.0
    for (let idx = 0; idx < length; idx++) {
      let fund = this.funds[idx]
      fund.netWorth = resData[idx].netWorth;
      fund.initalQuantity = fund.initialPercent/fund.initialValue
      totalValue += fund.netWorth * (fund.alipayQuantity + fund.wechatQuantity)
      fund.presentValue = fund.netWorth*fund.initalQuantity
      increment += fund.presentValue
    }

    this.funds.forEach((fund) => {
      fund.percent = (fund.presentValue/increment*100).toFixed(2)
      fund.alipayValue = (fund.netWorth * fund.alipayQuantity).toFixed(2);
      fund.wechatValue = (fund.netWorth * fund.wechatQuantity).toFixed(2);
      fund.difference = (
        fund.netWorth * (fund.alipayQuantity + fund.wechatQuantity) -
        (totalValue * fund.percent) / 100
      ).toFixed(2);
    });
  },
  data() {
    return {
      headers: [
        { text: "名称", value: "name" },
        { text: "代码", value: "index" },
        { text: "净值", value: "netWorth" },
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
          initialValue: 1.1715,
          alipayQuantity: 534.64,
          wechatQuantity: 31.57,
          initialPercent: 12.73,
        },
        {
          name: "交银双轮动A/B",
          index: "519723",
          initialValue: 1.0527,
          alipayQuantity: 338.73,
          wechatQuantity: 284.99,
          initialPercent: 12.56,
        },
        {
          name: "交银裕隆纯债债券A",
          index: "519782",
          initialValue: 1.2169,
          alipayQuantity: 505.59,
          wechatQuantity: 0.0,
          initialPercent: 11.66,
        },
        {
          name: "交银纯债A/B",
          index: "519718",
          initialValue: 1.0607,
          alipayQuantity: 385.02,
          wechatQuantity: 108.06,
          initialPercent: 9.72,
        },
        {
          name: "交银稳鑫短债债券A",
          index: "006793",
          initialValue: 1.0533,
          alipayQuantity: 281.81,
          wechatQuantity: 173.77,
          initialPercent: 8.23,
        },
        {
          name: "交银多策略回报灵活配置混合A",
          index: "519755",
          initialValue: 1.4150,
          alipayQuantity: 132.87,
          wechatQuantity: 117.30,
          initialPercent: 6.61,
        },
        {
          name: "交银周期回报灵活配置混合A",
          index: "519738",
          initialValue: 1.2810,
          alipayQuantity: 213.61,
          wechatQuantity: 17.21,
          initialPercent: 5.56,
        },
        {
          name: "交银新回报灵活配置混合A",
          index: "519752",
          initialValue: 1.4830,
          alipayQuantity: 108.48,
          wechatQuantity: 92.16,
          initialPercent: 5.62,
        },
        {
          name: "交银新生活力灵活配置混合",
          index: "519772",
          initialValue: 3.8760,
          alipayQuantity: 44.16,
          wechatQuantity: 15.75,
          initialPercent: 4.49,
        },
        {
          name: "中银腾利混合C",
          index: "002503",
          initialValue: 1.1420,
          alipayQuantity: 192.96,
          wechatQuantity: 0,
          initialPercent: 4.13,
        },
        {
          name: "中银新机遇混合C",
          index: "002058",
          initialValue: 1.1360,
          alipayQuantity: 194.36,
          wechatQuantity: 0,
          initialPercent: 4.16,
        },
        {
          name: "中银润利混合C",
          index: "003967",
          initialValue: 1.1287,
          alipayQuantity: 186.30,
          wechatQuantity: 0,
          initialPercent: 4.09,
        },
        {
          name: "中银宏利混合C",
          index: "002435",
          initialValue: 1.1350,
          alipayQuantity: 191.73,
          wechatQuantity: 0,
          initialPercent: 4.09,
        },
        {
          name: "中银瑞利混合C",
          index: "002414",
          initialValue: 1.1890,
          alipayQuantity: 182.69,
          wechatQuantity: 0,
          initialPercent: 4.13,
        },
        {
          name: "交银先进制造混合",
          index: "519704",
          initialValue: 4.3968,
          alipayQuantity: 25.76,
          wechatQuantity: 0,
          initialPercent: 2.22,
        },
      ],
    };
  },
};
</script>
