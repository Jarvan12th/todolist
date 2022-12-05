<template>
    <div>
        <nav-header @add="add"></nav-header>
        <nav-main :list="list"></nav-main>
        <nav-footer :list="list"></nav-footer>
    </div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader.vue';
import NavMain from '@/components/navMain/NavMain.vue';
import NavFooter from '@/components/navFooter/NavFooter.vue';
import { defineComponent, ref } from 'vue';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
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
        let list = computed(() => {
            return store.state.list
        })
        let value = ref('')
        let add = (val) => {
            value.value = val
            console.log(val)
        }
        return {
            list,
            add,
            value
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>