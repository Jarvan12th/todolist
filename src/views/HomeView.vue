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
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
    name: 'Home',
    props: {},
    components: {
        NavHeader,
        NavMain,
        NavFooter
    },
    setup(props, ctx) {
        let store = useStore()
        let router = useRouter()
        let route = useRoute()
        console.log(route.query)
        let list = computed(() => {
            return store.state.list
        })
        return {
            list
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>