<template>
    <div v-for="(item, index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.isCompleted"> {{ item.task }}
            <button class="del" @click="del(item, index)">Delete</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'navMain',
    setup(props, ctx) {
        let list = ref([
            {
                task: 'coding',
                isCompleted: false
            },
            {
                task: 'playing',
                isCompleted: false
            },
            {
                task: 'talking',
                isCompleted: false
            }
        ])
        let del = (item, index) => {
            console.log(item)
            console.log(index)
        }
        return {
            list, del
        }
    }
})
</script>

<style scoped lang="sccs">

</style>