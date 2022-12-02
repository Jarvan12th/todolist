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
import {defineComponent, ref, reactive, toRefs} from 'vue'
export default defineComponent({
    name: 'Home',
    props: {},
    components: {
        NavHeaderVue,
        NavMainVue,
        NavFooterVue
    },
    setup(props, ctx) {
        let data = reactive({
            num: 7,
            arr: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            today: 'Thursday',
            obj: {
                data: '2022-12-1'
            }
        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>