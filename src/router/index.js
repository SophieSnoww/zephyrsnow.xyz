import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LinksView from '../views/LinksView.vue';
import GalleryView from '../views/GalleryView.vue';
import ImageView from '../views/ImageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {
        transition: 'fade'
      }
    },
    {
      path: '/links',
      component: LinksView,
      meta: {
        transition: 'fade'
      }
    },
    {
      path: '/gallery',
      component: GalleryView,
      meta: {
        transition: 'fade'
      }
    },
    {
      path: '/gallery/:imageName',
      component: ImageView,
      meta: {
        transition: 'fade'
      }
    }
  ]
});

export default router;
