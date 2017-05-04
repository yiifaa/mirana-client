<template>
    <!-- 作为根节点，必须携带大屏样式 -->
    <div class="app-big-screen">
        <modal v-model="open" title="Modal 1" cancel-text="取消" ok-text="确定">
          <p>This is a simple modal.</p>
        </modal>
        <h1 v-text="$t('commons.title')"></h1>
        <h2 v-text="message"></h2>
        <div style="height:80%;background-color:yellow;">
            123
        </div>
    </div>
</template>
<script>
    import { Modal }  from 'uiv'
    export default {
        data () {
            return {
                open: true,
                message: 'Hi, G Huan!'
            }
        },
        
        components : {
            Modal
        }
        
    }
</script>