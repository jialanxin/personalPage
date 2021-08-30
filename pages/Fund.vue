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
      totalValue += fund.netWorth * (fund.alipayQuantity + fund.wechatQuantity + fund.qiemanQuantity)
      fund.presentValue = fund.netWorth*fund.initalQuantity
      increment += fund.presentValue
    }

    this.funds.forEach((fund) => {
      fund.percent = (fund.presentValue/increment*100).toFixed(2)
      fund.alipayValue = (fund.netWorth * fund.alipayQuantity).toFixed(2);
      fund.wechatValue = (fund.netWorth * fund.wechatQuantity).toFixed(2);
      fund.qiemanValue = (fund.netWorth * fund.qiemanQuantity).toFixed(2);
      fund.difference = (
        fund.netWorth * (fund.alipayQuantity + fund.wechatQuantity + fund.qiemanQuantity) -
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
        { text: "且慢份额", value: "qiemanQuantity" },
        { text: "且慢价值", value: "qiemanValue" },
        { text: "比重", value: "percent" },
        { text: "差额", value: "difference" },
      ],
      funds: [
        {
          name: "交银信用添利债券(LOF)",
          index: "164902",
          initialValue: 1.2097,
          initialPercent: 13.02,
          alipayQuantity: 1136.26,
          wechatQuantity: 31.57,
          qiemanQuantity: 0
        },
        {
          name: "交银双轮动A/B",
          index: "519723",
          initialValue: 1.0693,
          initialPercent: 12.78,
          alipayQuantity: 992.99,
          wechatQuantity: 296.33,
          qiemanQuantity: 11.31
        },
        {
          name: "交银裕隆纯债债券A",
          index: "519782",
          initialValue: 1.2572,
          initialPercent: 13.09,
          alipayQuantity: 1118.97,
          wechatQuantity: 0.0,
          qiemanQuantity: 14.45
        },
        {
          name: "交银纯债A/B",
          index: "519718",
          initialValue: 1.0804,
          initialPercent: 11.93,
          alipayQuantity: 1065.19,
          wechatQuantity: 113.67,
          qiemanQuantity: 22.32
        },
        {
          name: "交银稳鑫短债债券A",
          index: "006793",
          initialValue: 1.0666,
          initialPercent: 10.57,
          alipayQuantity: 843.01,
          wechatQuantity: 173.77,
          qiemanQuantity: 45.21
        },
        {
          name: "交银裕祥纯债债券A",
          index: "006367",
          initialValue: 1.0454,
          initialPercent: 4.96,
          alipayQuantity: 487.54,
          wechatQuantity: 0,
          qiemanQuantity: 23.51
        },
        {
          name: "交银多策略回报灵活配置混合A",
          index: "519755",
          initialValue: 1.4410,
          initialPercent: 6.62,
          alipayQuantity: 369.44,
          wechatQuantity: 119.46,
          qiemanQuantity: 2.14
        },
        {
          name: "交银新回报灵活配置混合A",
          index: "519752",
          initialValue: 1.5050,
          initialPercent: 5.61,
          alipayQuantity: 296.35,
          wechatQuantity: 92.16,
          qiemanQuantity: 0
        },
        {
          name: "交银周期回报灵活配置混合A",
          index: "519738",
          initialValue: 1.2750,
          initialPercent: 5.58,
          alipayQuantity: 435.83,
          wechatQuantity: 21.93,
          qiemanQuantity: 0
        },
        {
          name: "中银瑞利混合C",
          index: "002414",
          initialValue: 1.1960,
          initialPercent: 2.50,
          alipayQuantity: 247.29,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
        {
          name: "中银润利混合C",
          index: "003967",
          initialValue: 1.1378,
          initialPercent: 2.50,
          alipayQuantity: 259.70,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
        {
          name: "中银腾利混合C",
          index: "002503",
          initialValue: 1.1400,
          initialPercent: 1.49,
          alipayQuantity: 249.67,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
        {
          name: "中银新机遇混合C",
          index: "002058",
          initialValue: 1.1320,
          initialPercent: 1.80,
          alipayQuantity: 252.79,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
        {
          name: "中银宏利混合C",
          index: "002435",
          initialValue: 1.1420,
          initialPercent: 2.00,
          alipayQuantity: 243.11,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
        {
          name: "交银新生活力灵活配置混合",
          index: "519772",
          initialValue: 2.9600,
          initialPercent: 1.43,
          alipayQuantity: 57.18,
          wechatQuantity: 15.75,
          qiemanQuantity: 0
        },
        {
          name: "交银沪港深价值精选混合",
          index: "519779",
          initialValue: 2.2870,
          initialPercent: 2.29,
          alipayQuantity: 89.11,
          wechatQuantity: 0,
          qiemanQuantity: 5.49
        },
        {
          name: "交银先进制造混合",
          index: "519704",
          initialValue: 5.0853,
          initialPercent: 1.83,
          alipayQuantity: 34.12,
          wechatQuantity: 0,
          qiemanQuantity: 0
        },
      ],
    };
  },
};
</script>
