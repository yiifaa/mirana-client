import AccountList from 'apps/security/account/list.vue'
import RoleList from 'apps/security/role/list.vue'

export default  {
    
    path: 'security',
    
    redirect: '/security/account',
    icon: 'fa fa-university',
    name: '系统管理',
    
    component: {
        render(c) {
            return c('router-view')
        }
    },
    
    children: [
        {
            path: 'account',
            name: '用户管理',
            icon: 'fa fa-users',
            component: AccountList
    }, {
            path: 'role',
            name: '角色管理',
            icon: 'fa fa-ship',
            component: RoleList
    }
  ]
}