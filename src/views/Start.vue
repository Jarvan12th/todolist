<template>
    <div class="start">
        <button @click="start">Start Task</button>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup(props, ctx) {
        let router = useRouter()
        let start = () => {
            router.push({
                path: '/home'
            })
        }
        return {
            start
        }
    }
})
</script>