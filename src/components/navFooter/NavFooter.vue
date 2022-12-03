<template>
    <div>
        done {{ done }} / all {{ all }}
    </div>
    <div v-if="(done > 0)">
        <button>Clear</button>
    </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    name: 'navFooter',
    setup(props, ctx) {
        let done = ref(1)
        let all = ref(3)
        return {
            done,
            all
        }
    }
})
</script>

<style scoped lang="sccs">

</style>