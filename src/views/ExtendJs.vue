<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ExtendDemo
      msg="Welcome to Your Vue.js App"
      :numberA="2"
      :strOrNumB="'sting B'"
      :booleanC="true"
      :arrayD="[1,2,3]"
      :objE="{test: '哈哈对象'}"
      @onTest="testMethod"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExtendDemo from "@/components/ExtendDemoJs.vue";


export default {
  name: "ExtendJs",
  components: {
    ExtendDemo
  },
  methods: {
    testMethod() {
      console.log('testMethod excute');
    }
  }
};
</script>
