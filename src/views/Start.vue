<template>
    <div class="start">
        <button @click="start">Start Task</button>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { defineComponent, ref} from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup(props, ctx) {
        let router = useRouter()
        let user = ref('jarvan')
        let obj = ref({
            action: 'start'
        })
        let start = () => {
            router.push({
                // path: '/home',
                name: 'home',
                query: {
                    user: user.value,
                    obj: JSON.stringify(obj)
                }
            })
        }
        return {
            start
        }
    }
})
</script>