<template>
    <div class="container">
        <div>
            done {{ done }} / all {{ list.length }}
        </div>
        <div v-if="(done > 0)">
            <button @click="clear">Clear</button>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity'
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'navFooter',
    props: {
        list: {
            typeof: Array,
            required: true
        }
    },
    setup(props, ctx) {
        let done = computed(() => {
            let arr = props.list.filter(item => {
                return item.isCompleted
            })
            return arr.length
        })
        let clear = () => {
            let arr = props.list.filter(item => {
                return item.isCompleted === false
            })
            ctx.emit('clear', arr)
        }
        return {
            done,
            clear
        }
    }
})
</script>

<style scoped lang="sccs">

</style>