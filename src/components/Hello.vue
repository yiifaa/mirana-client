<template>
    <!-- 作为根节点，必须携带大屏样式 -->
    <div class="app-big-screen">
        <modal v-model="open" title="Modal 1" cancel-text="取消" ok-text="确定" :backdrop="false" @ok="sure">
          <p>This is a simple modal.</p>
        </modal>
        <h1 v-text="$t('commons.title')"></h1>
 
        <div id="main" style="height:400px"></div>
        <button @click="sendMessage">发送</button>
    </div>
</template>
<script>
    import { modal }  from 'components/vue-strap'
    import { MESSAGE } from 'xStore/xType.es6'
    import EchartService from 'services/EchartService.es6'
    export default {
        data () {
            return {
                count: 1,
                open: true,
                message: 'Hi, G Huan!'
            }
        },
        
        components : {
            modal
        },
        
        methods: {
            sendMessage () {
                this.count++
                this.$store.commit(MESSAGE, {status:'success', text:'Success' + this.count})
            },
            
            sure () {
                this.open = false
            }
        },
        
        mounted () {
            var myChart = EchartService.init('main'); 
                
            var option = {
                tooltip: {
                    show: true
                },
                legend: {
                    data:['销量']
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        "name":"销量",
                        "type":"bar",
                        "data":[5, 20, 40, 10, 10, 20]
                    }
                ]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option); 
        }
        
    }
</script>