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
                          <input type="email" class="form-control" required id="username" placeholder="用户">
                    </div>
                </div>
                <div class="row form-group sti-form-group">
                    <label for="password" class="col-md-3 control-label">密码</label>
                    <div class="col-md-6 sti-form-field">
                          <input type="text" class="form-control" id="password" name="password" placeholder="密码" v-disabled="disabled">
                          <valid-rule valid-for="password" name="ipv4"></valid-rule>                 
                    </div>
                </div>
                
                <div class="row form-group sti-form-group">
                    <label for="password" class="col-md-3 control-label">确认密码</label>
                    <div class="col-md-6 sti-form-field">
                          <input type="text" class="form-control" id="password" name="password" placeholder="确认密码" v-disabled="disabled">
                          <valid-rule valid-for="password" name="ipv4"></valid-rule>                 
                    </div>
                </div>
            </form>
        </div>
        
    <div class="card-footer">
       <div class="form-group sti-form-buttons row">
            <div class="offset-3 col-md-6">
                <button type="submit" class="btn btn-sm btn-primary">
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