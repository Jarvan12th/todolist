<template>
    <div>
        <nav>header</nav>
        <nav>main</nav>
        <nav>footer</nav>
    </div>
</template>

<script>
import NavHeaderVue from '@/components/navHeader/NavHeader.vue';
import NavMainVue from '@/components/navMain/NavMain.vue';
import NavFooterVue from '@/components/navFooter/NavFooter.vue';
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Home',
    props: {},
    components: {
        NavHeaderVue,
        NavMainVue,
        NavFooterVue
    },
    setup(props, ctx) {
        return {}
    }
})
</script>

<style scoped lang="SCSS">

</style>