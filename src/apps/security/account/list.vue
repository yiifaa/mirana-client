<template>
    <div class="sti-list-page card sti-card" id="account">
        <div class="sti-list-query">
            <div class="pull-left">
               <router-link to="/security/account/_" class="btn btn-secondary">新增</router-link>
            </div>
            <div class="pull-right">
                <div class="input-group">
                    <input type="text" class="form-control" v-model="username" placeholder="用户名">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button" @click="search">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>

       <jq-grid :url="url" col-size="4" :sub-grid="true" ref="accountGrid" :on-ready="initGrid" :query="queryParams">
           <jq-col label="用户名" name="username" width="75" :sortable="true"></jq-col>
           <jq-col label="已激活" name="enabled" width="90">
               <label class="switch switch-default switch-primary">
                  <input type="checkbox" class="switch-input" name="enabled" init-value="${value}" value="${row.rowId}">
                  <span class="switch-label"></span>
                  <span class="switch-handle"></span>
               </label>
           </jq-col>
           <jq-col label="创建时间" name="createTime" width="90" :formatter="dateTimeFormat">
           </jq-col>
           <jq-col label="操作" name="id" width="90" :sortable="false" :detail="false">
               <router-link to="/security/account/${value}" class="btn btn-sm btn-primary" title="编辑">
                  <i class="fa fa-pencil-square-o"></i>
               </router-link>
               <button class="btn btn-sm btn-danger btn-remove" data-id="${value}" title="删除">
                    <i class="fa fa-trash-o"></i>
               </button>
           </jq-col>
       </jq-grid>
    </div>
</template>
<style>
    #account .switch  {
        margin-bottom: 0px;
    }
</style>

<script>
import {jqGrid, jqCol} from 'components/jqGrid/index.es6'
import UrlService from 'services/UrlService.es6'
import { formatBool, dateTimeFormat } from 'services/FormatService.es6'
import $ from 'jquery'

export default {
    
    components: {
        jqGrid,
        jqCol
    },
    
    data () {
        let url = UrlService.url('security/account/query')
        return {
            url
        }
    },
    
    mounted () {
        
    },
    
    methods: {
        
        formatBool,
        dateTimeFormat,
        
        initGrid () {
            let _this = this
            //
            $(this.$el).find('.btn-remove').on('click', function(event) {
                let promise = _this.$confirm(),
                    id = $(this).attr('data-id')
                //  用户选择继续删除
                promise.then(function(val) {
                    //  提交查询
                    $.post(_this.$url('app/security/account/' + id), (datas) => {
                        
                    })
                })
                event.preventDefault()
            })
            //  初始化切换按钮
            $(this.$el).find(':checkbox[name=enabled]')
                       .each((i, item) => {
                            let val = $(item).attr('init-value'),
                                enabled = false
                            if(val === 'true') {
                                enabled = true
                            }
                            $(item).prop('checked', enabled)
                            $(item).on('change', function() {
                                alert($(this).prop('checked'))
                            })
                       })
        },
        
        search () {
            this.$refs.accountGrid.reload()
        },
        
        queryParams () {
            return {
                'username' : this.username
            }
        }
        
    }
    
}
</script>