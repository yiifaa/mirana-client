// Views - Icons
import FontAwesome from '@/views/icons/FontAwesome.vue'
import SimpleLineIcons from '@/views/icons/SimpleLineIcons.vue'

export default  {
    path: 'icons',
    redirect: '/icons/font-awesome',
    name: 'Icons',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: 'font-awesome',
            name: 'Font Awesome',
            component: FontAwesome
    },
        {
            path: 'simple-line-icons',
            name: 'Simple Line Icons',
            component: SimpleLineIcons
    }
  ]
}