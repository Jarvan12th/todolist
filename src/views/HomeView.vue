<template>
    <div>
        <nav>header</nav>
        <nav>main</nav>
        <nav>footer</nav>
        <div>A week contains {{ num }} days</div>
        <div>They are {{ arr }}</div>
        <div>Today is {{ today }}, {{ obj.date }}</div>
    </div>
</template>

<script>
import NavHeaderVue from '@/components/navHeader/NavHeader.vue';
import NavMainVue from '@/components/navMain/NavMain.vue';
import NavFooterVue from '@/components/navFooter/NavFooter.vue';
import {defineComponent, ref} from 'vue'
export default defineComponent({
    name: 'Home',
    props: {},
    components: {
        NavHeaderVue,
        NavMainVue,
        NavFooterVue
    },
    setup(props, ctx) {
        let num = ref(7)
        let arr = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
        let today = ref('Thursday')
        let obj = ref({
            date: '2022-12-1'
        })
        return {
            num,
            arr,
            today,
            obj
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>