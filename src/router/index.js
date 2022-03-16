/*
    AppHeader.vue intends to create a header for the application.
*/

import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ContactPage from '../views/ContactPage.vue'
import NewContactPage from '../views/NewContactPage.vue'
import EditContactPage from '../views/EditContactPage.vue'


const routes = [
    {
        path: '/',
        redirect: '/loginpage'
    },
    {
        path: '/loginpage',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/contactpage',
        name: 'ContactPage',
        component: ContactPage,
        
    },
    {
        path: '/newcontactpage',
        name: 'NewContactPage',
        component: NewContactPage
    },
    {
        path: '/editcontactpage/:id',
        name: 'EditContactPage',
        component: EditContactPage
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router