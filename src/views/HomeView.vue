<template>
    <div>
        <nav-header></nav-header>
        <nav-main></nav-main>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import {defineComponent, ref, reactive, toRefs} from 'vue'
export default defineComponent({
    name: 'Home',
    props: {},
    components: {
        NavHeader,
        NavMain,
        NavFooter
    },
    setup(props, ctx) {
        return {
            
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>