<template>
    <div class="app">
        <AppHeader/>
            <div class="app-body">
                <Sidebar/>
                <main class="main">
                    <breadcrumb :list="list" style="margin-bottom:15px;"/>
                    <div class="container-fluid" id="aFluid">
                        <router-view></router-view>
                    </div>
                </main>
                <AppAside/>
            </div>
        <AppFooter/>       
    </div>
</template>

<script>
    import AppHeader from 'components/Header.vue'
    import Sidebar from 'components/Sidebar.vue'
    import AppAside from 'components/Aside.vue'
    import AppFooter from 'components/Footer.vue'
    import Breadcrumb from 'components/Breadcrumb.vue'
    
    /**
     * 默认的布局
     */
    export default {

        name: 'full',

        components: {
            AppHeader,
            Sidebar,
            AppAside,
            AppFooter,
            Breadcrumb
        },

        computed: {

            /**
             *  获取当前路由名称
             */
            name () {
                return this.$route.name
            },

            /**
             *  访问路径
             */
            list () {
                return this.$route.matched
            }
        }
    }
</script>
