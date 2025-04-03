<template>
  <svg :style="{ 'width':props.size, 'height':props.size }" class="svg-icon" aria-hidden="true">
    <use :xlink:href="`#${props.prefix}-${props.icon}`" :fill="props.color"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '1em'
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em; // 因icon大小与字体大小相同,而span等标签下边缘会和字体基线对齐.因此设置一个偏移量纠正视觉上未对齐的效果
  fill: currentColor; // 定义元素的颜色,currentColor是一个变了,等价于当前元素的颜色,如果未设置color,则继承父元素
}
</style>
