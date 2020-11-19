import Vue from 'vue'
import Router from 'vue-router'
import ResponsiveCheck from '@/components/ResponsiveCheck'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'ResponsiveCheck',
        component: ResponsiveCheck
    }]
})