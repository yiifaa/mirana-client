// Views - Components
import Buttons from '@/views/components/Buttons.vue'
import SocialButtons from '@/views/components/SocialButtons.vue'
import Cards from '@/views/components/Cards.vue'
import Forms from '@/views/components/Forms.vue'
import Modals from '@/views/components/Modals.vue'
import Switches from '@/views/components/Switches.vue'
import Tables from '@/views/components/Tables.vue'

export default {
    path: 'components',
    redirect: '/components/buttons',
    name: 'Components',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: 'buttons',
            name: 'Buttons',
            component: Buttons
    },
        {
            path: 'social-buttons',
            name: 'Social Buttons',
            component: SocialButtons
    },
        {
            path: 'cards',
            name: 'Cards',
            component: Cards
    },
        {
            path: 'forms',
            name: 'Forms',
            component: Forms
    },
        {
            path: 'modals',
            name: 'Modals',
            component: Modals
    },
        {
            path: 'switches',
            name: 'Switches',
            component: Switches
    },
        {
            path: 'tables',
            name: 'Tables',
            component: Tables
    }
  ]
}