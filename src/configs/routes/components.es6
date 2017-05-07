// Views - Components
import Buttons from '@/views/components/Buttons.vue'
import SocialButtons from '@/views/components/SocialButtons.vue'
import Cards from '@/views/components/Cards.vue'
import Forms from '@/views/components/Forms.vue'
import Modals from '@/views/components/Modals.vue'
import Switches from '@/views/components/Switches.vue'
import Tables from '@/views/components/Tables.vue'
import Grids from '@/views/components/Grids.es6'

export default {
    path: 'components',
    redirect: '/components/buttons',
    icon: 'fa fa-cubes',
    name: '通用控件',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: 'buttons',
            name: '按钮',
            component: Buttons
    },
        {
            path: 'social-buttons',
            name: '社交按钮',
            component: SocialButtons
    },
        {
            path: 'cards',
            name: '卡片',
            component: Cards
    },
        {
            path: 'forms',
            name: '表单',
            component: Forms
    },
        {
            path: 'modals',
            name: '模式框',
            component: Modals
    },
        {
            path: 'switches',
            name: '切换按钮',
            component: Switches
    },
        {
            path: 'tables',
            name: '表格',
            component: Tables
    },
        {
            path: 'grids',
            name: '复合列表',
            component: Grids
    }
  ]
}