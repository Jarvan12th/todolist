<template>
    <div>
        <input placeholder="input your task" v-model="value" @keydown.enter="enter" />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        let enter = () => {
            ctx.emit('add', value.value)
            value.value = ''
        }
        return {
            value,
            enter
        }
    }
})
</script>

<style scoped lang="sccs">

</style>