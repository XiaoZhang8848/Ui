<template>
  <div class="container">
    <div ref="contentRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
});

let i = 0;
var str = props.msg;
const contentRef: any = ref(null);
function outContent() {
  contentRef.value.innerText += str.charAt(i);
  i++;
  const res = setTimeout(outContent, 100);
  if (i === str.length) {
    clearTimeout(res);
  }
}

onMounted(() => {
  outContent();
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

.container {
  font-family: 'Roboto Mono', monospace;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 2rem;
}
</style>
