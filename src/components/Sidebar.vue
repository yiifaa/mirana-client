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
                <a class="nav-link nav-dropdown-toggle" href="#" @click="handleClick">
                    <i class="icon-star"></i>
                    {{menu.text}}
                    <span class="badge badge-info" v-if="menu.news" v-message="'commons.news'"></span>
                </a>
                <ul class="nav-dropdown-items">
                    <li class="nav-item" v-for="child in menu.children">
                      <router-link :to="child.href" class="nav-link" exact>
                          <i class="icon-star"></i> {{child.text}}
                          <span class="badge badge-info" v-if="child.news" v-message="'commons.news'"></span>
                      </router-link>
                    </li>
                </ul>
            </li>
            <li class="nav-item" v-else>
              <router-link :to="menu.href" class="nav-link" exact>
                  <i class="icon-puzzle"></i> {{menu.text}}
                  <span class="badge badge-info" v-if="menu.news" v-message="'commons.news'"></span>
              </router-link>
            </li>   
        </template>
        
      </ul>
    </nav>
  </div>
</template>
<script>
import menuService from 'configs/menus/index.es6'
console.log(menuService)
export default {
    
  name: 'sidebar',
    
    data () {
        let menus = menuService.menus()
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
