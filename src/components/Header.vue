<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click.prevent="mobileSidebarToggle">&#9776;</button>
    <a class="navbar-brand" href="#" v-message="'commons.title'"></a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click.prevent="sidebarMinimize">&#9776;</a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#" v-message="'commons.dashboard'"></a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#" v-message="'commons.users'"></a>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="#" v-message="'commons.buttons.refresh'"></a>
      </li>
    </ul>
    <ul class="nav navbar-nav ml-auto">
      <li class="nav-item d-md-down-none">
        <a class="nav-link" href="#">
        <i class="icon-bell"></i>
        <span class="badge badge-pill badge-danger">5</span></a>
      </li>
      <!--
      <li class="nav-item d-md-down-none">
        <a class="nav-link" href="#"><i class="icon-list"></i></a>
      </li>
      <li class="nav-item d-md-down-none">
        <a class="nav-link" href="#"><i class="icon-location-pin"></i></a>
      </li>
      -->
      
      <dropdown size="nav" class="nav-item">
        <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
          <span class="d-md-down-none">admin</span>
        </span>
        
        <div slot="dropdown-menu"class="dropdown-menu dropdown-menu-right">

          <div class="dropdown-header text-center">
              <strong v-message="'commons.account'"></strong>
          </div>

          <a class="dropdown-item" href="#" @click="sendMessage">
              <i class="fa fa-bell-o"></i>
              <message keys="commons.buttons.update"/>
              <span class="badge badge-info">42</span>
          </a>
          
          <a class="dropdown-item" href="javascript:void(0)" @click="confirm">
              <i class="fa fa-envelope-o"></i>
              <message keys="commons.message"/>
              <span class="badge badge-success">42</span>
          </a>
          
          <a class="dropdown-item" href="#">
              <i class="fa fa-tasks"></i>
              <message keys="commons.task"/>
              <span class="badge badge-danger">42</span>
          </a>
    

          <div class="dropdown-header text-center">
              <strong v-message="'commons.settings'"></strong>
          </div>

          <a class="dropdown-item" href="#">
              <i class="fa fa-user"></i> 
              <message keys="commons.profile"/>
          </a>
          
          <a class="dropdown-item" href="#">
              <i class="fa fa-wrench"></i> 
              <message keys="commons.settings"/>
          </a>
          <!--
          <a class="dropdown-item" href="#"><i class="fa fa-usd"></i> Payments<span class="badge badge-default">42</span></a>          
          <a class="dropdown-item" href="#"><i class="fa fa-file"></i> Projects<span class="badge badge-primary">42</span></a>
          -->
          <div class="divider"></div>
          <a class="dropdown-item" href="#">
              <i class="fa fa-shield"></i> 
              <message keys="commons.buttons.lock"/>
          </a>
          <a class="dropdown-item" href="#">
              <i class="fa fa-lock"></i>
              <message keys="commons.buttons.logout"/>
          </a>
        </div>
      </dropdown>
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler" 
        href="javascript:void(0)" @click.prevent="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar.vue'
import { dropdown } from 'components/vue-strap'
import { MESSAGE } from 'xStore/xType.es6'
import $ from 'jquery'

export default {
  name: 'header',
    
  components: {
    navbar,
    dropdown
  },
    
  methods: {
      
    sendMessage () {
       this.$store.commit(MESSAGE, {status:'success', text:'操作成功了！'}) 
    },  
      
    click () {
      // do nothing
    },
      
    sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
//        $('body').toggleClass('sidebar-hidden')
    },
      
    sidebarMinimize (e) {
//      e.preventDefault()
//      document.body.classList.toggle('sidebar-minimized')
        $('body').toggleClass('sidebar-minimized')
    },
      
    mobileSidebarToggle (e) {
//        e.preventDefault()
//        document.body.classList.toggle('sidebar-mobile-show')
        $('body').toggleClass('sidebar-mobile-show')
    },
      
    asideToggle (e) {
//      e.preventDefault()
//      document.body.classList.toggle('aside-menu-hidden')
        $('body').toggleClass('aside-menu-hidden')
    },
      
    confirm () {
        let promise = this.$confirm()
        promise.then(function(val) {
            alert(val)
        }).catch(function(err) {
            alert(err)
        })
    }  
  }
}
</script>
