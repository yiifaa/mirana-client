<template>
    <div id="app-maps">
        <div class="app-max-body">
            <div id="main-map" class="app-max-card">
                <attack></attack>               
            </div>
            <h3 id="time-label" v-text="time" :style="{'color': color}">                
            </h3>
            <div id="attack-left">
                <div style="height:50%;" id="guague">
                </div>
                
                <div style="height:50%;" id="barChart">
                </div>
            </div> 
              
            <div id="attack-right">
                <div class="card" id="attacker">
                  <div class="card-header">
                    <i class="fa fa-align-justify"></i>攻击者信息
                  </div>

                    <div class="card-block">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                  <th style="width:100px;">攻击者</th>
                                  <th>持续状态</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="att in atts">
                                    <td v-text="att.name">
                                    </td>
                                    <td>
                                        <sparkline :stats="att.stats" :color="att.color"></sparkline>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <ul class="pagination">
                          <li class="page-item"><a class="page-link" href="#">前一页</a></li>
                          <li class="page-item active">
                            <a class="page-link" href="#">1</a>
                          </li>
                          <li class="page-item"><a class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item"><a class="page-link" href="#">4</a></li>
                          <li class="page-item"><a class="page-link" href="#">后一页</a></li>
                        </ul>
                    </div>
                 </div>
            </div>  
               
        </div>
    </div>
</template>

<style lang="less">
    #app-maps {
        width: 100%;
        height: 100%;
    }
    
    #attacker {
       height: 100%;
    }
    
    #attack-right {
       position:absolute;
       width: 24%;
       right: 0px;
       height: 100%;
       padding-top: 70px;    
    }
    
    #attack-left {
       position:absolute;
       width: 24%;
       left: 0px;
       height: 100%;
       padding-top: 70px;   
    }
    
    #time-label {
        position:absolute;
        right:0px;
        width: 250px;
        padding-top:15px;
    }
    
    .app-max-body {
        height: 100%;
        width: 100%;
        position: relative;
        
        #main-map {
            height: 100%;
            width: 100%;
        }
        
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
    import EChartService from 'services/EChartService.es6'  
    import sparkline from './sparkline.vue'
    
    
    
    const colors = ['#a6c84c', '#ffa022', '#46bee9']
    export default {
        
        data () {
            return {
                title: '全国僵木蠕态势感知',
                time : this.now(),
                color: colors[0],
                atts: []
            }
        },
        
        created () {
            this.timer = setInterval(()=>{
                this.time = this.now()
            }, 1000)
        },
        
        mounted () {
            this.changeData(0)
            this.initChart1()
            this.initChart2()
        },
        
        components: {
            attack,
            attList,
            sparkline
        },
        
        /**
         *  消除定时器
         */
        beforeDestroy () {
            clearInterval(this.timer)
            clearInterval(this.timer2)
        },
                
        methods: {
            
            now () {
                let now = moment(),
                    result = now.format(dateTime)
                return result
            },
            
            setIndex (index) {
                this.color = colors[index]
                this.changeData(index)
                let datas = [
                    [10, 52, 200, 334, 390, 330, 220],
                    [110, 152, 230, 134, 250, 130, 320],
                    [210, 52, 23, 234, 125, 300, 220],
                ]
                this.option.series[0].data = datas[index]
                this.chart.setOption(this.option, true);
                //$(this.$el).find('#time-label').css('color')
            },
            
            changeData (index) {
                let ips = ['172.152.12.', '143.131.11.', '23.131.111.'],
                    prefix = ips[index]
                this.atts = []
                for(let i =0; i < 10; i++) {
                    let stats = []
                    for(let j=0; j<30; j++) {
                        stats.push(Math.round(Math.random() * 6))
                    }
                    this.atts.push({
                        color: this.color,
                        name: prefix + (12 + i * 3),
                        stats
                    })
                    
                }
            },
            
            initChart1 () {
                let option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    backgroundColor: '#404a59',
                    series: [
                        {
                            name: '健康度',
                            type: 'gauge',
                            detail: {formatter:'{value}%'},
                            data: [{value: 50, name: '网站健康度'}]
                        }
                    ]
                }
                let chart = EChartService.init('guague', true)
                chart.setOption(option)
                
                this.timer2 = setInterval(function () {
                    option.series[0].data[0].value = Math.round(Math.random() * 10) + 50;
                    chart.setOption(option, true);
                },2000);
            },
            
            initChart2 () {
                this.option = {
                    color: ['#3398DB'],
                    backgroundColor: '#404a59',
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'可疑攻击',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                };
                this.chart = EChartService.init('barChart', true)
                this.chart.setOption(this.option)
            }
        }        
    }
</script>