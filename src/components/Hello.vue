<template>
    <div>
        <h1 v-text="$t('commons.title')"></h1>
        <h2 v-text="message"></h2>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: 'Hi, G Huan!'
            }
        }
        
    }
</script>