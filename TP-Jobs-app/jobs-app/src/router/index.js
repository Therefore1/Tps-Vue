import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import JobDetails from '../views/JobDetails.vue'
import JobForm from '../views/JobForm.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jobs/:id', component: JobDetails },
  { path: '/ajouter', component: JobForm },
  { path: '/modifier/:id', component: JobForm }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
