<template>
  <v-data-table :headers="headers" :items="funds" :items-per-page="20"></v-data-table>
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
      .map((fund) => fund.unitValue * fund.quantity)
      .reduce((sum, value) => sum + value);
    this.funds.forEach((fund) => {
      fund.value = (fund.unitValue * fund.quantity).toFixed(2);
      fund.difference = (
        fund.unitValue * fund.quantity -
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
        { text: "份额", value: "quantity" },
        { text: "价值", value: "value" },
        { text: "比重", value: "percent" },
        { text: "差额", value: "difference" },
      ],
      funds: [
        {
          name: "交银信用添利债券(LOF)",
          index: "164902",
          unitValue: 1.1639,
          quantity: 80.86,
          percent: 18.74,
          difference: undefined,
        },
        {
          name: "交银双轮动A/B",
          index: "519723",
          unitValue: 1.0602,
          quantity: 68.06,
          percent: 17.27,
          difference: undefined,
        },
        {
          name: "交银稳鑫短债债券A",
          index: "006793",
          unitValue: 1.0398,
          quantity: 39.52,
          percent: 6.78,
          difference: undefined,
        },
        {
          name: "交银多策略回报灵活配置混合A",
          index: "519755",
          unitValue: 1.397,
          quantity: 35.84,
          percent: 7.24,
          difference: undefined,
        },
        {
          name: "交银周期回报灵活配置混合A",
          index: "519738",
          unitValue: 1.252,
          quantity: 40.49,
          percent: 7.24,
          difference: undefined,
        },
        {
          name: "交银新回报灵活配置混合A",
          index: "519752",
          unitValue: 1.363,
          quantity: 36.71,
          percent: 6.53,
          difference: undefined,
        },
        {
          name: "中银腾利混合C",
          index: "002503",
          unitValue: 1.076,
          quantity: 46.3,
          percent: 6.03,
          difference: undefined,
        },
        {
          name: "中银新机遇混合C",
          index: "002058",
          unitValue: 1.077,
          quantity: 46.3,
          percent: 6.02,
          difference: undefined,
        },
        {
          name: "中银润利混合C",
          index: "003967",
          unitValue: 1.0707,
          quantity: 28.78,
          percent: 5.98,
          difference: undefined,
        },
        {
          name: "中银宏利混合C",
          index: "002435",
          unitValue: 1.078,
          quantity: 0,
          percent: 5.98,
          difference: undefined,
        },
        {
          name: "中银瑞利混合C",
          index: "002414",
          unitValue: 1.145,
          quantity: 19.13,
          percent: 5.96,
          difference: undefined,
        },
        {
          name: "交银新生活力灵活配置混合",
          index: "519772",
          unitValue: 2.933,
          quantity: 17.47,
          percent: 3.95,
          difference: undefined,
        },
        {
          name: "交银数据产业灵活配置混合",
          index: "519773",
          unitValue: 1.951,
          quantity: 13.15,
          percent: 2.28,
          difference: undefined,
        },
      ],
    };
  },
};
</script>
