<template>
    <div>
        <h1>This is a child page</h1>
        <div>Data from detail page: {{ msg }}</div>
        <button @click="send">send</button>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'child',
    props: {
        msg: {
            typeof: String
        }
    },
    setup(props, ctx) {
        let childMsg = ref('message sent from child page')
        let send = () => {
            ctx.emit('send', childMsg.value)
        }
        onMounted(() => {
            ctx.emit('send', childMsg.value)
        })
        return {
            childMsg,
            send
        }
    }
})
</script>