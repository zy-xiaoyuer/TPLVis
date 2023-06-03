<template>
  <div class="about">
    <div :id="echartId" ref="charts" style="width: 95vw; height: 88vh"></div>
  </div>
  <!-- <img src="../assets/logo.png" /> -->
</template>

<script lang="ts" setup>
import { Options, Vue } from "vue-class-component";
import * as echarts from "echarts";
import { onMounted, ref } from "vue";
import "echarts-gl"; // 引入echarts
// import ts from "@/assets/ts.json";
import ts from "@/assets/ts.json";
import { onUnmounted } from "vue";

let echartId = ref("eChart" + Date.now() + Math.random()); //记得return Chart
console.log(echartId);

const initChart = () => {
  // clearHander();
  // desHander();
  // document.getElementById("charts").setAttribute("_echarts_instance_", "");
  const ssChart: HTMLElement = document.getElementById(
    echartId.value
  ) as HTMLElement;
  // let myCharts;
  let myCharts = echarts.init(ssChart);
  // window.addEventListener("resize", function () {
  //   myCharts.resize();
  // });
  // if (myCharts == null) {
  //   console.log("空------------");
  //   myCharts = echarts.init(ssChart);
  //   window.addEventListener("resize", function () {
  //     myCharts.resize();
  //   });
  // } else {
  //   console.log("不会空------------");
  // }

  let yData = [
    2, 19, 0, 1, 0, 0, 0, 1, 5, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 3, 1, 0, 3,
    5, 3, 0, 0, 101, 169, 30, 43, 46, 18, 31, 11, 69, 2, 1, 37, 15, 283, 97, 50,
    203, 108, 27, 2, 92, 13, 1, 7, 18, 0, 8, 2, 8, 7, 4, 22,
  ];

  // 绘制图表
  let option = {
    color: "#d2691e",
    tooltip: {
      trigger: "item",
      formatter: function (params: any) {
        // console.log("params", params);
        if (params.componentType === "markPoint") {
          return params.name;
        } else {
          // return params.name + ": " + params.value[1];
          console.log("不是点---------");
        }
      },
    },
    // tooltip: {
    //   trigger: "axis",
    //   axisPointer: {
    //     type: "none",
    //     label: {
    //       backgroundColor: "#6a7985",
    //       formatter: function (params: any) {
    //         //             if(params.seresData.componentIndex
    //         // )
    //         let p: any = [];
    //         let n = "1";
    //         console.log("params", params.seriesData);
    //         params.seriesData.forEach(function (item: any) {
    //           console.log("item", item);
    //           if (item.data != "") {
    //             let obj = {
    //               value: item.seriesName,
    //             };
    //             p.push(obj);
    //           }
    //         });
    //         console.log("p", p);
    //         return n;
    //       },
    //     },
    //   },
    // },
    // legend: {
    //   data: ["Line 1"],
    // },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          interval: 0, //全部显示x轴
          show: true,
          color: "#6abd78",
        },

        boundaryGap: false,
        data: [
          // "武德",
          "",
          "贞观",
          // "永徽",
          "",
          // "显庆",
          "",
          // "龙朔",
          "",
          // "麟德",
          "",
          // "乾封",
          "",
          // "总章",
          "",
          "咸亨",
          // "",
          // "上元",
          "",
          // "仪凤",
          "",
          // "调露",
          "",
          // "永淳",
          "",
          // "弘道",
          "",
          // "光宅",
          "",
          // "垂拱",
          "",
          // "载初",
          "",
          // "天授",
          "",
          // "长寿",
          "",
          // "万岁通天",
          "",
          // "神功",
          "",
          // "圣历",
          "",
          // "久视",
          "",
          "长安",
          // "",
          // "神龙",
          "",
          "景龙",
          // "",
          // "景云",
          "",
          // "太极",
          "",
          // "先天",
          "",
          "开元",
          // "天宝",
          "",
          "至德",
          // "乾元",
          "",
          "上元",
          // "宝应",
          "",
          "广德",
          // "永泰",
          "",
          "大历",
          // "建中",
          "",
          // "兴元",
          "",
          "贞元",
          // "永贞",
          "",
          "元和",
          // "长庆",
          "",
          "宝历",
          // "大和",
          "",
          // "开成",
          "",
          "会昌",
          // "大中",
          "",
          "咸通",
          // "乾符",
          "",
          // "广明",
          "",
          // "中和",
          "",
          "光启",
          // "文德",
          "",
          // "大顺",
          "",
          // "景福",
          "",
          // "乾宁",
          "",
          // "光化",
          "",
          // "天复",
          "",
          "天祐",
        ],
        // data: [
        //   "武德",
        //   "贞观",
        //   "永徽",
        //   "显庆",
        //   "龙朔",
        //   "麟德",
        //   "乾封",
        //   "总章",
        //   "咸亨",
        //   "上元",
        //   "仪凤",
        //   "调露",
        //   "永淳",
        //   "弘道",
        //   "光宅",
        //   "垂拱",
        //   "载初",
        //   "天授",
        //   "长寿",
        //   "万岁通天",
        //   "神功",
        //   "圣历",
        //   "久视",
        //   "长安",
        //   "神龙",
        //   "景龙",
        //   "景云",
        //   "太极",
        //   "先天",
        //   "开元",
        //   "天宝",
        //   "至德",
        //   "乾元",
        //   "上元",
        //   "宝应",
        //   "广德",
        //   "永泰",
        //   "大历",
        //   "建中",
        //   "兴元",
        //   "贞元",
        //   "永贞",
        //   "元和",
        //   "长庆",
        //   "宝历",
        //   "大和",
        //   "开成",
        //   "会昌",
        //   "大中",
        //   "咸通",
        //   "乾符",
        //   "广明",
        //   "中和",
        //   "光启",
        //   "文德",
        //   "大顺",
        //   "景福",
        //   "乾宁",
        //   "光化",
        //   "天复",
        //   "天祐",
        // ],
        axisTick: {
          show: false, // 不显示坐标轴刻度线
        },
        axisLine: {
          show: false, // 不显示坐标轴线
        },
        position: "top",
        offset: -260,
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      // 诗词数量
      {
        type: "line",
        markPoint: {
          data: [{ type: "max", name: "最大值", symbol: "circle" }],
          itemStyle: {
            color: "#d2691e",
          },
          symbolSize: 25,
          symbolOffset: [0, "-50%"],
        },
        stack: "Total",
        smooth: true,
        // xAxisIndex: 0,
        lineStyle: {
          width: 0,
        },
        label: {
          // normal: {
          //   show: true,
          //   position: "top",
          //   textStyle: {
          //     color: "#000",
          //     fontSize: 12,
          //   },
          // },
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              // color: "rgb(128, 255, 165)",
              color: "#a16d35",
            },
            {
              offset: 1,
              // color: "rgb(1, 191, 236)",
              color: "#f2d88f",
            },
          ]),
        },

        // emphasis: {
        //   focus: "series",
        // },
        data: yData,
      },
      // 李白
      {
        name: "李白[701年2月28日(长安元年)~762年12月(宝应元年)]",
        type: "line",
        markPoint: {
          data: [
            {
              type: "max",
              name: "李白[701年2月28日(长安元年)~762年12月(宝应元年)]",
              value: 0,
              symbol: "image://" + require("../assets/hy.png"),
            },
          ],
          label: {
            formatter: "",
          },
          itemStyle: {
            color: "#d2691e",
          },
          // symbol: "image://" + require("../assets/hy.png"),
          symbolSize: 25,
          symbolOffset: [0, "-50%"],
        },
        showSymbol: false,
        lineStyle: {
          color: "#0077b8",
        },
        // tooltip: {
        //   formatter: function (params: any) {
        //     console.log("params", params);
        //   },
        // },
        data: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          -830,
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  };
  // 新
  ts.forEach((item: any) => {
    // console.log("item.data", item.data);
    let colorStyle = "";
    let n = 0;
    // 距离设置
    for (let i = 0; i < item.data.length; i++) {
      if (item.data[i] != "") {
        // console.log(item.data[i]);
        n++;
        // console.log("n", n);
        let m: any = item.data[i];
        // item.data[i] = m * item.num + 70;
        item.data[i] = -1 * item.num + 70;
      }
    }
    // console.log("item.data", item.data);

    // 颜色设置
    if (n > 35) {
      colorStyle = "#58c3e0";
    } else if (n <= 35 && n > 10) {
      colorStyle = "#abd6e0";
    } else {
      colorStyle = "#e4f4f5";
    }
    console.log("item.data", item.poet);
    if (
      item.poet == "杜甫" ||
      item.poet == "白居易" ||
      item.poet == "刘禹锡" ||
      item.poet == "姚合" ||
      item.poet == "元稹" ||
      item.poet == "岑参" ||
      item.poet == "许浑" ||
      item.poet == "罗隐" ||
      item.poet == "陆龟蒙"
    ) {
      let nameData = item.poet + "[" + item.introduce + "]";
      let objs = {
        name: nameData,
        type: "line",
        markPoint: {
          data: [
            {
              type: "max",
              name: nameData,
              value: 0,
              symbol: "image://" + require("../assets/hy.png"),
            },
          ],
          label: {
            formatter: "",
          },
          itemStyle: {
            color: "#d2691e",
          },
          // symbol: "image://" + require("../assets/hy.png"),
          symbolSize: 25,
          symbolOffset: [0, "-50%"],
        },
        showSymbol: false,
        data: item.data,
        lineStyle: {
          color: "#0077b8",
        },
      };
      option.series.push(objs);
    } else {
      let nameData = item.poet + "[" + item.introduce + "]";
      let obj = {
        name: nameData,
        type: "line",
        markPoint: {
          data: [
            {
              type: "max",
              name: nameData,
              value: 0,
              symbol: "image://" + require("../assets/tm.png"),
            },
          ],
          label: {
            formatter: "",
          },
          itemStyle: {
            color: "#d2691e",
          },
          // symbol: "image://" + require("../assets/hy.png"),
          symbolSize: 25,
          symbolOffset: [0, "-50%"],
        },
        showSymbol: false,
        data: item.data,
        lineStyle: {
          color: colorStyle,
        },
      };
      option.series.push(obj);
    }
  });
  console.log("option.series", option.series);
  // console.log(option.series);
  myCharts.setOption(option);
  // console.log("option----------------", option);
};
onMounted(() => {
  console.log("mounted-----渲染次数");
  initChart();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  background-color: #fffafa;
}
</style>
