<template>
    <div>
        <h1>This is a detail page</h1>
        <child :msg="msg" @send="send"></child>
    </div>
</template>

<script>
import { send } from 'process';
import { defineComponent, ref } from 'vue';
import child from '../components/child/Child.vue'

export default defineComponent({
    name: 'detail',
    components: {
        child
    },
    setup() {
        let msg = ref('message in detail')
        let send = (val) => {
            console.log(val)
        }
        return {
            msg,
            send
        }
    }
})
</script>