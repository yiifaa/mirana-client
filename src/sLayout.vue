<template>
    <div class="app">
        <AppHeader/>
            <div class="app-body">
                <Sidebar/>
                <main class="main">
                    <breadcrumb :list="list"/>
                    <div class="container-fluid" id="aFluid">
                        <router-view></router-view>
                    </div>
                </main>
                <AppAside/>
            </div>
        <AppFooter/>
        
       <!-- 辅助区域 -->
       <div id="app-alarms">
          <template v-for="ms in messageQueue" >
             <alert v-if="ms.show" :type="ms.status" width="100%" :model="ms" :key="ms.id"
                    :value="ms.show" :dismissable="true" :duration="ms.duration" :close="remove">
                 <p v-html="ms.text"></p>
             </alert>
          </template>
       </div>
    </div>
</template>

<style>
    #app-alarms {
        position: fixed;
        width: 30%;
        min-width : 350px;
        max-width: 450px;
        top:    67px;
        right:  15px;
        z-index: 999;
    }
</style>

<script>
    import AppHeader from 'components/Header.vue'
    import Sidebar from 'components/Sidebar.vue'
    import AppAside from 'components/Aside.vue'
    import AppFooter from 'components/Footer.vue'
    import Breadcrumb from 'components/Breadcrumb.vue'
    import _ from 'lodash'
    import { alert } from 'components/vue-strap'

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
            Breadcrumb,
            alert
        },

        data () {

            return {
                //  显示消息
                messageQueue: []
            }
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
            },

            /**
              * 返回的消息
              */
            message () {
                return this.$store.state.message
            }  
        },

        watch: {
                //  必须通过深度监控，才能检测到它的变化，但它的值始终未变
                message : {
                    handler: function(val) { 
                       this.messageQueue.push(_.clone(this.message, true))                   
                    },
                    deep: true
                }
        }
    }
</script>
