<template>
    <div>
        <nav-header @add="add"></nav-header>
        <nav-main :list="list" @del="del"></nav-main>
        <nav-footer :list="list" @clear="clear"></nav-footer>
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
            let flag = true
            list.value.map(item => {
                if (item.task === value.value) {
                    flag = false
                    alert('task has already existed!')
                }
            })
            if (flag) {
                    store.commit('addTodo', {
                    task: value.value,
                    isCompleted: false
                })
            }
        }
        let del = (index) => {
            store.commit('deleteTodo', index)
        }
        let clear = (list) => {
            store.commit('clearTodo', list)
        }
        return {
            list,
            add,
            value,
            del,
            clear
        }
    }
})
</script>

<style scoped lang="SCSS">

</style>