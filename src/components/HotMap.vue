<template>
  <div id="map" ref="map" style="width: 60vw; height: 80vh"></div>
  <!-- <img src="../assets/logo.png" /> -->
</template>

<script lang="ts" setup>
import { Options, Vue } from "vue-class-component";
import geoJson from "@/components/china.json";
import * as echarts from "echarts";
import { onMounted } from "vue";
import poi from "@/assets/position.json";
import "echarts-gl"; // 引入echarts

const initMap = () => {
  const mapChart: HTMLElement = document.getElementById("map") as HTMLElement;
  const myChart = echarts.init(mapChart);
  myChart.resize();
  echarts.registerMap("china", geoJson as any);
  // console.log("poi", poi);
  // 绘制图表
  let option = {
    title: {
      text: "\t地理分布图\t",
      top: 20,
      bottom: 20,
      left: 200,
      padding: [5, 5],
      backgroundColor: "#fff",
      borderWidth: 2,
      borderColor: "#b87333",
      borderRadius: 25,
      textStyle: {
        fontSize: 32,
        lineHeight: 56,
        // width: 100,
        // height: 100,
        color: "#b87333",
        fontFamily: "SimSun",
        textShadowColor: "#d1ad69",
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
      },
    },
    geo3D: {
      map: "china",
      //   boxWidth: 100,
      //   boxHight: 100,

      itemStyle: {
        color: "#e1cfd8", // 区域颜色
        opacity: 1,
        borderWidth: 0.5,
        borderColor: "#344069", // 地图边配色
      },
      label: {
        show: true,
        color: "#e1cfd8",
        fontWeight: "lighter",
      },
      shading: "realistic",
      realisticMaterial: {
        // 注： 使用平铺需要 detailTexture 的高宽是 2 的 n 次方。例如 512x512，如果是 200x200 的纹理无法使用平铺。
        detailTexture: require("../assets/2.png"), // 纹理贴图
        // detailTexture: "#000",
        textureTiling: 0.79, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
        textureOffset: [0.08, 0.25], //纹理图案的平移
        // textureTiling: 0.75, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
        // textureOffset: [0.07, 0.17], //纹理图案的平移
        // [左加右减，上加下减]
        // roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
        // metalness: 0, // 0材质是非金属 ，1金属
        // roughnessAdjust: 0,
      },
      // light: {
      //   main: {
      //     intensity: 5,
      //     shadow: true,
      //     shadowQuality: "high",
      //     alpha: 30,
      //   },
      //   ambient: {
      //     intensity: 0,
      //   },
      //   ambientCubemap: {
      //     texture: "data-gl/asset/canyon.hdr",
      //     exposure: 1,
      //     diffuseIntensity: 0.5,
      //   },
      // },
      // 控制地图收缩
      viewControl: {
        distance: 85,
        // panMouseButton: "left",
        // rotateMouseButton: "right",
      },
      // 调节对比色
      postEffect: {
        enable: true,
        bloom: {
          enable: false,
        },
        SSAO: {
          radius: 1,
          intensity: 1,
          enable: true,
        },
        depthOfField: {
          enable: false,
          focalRange: 10,
          blurRadius: 10,
          fstop: 1,
        },
      },
      // 地图高度
      regionHeight: 2,
    },
    visualMap: {
      left: 200,
      bottom: 50,
      max: 343,
      calculable: true,
      realtime: false,
      inRange: {
        // color: [
        //   "#313695",
        //   "#4575b4",
        //   "#74add1",
        //   "#abd9e9",
        //   "#e0f3f8",
        //   "#ffffbf",
        //   "#fee090",
        //   "#fdae61",
        //   "#f46d43",
        //   "#d73027",
        //   "#a50026",
        // ],
        // color: ["#801dae", "#8d4bbb", "#b0a4e3", "#cca4e3"],
        color: ["#845EC2", "#A178DF", "#BE93FD", "#DCB0FF", "#FACCFF"],
      },
      // outOfRange: {
      //   colorAlpha: 0,
      // },
    },
    series: [
      {
        name: "诗词数量",
        type: "bar3D",
        coordinateSystem: "geo3D",
        // symbol:
        //   "path://M852.053333 491.946667A149.333333 149.333333 0 0 0 704 362.666667a147.84 147.84 0 0 0-56.106667 11.093333A213.333333 213.333333 0 0 0 234.666667 448v1.28a178.986667 178.986667 0 0 0-21.333334-1.28 170.666667 170.666667 0 0 0 0 341.333333h618.666667a149.333333 149.333333 0 0 0 20.053333-297.386666z",
        // symbolSize: function (value: any, params: any) {
        //   // console.log(params);
        //   let t = [];
        //   if (value[2] > 50) {
        //     t = [30, 15];
        //   } else if (value[2] < 50 && value[2] > 20) {
        //     t = [20, 10];
        //   } else if (value[2] < 20 && value[2] > 10) {
        //     t = [12, 6];
        //   } else {
        //     t = [8, 4];
        //   }
        //   return t;
        //   // console.log(value[2]);
        // },
        shading: "lambert",
        barSize: 0.8,
        minHeight: 0.5,
        silent: true,
        itemStyle: {
          color: "#4a1075",
          opacity: 0.5,
          // color: "#b87333",
        },
        data: poi,
      },
    ],
  };
  myChart.setOption(option);
};
onMounted(() => {
  // console.log("onMounted");
  initMap();
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
