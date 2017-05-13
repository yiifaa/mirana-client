<template>
    <div class="sti-edit-page card">
        <div class="card-header">
            <strong>编辑用户信息</strong>
        </div>
        
        <div class="card-block">
            <form action="" method="post" enctype="multipart/form-data" class="form-horizontal" >
                <div class="row form-group sti-form-group">
                    <label for="username" class="col-md-3 control-label">用户</label>
                    <div class="col-md-6 sti-form-field">
                          <input type="text" class="form-control" required id="username" placeholder="用户" v-model="username">
                    </div>
                </div>
                <template v-if="newModel">
                    <div class="row form-group sti-form-group">
                        <label for="password" class="col-md-3 control-label">密码</label>
                        <div class="col-md-6 sti-form-field">
                              <input type="text" class="form-control" id="password"
                              v-model="password" name="password" placeholder="密码" v-disabled="disabled">

                        </div>
                    </div>

                    <div class="row form-group sti-form-group">
                        <label for="password" class="col-md-3 control-label">确认密码</label>
                        <div class="col-md-6 sti-form-field">
                              <input type="text" class="form-control" placeholder="确认密码" v-disabled="disabled">
                              <valid-rule valid-for="password" name="ipv4"></valid-rule>                 
                        </div>
                    </div>                                 
                </template>
                
                <div class="row form-group sti-form-group">
                    <label for="password" class="col-md-3 control-label">已激活</label>
                    <div class="col-md-6 sti-form-field">
                          <label class="switch switch-default switch-primary">
                              <input type="checkbox" class="switch-input" v-model="enabled" >
                              <span class="switch-label"></span>
                              <span class="switch-handle"></span>
                          </label>               
                    </div>
                </div>

                <div class="row form-group sti-form-group">
                    <label for="password" class="col-md-3 control-label">已锁定</label>
                    <div class="col-md-6 sti-form-field">
                          <label class="switch switch-default switch-primary">
                              <input type="checkbox" class="switch-input" v-model="accountLocked" >
                              <span class="switch-label"></span>
                              <span class="switch-handle"></span>
                          </label>               
                    </div>
                </div>               
                
            </form>
        </div>
        
    <div class="card-footer">
       <div class="form-group sti-form-buttons row">
            <div class="offset-3 col-md-6">
                <button type="submit" class="btn btn-sm btn-primary" @click="save">
                    <i class="fa fa-floppy-o"></i>
                    保存
                </button>
                
                <router-link class="btn btn-sm btn-secondary" to="/security/account">
                    <i class="fa fa-reply"></i> 返回
                </router-link>
            </div>
        </div>   
        
    </div>
</div>
</template>


<script>
    import _ from 'lodash'
    import $ from 'jquery'
    import { MESSAGE } from 'xStore/xType.es6'
    
    export default {
        
        data () {
            return {
                id : null,
                username: '',
                password: '',
                confirmPassword: '',
                enabled: true,
                accountLocked: false                
            }    
        },
                
        created () {
            let id = this.$route.params.id
            if(this.$id(id)) {
                let url = this.$url('app/security/account/detail/' + id)
                $.getJSON(url, datas => {
                    _.assign(this, datas)
                })   
            }
        },
        
        computed : {
            
            newModel () {
                return !this.id
            }
        },
        
        watch: {
            
            newModel (val) {
                $(this.$el).find('#username').prop('readonly', !val)
            }
        },
        
        methods : {
            
            save () {
                let url = this.$url('app/security/account/save')
                $.post(url, this.$data, datas => {
                    this.$store.commit(MESSAGE, {status:'success', text:'操作成功了！'})
                })
            }
        }
    }
</script>