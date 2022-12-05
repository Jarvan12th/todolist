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
        let done = ref(1)
        let all = ref(3)
        let clear = () => {
            console.log('clear')
        }
        return {
            done,
            all,
            clear
        }
    }
})
</script>

<style scoped lang="sccs">

</style>