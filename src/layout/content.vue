<!--
 * @Author: your name
 * @Date: 2020-04-29 15:33:22
 * @LastEditTime: 2020-04-29 17:38:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\src\content.vue
 -->
<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluContent"
};
</script>

<style lang='scss' scoped>
.content {
  flex-grow: 1;
}
</style>