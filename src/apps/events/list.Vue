<template>
    <div class="sti-list-page card sti-card">
        <div class="sti-list-query">
            <div class="pull-left">
                <button class="btn btn-default">审计</button>
            </div>
            <div class="pull-right">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="查询条件">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>

       <jq-grid :url="url" col-size="6" :sub-grid="true" :on-ready="initGrid" >
           <jq-col label="事件名称" name="name" width="75" :sortable="true"></jq-col>
           <jq-col label="事件类型" name="type" width="90" :formatter="typeFormat"></jq-col>
           <jq-col label="重要程度" name="tant" width="90" :formatter="starFormat"></jq-col>
           <jq-col label="发生地点" name="gbp" width="60"></jq-col>
           <jq-col label="发生时间" name="time" width="120" :formatter="dateTimeFormat"></jq-col>
           <jq-col label="操作" name="id" width="120" :sortable="false" :formatter="actionFormat"></jq-col>
       </jq-grid>
       
       <modal v-model="show" @ok="show = false" ok-text="确定" cancel-text="取消">
           <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
              关联结果
            </h4>
          </div>
          <div style="width:450px;height:250px;" id="mainChart">
              
          </div>
       </modal>
       
       <div class="card card-inverse card-primary" id="hoverPanel">
          <div class="card-block">
            <div class="h4 m-0">25%</div>
            <div>登陆事件/所有事件</div>
            <div class="progress progress-white progress-xs my-3">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small class="text-muted">统计时间：2017-05-10</small>
          </div>
       </div>
    </div>
</template>
<style lang="less">
    #hoverPanel {
        width:315px;
        height:143px;
        position:absolute;
        top:0px;
        display:none;
    }
    
    .sti-grid-buttons {
        a {
            margin-right : 15px;
            &:last-child {
                margin-right : 0px;
            }
        }
    }
    .btn-type {
        display: block;
        position: relative;
    }
</style>
<script>
import {jqGrid, jqCol} from 'components/jqGrid/index.es6'
import { formatBool, dateTimeFormat } from 'services/FormatService.es6'
import EChartService from 'services/EChartService.es6'
import $ from 'jquery'
import { modal } from 'components/vue-strap'

export default {
    
    components: {
        jqGrid,
        jqCol,
        modal
    },
    
    data () {
        let url = this.$url('static/datas/events.json')
        return {
            url,
            show: false
        }
    },
    
    mounted () {
        let panel = $(this.$el).find('#hoverPanel').appendTo('body')
        this.panel = panel
    },
    
    methods: {
        dateTimeFormat,
        
        starFormat (val, row) {
            let tmpl = `<i class="fa fa-star" aria-hidden="true"></i>`,
                color = 'green',
                result = ''    
            for(let i = 0; i < val; i++) {
                result += tmpl
            }
            if(val==0) {
                result = tmpl
            }
            switch(val) {
                case 0:    
                case 1:
                    break
                    
                case 2:
                case 3:
                    color = 'yellow'
                    break
                
                default:
                    color = 'red'
                    break                        
            }
            return `<div style="color:${color}">${result}</div>`
        },
        
         actionFormat (val, row) {
            return `
                            <div class="sti-grid-buttons">
                                <a href="javascript:void(0)" class="btn-search" data-value="${val}" title="检索相同">
                                    <i class="fa fa-search"></i>
                                </a>
                                
                                <a href="javascript:void(0)" class="btn-topo" title="关联拓扑"  data-value="${val}">
                                    <i class="fa fa-sitemap"></i>
                                </a>

                                <a href="javascript:void(0)" class="btn-tag" title="重点关注"  data-value="${val}">
                                    <i class="fa fa-tag"></i>
                                </a>
                            </div>
                       `
        },
        
        typeFormat (val) {
            return `
                    <a href="javascript:void(0)" class="btn-type">${val}</a>
                   `
        },
        
        initChart () {
            console.log(123)
            var myChart = EChartService.init('mainChart');                
            var option = {
                tooltip: {
                    show: true
                },
                legend: {
                    data:['事件数量']
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ["系统登录","网络访问","数据库写入","安装软件","系统授权"]
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        "name":"事件数量",
                        "type":"bar",
                        "data":[5, 20, 40, 10, 10]
                    }
                ]
            };

            // 为echarts对象加载数据 
            myChart.setOption(option); 
        },
        
        initGrid () {
            let _this = this
            $(this.$el).find(".btn-search").on("click", function(event) {
                let promise = _this.$confirm({
                    title: `提示信息`,
                    comments : `关联查询将耗费较长时间，请确认是否继续？`
                })
                promise.then(function(val) {
                    _this.show = true
                }).catch(function(err) {
                    // alert(err)
                })
            })
            //
            $(this.$el).find(".btn-topo").on("click", function() {
                    _this.show = true
                    _this.$nextTick(() => {
                        _this.initChart()
                    })
            });
            
            //  let panel = $(this.$el).find('#hoverPanel')
            $(this.$el).find(".btn-type").hover(function(event) {
                let left = event.pageX + 15,
                    top = event.pageY + 15
                _this.panel.css({
                    left, top
                }).show()
            }, function(event) {
                _this.panel.hide()
            })
        }
    }    
    
}
</script>