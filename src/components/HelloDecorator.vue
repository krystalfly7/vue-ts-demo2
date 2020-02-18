<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <div>{{ data1 }}</div>
        <div>{{ data2 }}</div>
        <div>{{ data3 }}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <button @click="emitTodo('emit Todo event!!')">emitTodo</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";

interface Person {
    name: string,
    age: number
}

@Component

export default class HelloDecorator extends Vue {
    @Prop() name!: string;//!是和?相对的，表示强制解析（告诉ts编译器，这里一定有值)
    @Prop() initialEnthusiasm!: number;
    @Prop() userObj?: object;
 
    enthusiasm = this.initialEnthusiasm;
    data1 = "HelloDecorator";
    data2 =  1;
    data3 = {};

    mounted() {
        console.log('mounted')
    }

    @Watch('data1')
    onWatchData1(newVal: string, oldVal: string){
        console.log(newVal);
    }

    @Watch('userObj', { deep: true })
    onWatchPerson(newVal: Person){
        console.log(newVal);
    }

    increment() {
        this.enthusiasm++;
        this.data1 = 'data1 变更了'
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }

    @Emit('testEmit')
    emitTodo(params: string) {
        console.log('hello');
        return 'ssss'// 不指定的时候传递的是params
        // this.$emit('emit-todo', params);
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
