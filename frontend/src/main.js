/*
    main.js is the entry point to vue
*/

//directly importing the method "createApp"
import { createApp } from 'vue'
//importing the route app component
import App from './App.vue'
//importing the router component
import router from './router'
//importing the stylesheet
import './index.css'

//creating the main app component and mounting it to the div with the id of app
createApp(App).use(router).mount('#app')

