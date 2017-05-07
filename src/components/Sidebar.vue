<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
       <!--
        <li class="nav-item">
          <router-link :to="'/dashboard'" class="nav-link">
              <i class="icon-speedometer"></i> Dashboard 
              <span class="badge badge-info">NEW</span>
          </router-link>
        </li>
      -->
                
        <template v-for="menu in menus">
            <li class="nav-item nav-dropdown" v-if="menu.children && menu.children.length > 0">
                <a class="nav-link nav-dropdown-toggle" href="javascript:void(0)" @click="handleClick">
                    <i :class="menu.icon" v-if="menu.icon"></i>
                    <i class="icon-star" v-else></i>
                    {{menu.name}}
                    <span class="badge badge-info" v-if="menu.news" v-message="'commons.news'"></span>
                </a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item" v-for="child in menu.children">
                      <router-link :to="child.path" class="nav-link" exact>
                          <i :class="child.icon" v-if="child.icon"></i>
                          <i class="icon-star" v-else></i>
                          {{child.name}}
                          <span class="badge badge-info" v-if="child.news" v-message="'commons.news'"></span>
                      </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item" v-else>
              <router-link :to="menu.path" class="nav-link" exact>
                  <i :class="menu.icon"></i> {{menu.name}}
                  <span class="badge badge-info" v-if="menu.news" v-message="'commons.news'"></span>
              </router-link>
            </li>   
        </template>
        
      </ul>
    </nav>
  </div>
</template>

<script>
import { menus } from 'configs/routes/index.es6'

export default {
    
    name: 'sidebar',
    
    data () {
        return { menus }
    },
    
    methods: {
        handleClick (e) {
            e.preventDefault()
            e.target.parentElement.classList.toggle('open')
        }
    }

}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
 
</style>
