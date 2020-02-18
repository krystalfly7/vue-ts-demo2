<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloDecorator :name="'world'" :initialEnthusiasm="5" @testEmit="emitTodo" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloDecorator from "@/components/HelloDecorator.vue";

export default {
  name: "Home2",
  components: {
    HelloDecorator
  },
  methods: {
    emitTodo(params) {
      console.log('父组件接收到参数:' + params);
    }
  }
};
</script>
