<template>
    <div class="sti-list-page">
        <div class="sti-list-query">
            <div class="pull-left">
                <button class="btn btn-default">新增</button>
            </div>
            <div class="pull-right">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="查询分类">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>

       <jq-grid :url="url" col-size="3" :sub-grid="false">
           <jq-col label="用户名" name="username" width="75" :sortable="true"></jq-col>
           <jq-col label="已激活" name="enabled" width="90"></jq-col>
           <jq-col label="创建时间" name="createTime" width="90"></jq-col>
       </jq-grid>
    </div>
</template>
<script>
import {jqGrid, jqCol} from 'components/jqGrid/index.es6'
import UrlService from 'services/UrlService.es6'

export default {
    
    components: {
        jqGrid,
        jqCol
    },
    
    data () {
        let url = UrlService.url('app/security/account/query')
        return {
            url
        }
    },
    
    mounted () {
        
    }
    
}
</script>