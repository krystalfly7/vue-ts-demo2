<template>
  <div class="hello">
    <h1>Ts extend : {{ msg }}</h1>
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

<script lang="ts">
import Vue from 'vue';
import Header from './Header.vue';

import ExampleMixin from './ExampleMixin';

interface ItemInterface {
  key: string,
  val: string,
  num: number
}
interface User {
  name: string,
  money: number
}
// const foo: Item = {
// 编译器将会提供 Foo 属性的代码提示
//   key: 'key1',
//   val: 'val1',
//   num: 1
// };
export default Vue.extend({
  name: 'ExtendDemoTs',
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
      type: Array as () => Array<ItemInterface>
    },
    objE: {
      type: Object as () => ItemInterface,
    }
  },
  data() {
    return {
      historyMoney: 100,
      userObj: {
        name: 'krystal',
        money: 20,
      }
    }
  },
  // created() {
  //   // console.log(this.testValue)
  // },
  watch: {
    'userObj.money': (newval) : void => {
      if(newval < 15) {
        alert('你这个月已经花掉四分之一的预算了!');
      }
    }
  },
  computed: {
    userMoney() : number {
      return this.userObj.money + this.historyMoney;
    }
    // userMoney() {
    //   return 2
    // }
  },
  methods: {
    keepStatus() {
      alert('你的钱没有变化!');
    },
    makeMoney() : void {//如果指定返回数据就必须是正确的类型，否则报错
      this.userObj.money += 1;
      // this.testkk();
    },
    spendMoney() : void {
      this.userObj.money -= 1;
    },
  }
});
</script>
<style scoped lang="scss">
.other {
  margin: 20px;
}
</style>
