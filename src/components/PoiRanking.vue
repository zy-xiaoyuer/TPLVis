<template>
  <div id="ranking" ref="ranking" style="width: 30vw; height: 80vh"></div>
  <!-- <img src="../assets/logo.png" /> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import * as echarts from "echarts";
// import { onMounted } from "vue";
import "echarts-gl"; // 引入echarts

// @Options({
//   props: {
//     msg: String,
//   },
// })
// onMounted(() => {
//   console.log("mounted-----渲染次数");
//   initMap();
// });

const initChart = () => {
  const mapChart: HTMLElement = document.getElementById(
    "ranking"
  ) as HTMLElement;
  let xData = [23, 24, 36, 38, 43, 48, 49, 96, 303, 343];
  let yData = [
    "江苏南京(金陵)",
    "陕西渭南(下邽)",
    "湖北荆州(江陵)",
    "重庆(渝州)",
    "江西九江(江州)",
    "四川成都(益州)",
    "浙江杭州(临安)",
    "江苏苏州(苏州)",
    "陕西西安(西京)",
    "河南洛阳(东都)",
  ];
  const myChart = echarts.init(mapChart);
  // 绘制图表
  let option = {
    // title: {
    //   text: "地名排行榜",
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "5%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      show: false,
      type: "value",
      boundaryGap: [0, 0.01],
      splitLine: {
        show: false, // 不显示网格线
      },
    },
    yAxis: [
      {
        //   show: false,
        type: "category",
        axisTick: {
          show: false, // 不显示坐标轴刻度线
        },
        axisLine: {
          show: false, // 不显示坐标轴线
        },
        position: "left",
        axisLabel: {
          show: true,
          fontSize: 16,
          color: "#9d7294",
        },
        data: yData,
      },
    ],
    series: [
      {
        // name: "2011",
        type: "bar",
        data: xData,
        itemStyle: {
          color: "#d1abc0",
          shadowColor: "#7b4885",
          shadowOffsetX: 5,
          shadowOffsetY: 5,
          shadowBlur: 10,
        },
        label: {
          show: true,
          position: "right",
          color: "#9d7294",
          offset: [10, 0],
        },
      },
    ],
  };
  myChart.setOption(option);
};
export default class PoiRanking extends Vue {
  msg!: string;

  async mounted() {
    // console.log("mounted-----渲染次数");
    initChart();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
