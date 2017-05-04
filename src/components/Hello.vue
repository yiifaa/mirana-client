<template>
    <!-- 作为根节点，必须携带大屏样式 -->
    <div class="app-big-screen">
        <modal v-model="open" title="Modal 1" cancel-text="取消" ok-text="确定">
          <p>This is a simple modal.</p>
        </modal>
        <h1 v-text="$t('commons.title')"></h1>
        <div style="height:80%;background-color:yellow;">
            123
        </div>
        <button @click="sendMessage">发送</button>
    </div>
</template>
<script>
    import { Modal }  from 'uiv'
    import { MESSAGE } from 'xStore/xType.es6'
    export default {
        data () {
            return {
                count: 1,
                open: true,
                message: 'Hi, G Huan!'
            }
        },
        
        components : {
            Modal
        },
        
        methods: {
            sendMessage () {
                this.count++
                this.$store.commit(MESSAGE, {status:'success', text:'Success' + this.count})
            }
        }
        
    }
</script>