// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome.vue'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons.vue'

export default  {
    path: 'icons',
    
    redirect: '/icons/font-awesome',
    
    name: '图标',
    
    component: {
        render(c) {
            return c('router-view')
        }
    },
    
    children: [
        {
            path: 'font-awesome',
            name: '字体图标',
            component: FontAwesome
    },
        {
            path: 'simple-line-icons',
            name: '简单图标',
            component: SimpleLineIcons
    }
  ]
}