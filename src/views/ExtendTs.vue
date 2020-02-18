<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ExtendDemo
      msg="Welcome to Your Vue.js App"
      :numberA="2"
      :strOrNumB="'sting B'"
      :booleanC="true"
      :arrayD="[{key:'1',val:'1',num:2}]"
      :objE="{'test':'哈哈对象'}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExtendDemo from "@/components/ExtendDemoTs.vue";


export default {
  name: "ExtendTs",
  components: {
    ExtendDemo
  }
};
</script>
