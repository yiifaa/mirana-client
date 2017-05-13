import xLayout from '@/xLayout.vue'
import Maps from 'apps/max/maps/index.vue'
import Times from 'apps/max/times/index.vue'

export default {
    path: '/trends',
    redirect: '/trends/maps',
    name: 'Pages',
    component: xLayout,
    
    children: [
        /**
        {
        path: '/trends/maps',
        icon: 'icon-speedometer icon',
        //alias: '/'    
        name: '地图态势感知',
        component: Maps,
        news: true
    }**/, {
        path: '/trends/bigs',
        icon: 'icon-speedometer icon',
        //alias: '/'    
        name: '全国态势感知',
        component: Times,
        news: true
    }]
}