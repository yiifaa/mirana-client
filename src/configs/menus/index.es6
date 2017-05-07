const menus = [{
    text: 'Dashboard',
    href: '/dashboard',
    icon: '',
    news: true
            }, {
    text: 'Components',
    href: '',
    icon: '',
    children: [{
        text: 'Buttons',
        href: '/components/buttons',
        icon: ''
            }, {
        text: 'Social Buttons',
        href: '/components/social-buttons',
        icon: ''
            }, {
        text: 'Cards',
        href: '/components/cards',
        icon: ''
            }, {
        text: 'Forms',
        href: '/components/forms',
        icon: ''
            }, {
        text: 'Modals',
        href: '/components/modals',
        icon: ''
            }, {
        text: 'Switches',
        href: '/components/switches',
        icon: ''
            }, {
        text: 'Tables',
        href: '/components/tables',
        icon: ''
            }]

            }, {
    text: 'Icons',
    href: '',
    icon: '',
    children: [{
        text: 'Font Awesome',
        href: '/icons/font-awesome',
        icon: ''
            }, {
        text: 'Font Awesome',
        href: '/icons/simple-line-icons',
        icon: ''
            }]
            }, {
    text: 'Widgets',
    href: '/widgets',
    icon: ''
            }, {
    text: 'Charts',
    href: '/charts',
    icon: ''
            }, {
    text: 'Pages',
    href: '',
    icon: '',
    children: [{
        text: 'Login',
        href: '/pages/login',
        icon: ''
            }, {
        text: 'Register',
        href: '/pages/login',
        icon: ''
            }, {
        text: 'Error 404',
        href: '/pages/404',
        icon: ''
            }, {
        text: 'Error 500',
        href: '/pages/500',
        icon: ''
        }
    ]
 }
]
export default {
    
    menus () {
        return menus
    },
    
    routes () {
        
    }
    
}