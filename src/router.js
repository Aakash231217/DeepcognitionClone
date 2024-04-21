import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Inbox from './components/Inbox.vue';
import Documents from './components/Document.vue';

// ... other imports

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/inbox', component: Inbox },
    {path:'/documents',component:Documents}
    // ... other route definitions
  ],
});

export default router;
