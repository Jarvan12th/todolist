<template>
    <div v-for="(item, index) in list" :key="index">
        <div>
            <input type="checkbox" v-model="item.isCompleted"> {{ item.task }}
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

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
        return {
            list
        }
    }
})
</script>

<style scoped lang="sccs">

</style>