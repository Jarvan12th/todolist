<template>
    <div>
        <nav>header</nav>
        <nav>main</nav>
        <nav>footer</nav>
        <div>A week contains {{ data.num }} days</div>
        <div>They are {{ data.arr }}</div>
        <div>Today is {{ data.today }}, {{ data.obj.date }}</div>
    </div>
</template>

<script>
import NavHeaderVue from '@/components/navHeader/NavHeader.vue';
import NavMainVue from '@/components/navMain/NavMain.vue';
import NavFooterVue from '@/components/navFooter/NavFooter.vue';
import {defineComponent, ref, reactive} from 'vue'
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
            data
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>