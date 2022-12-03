<template>
    <div>
        <input placeholder="input your task" v-model="value"/>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        return {
            value
        }
    }
})
</script>

<style scoped lang="sccs">

</style>