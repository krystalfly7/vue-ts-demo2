<template>
  <div class="hello">
    <h1 @click="onTest">Js extend: {{ msg }}</h1>
    <Header />
    <div>numberA的值：{{ numberA }}</div>
    <div>strOrNumB的值：{{ strOrNumB }}</div>
    <div v-if="booleanC">显示booleanC</div>
    <div>arrayD的数组计算值：{{ arrayD }}</div>
    <div>objE的对象值：{{ objE }}</div>
    <div class="other">以下说明data、computed、method、watch的使用</div>
    <div>{{userObj.name}}总共有{{userMoney}}元</div>
    <div>{{userObj.name}}这个月的预算{{userObj.money}}有元</div>
    <div @click="spendMoney">花掉一元</div>
    <div @click="makeMoney">赚取一元</div>
    <div @click="keepStatus">没有开支</div>
    <div class="other">以下说明mixin</div>
    <div>mixin中的{{testValue}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from './Header.vue';
import ExampleMixin from './ExampleMixin.js';
import { Emit } from 'vue-property-decorator';

export default Vue.extend({
  name: "ExtendDemoJs",
  mixins: [ExampleMixin],
  components: {
    Header
  },
  props: {
    msg: String,
    numberA: Number,
    strOrNumB: [String, Number],
    booleanC: {
      type: Boolean,
      required: true
    },
    arrayD: {
      type: Array
    },
    objE: {
      type: Object,
    }
  },
  data() {
    return {
      historyMoney: 100,
      userObj: {
        name: 'krystal',
        money: 20,
      },
      data1: 'Hello data1'
    }
  },
  created () {
    console.log(this.testValue)
  },
  watch: {
    'userObj.money': (newval) => {
      if(newval < 15) {
        alert('你这个月已经花掉四分之一的预算了!');
      }
    },
    data1: (newval) => {
      console.log(newval)
    },
    userObj: {
        handler: (newVal) => {
          console.log(newVal)
        },
        immediate: true,
        deep: true
    }
  },
  computed: {
    userMoney() {
      return this.userObj.money + this.historyMoney;
    }
  },
  methods: {
    keepStatus() {
      alert('你的钱没有变化!');
    },
    makeMoney() {
      this.userObj.money += 1;
      this.testkk();
    },
    spendMoney() {
      this.userObj.money -= 1;
    },
    onTest() {
      this.$emit('onTest');
    }
  }
});
</script>
<style scoped lang="scss">
.other {
  margin: 20px;
}
</style>
