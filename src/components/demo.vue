<template>
  <div
    ref="containerRef"
    class="zoomContainer"
    :style="style"
  
  >
    <div class="box"></div>
    <div
      ref="contentRef"
      class="content"
    >
      <!-- 需要缩放的内容 -->
      <div>{{x}}-{{y}}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick} from 'vue';
import {useMouse, useDraggable } from "@vueuse/core";

// const { x, y } = useMouse();

const containerRef = ref(null);
const contentRef = ref(null);

const { x, y, style } = useDraggable(containerRef, {
  initValue: {x: 100, y: 100},
});
// 节流函数
const throttle = (func, delay) => {
  let lastTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastTime > delay) {
      func.apply(this, args);
      lastTime = now;
    }
  }
}
const scaleX = ref(1);
const scaleY = ref(1);
const translateX = ref(0);
const translateY = ref(0);

const mouseX = ref(0);
const mouseY = ref(0);

const axisX = ref(0);
const axisY = ref(0);


onMounted(() => {
  containerRef.value.addEventListener('wheel', throttle((e) => {
    e.preventDefault(); // 阻止默认滚动行为
    // 根据滚轮方向调整缩放比例
    const deltaScale = e.deltaY < 0 ? 0.05 : -0.05;
    scaleX.value += deltaScale;
    scaleY.value += deltaScale;
    const rect = contentRef.value.getBoundingClientRect();
    translateX.value += deltaScale * axisX.value
    translateY.value += deltaScale * axisY.value
    
    
    console.log(scaleX.value, translateX.value, translateY.value)
    contentRef.value.style.transform = `matrix(${scaleX.value}, 0,0, ${scaleY.value},${-translateX.value}, ${-translateY.value})`;
    setTimeout(() => {
      console.log(rect.width, rect.height);
      console.log('div绝对坐标：', rect.left, rect.top)
    }, 1000);
  }, 200));
  
  containerRef.value.addEventListener('mousemove', throttle(e => {
    const rect = contentRef.value.getBoundingClientRect();
    axisX.value = e.clientX - rect.left;
    axisY.value = e.clientY - rect.top;
    console.log('坐标', axisX.value, axisY.value);
  }, 200));
})

</script>

<style scoped>
.zoomContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: #888888;
}

.content {
  background: burlywood;
  position: absolute;
  transform-origin: top left; /* 初始变换原点 */
  transition: transform 0.2s; /* 平滑的过渡效果 */

  height: 700px;
  width: 700px;
}
.box {
  position: absolute;
  height: 700px;
  width: 700px;
  border: red 1px dashed;
}
</style>