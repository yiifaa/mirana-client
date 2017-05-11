<template>
    <div class="spark-line">
        
    </div>
</template>


<script>
    import $ from 'jquery'
    import 'libs/jquery.sparkline'
    
    export default {
        
        props: {
            
            stats: {
                type: Array,
                required: true
            },
            
            color: {
                type: String
            }
        },
        
        mounted () {
            $(this.$el).sparkline(this.stats)
            this.timer = setInterval(() => {
                this.stats.shift()
                this.stats.push(Math.round(Math.random() * 6))
                $(this.$el).sparkline(this.stats, {
                    lineColor: this.color,
                    fillColor: this.color,
                    width: '180px'
                })
            }, 500)
        },
        
        beforeDestory () {
            clearInterval(this.timer)
        }
    }
</script>