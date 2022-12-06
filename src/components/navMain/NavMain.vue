<template>
    <div v-if="(list.length > 0)">
        <div v-for="(item, index) in list" :key="index">
            <div class="item">
                <input type="checkbox" v-model="item.isCompleted"> {{ item.task }}
                <button class="del" @click="del(item, index)">Delete</button>
            </div>
        </div>
    </div>
    <div v-else>Currently no any task</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'navMain',
    props: {
        list: {
            typeof: Array,
            required: true
        }
    },
    emits: ['del'],
    setup(props, ctx) {
        let del = (item, index) => {
            ctx.emit('del', index)
        }
        return {
            del
        }
    }
})
</script>

<style scoped lang="sccs">

</style>