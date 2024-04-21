import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Inbox from './components/Inbox.vue';
import Documents from './components/Document.vue';
import FilePreparation from './components/FilePreparation.vue'

const routes = [
  { path: '/', redirect: '/dashboard' }, // Redirect root path to /dashboard
  { path: '/dashboard', component: Dashboard },
  { path: '/inbox', component: Inbox },
  { path: '/documents', component: Documents },
  {path:'/file-preparation',component:FilePreparation}
  // ... other route definitions
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

