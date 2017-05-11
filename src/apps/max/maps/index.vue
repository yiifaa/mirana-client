<template>
    <div id="app-maps">
        <div class="app-max-header">
            <h1 v-text="title" class="pull-left"></h1>
            <div class="pull-right">
                <h3 v-text="time"></h3>
            </div>
        </div>
        <div class="app-max-body">
            <div id="main-map" class="app-max-card" style="width:70%;height:70%;">
                <attack></attack>               
            </div>
            <div class="app-max-card" style="width:30%;height:70%;">
                <att-list></att-list>
            </div>
            <div class="app-max-card">
                <div class="card">
                    3
                </div>  
            </div>
            <div class="app-max-card">
                <div class="card">
                4
                </div>  
            </div>
            <div class="app-max-card">
                <div class="card">
                5
                </div>  
            </div>
             <div class="app-max-card">
                <div class="card">
                6
                </div>  
            </div>
        </div>
    </div>
</template>

<style lang="less">
    #app-maps {
        width: 100%;
        height: 100%;
        padding-top:68px;
    }
    
    .app-max-header {
        heigth: 68px;
        padding: 8px 0px;
        margin-top: -68px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
        .pull-right {
            width:260px;
            text-align: left;
            padding-top: 8px;
            padding-right: 8px;
        }
    }
    
    .app-max-body {
        height: 100%;
        width: 100%;
        .app-max-card {
            float: left;
            width: 25%;
            height: 30%;
            
            .card {
                height: 100%;
            }
        }
    }
    
</style>
<script>
    import { dateTime } from 'configs/AppConfig.es6'
    import moment from 'moment'
    import attack from './attack.vue'
    import attList from './list.vue'
    import LineExample from '@/views/charts/LineExample.vue'
    import DoughnutExample from '@/views/charts/DoughnutExample.vue'
    import RadarExample from '@/views/charts/RadarExample.vue'
    import PieExample from '@/views/charts/PieExample.vue'
    import PolarAreaExample from '@/views/charts/PolarAreaExample.vue'
    
    export default {
        
        data () {
            return {
                title: '全国僵木蠕态势感知',
                time : this.now()
            }
        },
        
        created () {
            this.timer = setInterval(()=>{
                this.time = this.now()
            }, 1000)
        },
        
        components: {
            attack,
            attList,
            LineExample,
            DoughnutExample,
            RadarExample,
            PieExample,
            PolarAreaExample
        },
        
        /**
         *  消除定时器
         */
        beforeDestroy () {
            clearInterval(this.timer)
        },
                
        methods: {
            
            now () {
                let now = moment(),
                    result = now.format(dateTime)
                return result
            }
        }        
    }
</script>