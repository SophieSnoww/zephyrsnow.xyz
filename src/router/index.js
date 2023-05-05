import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LinksView from '../views/LinksView.vue';
import GalleryView from '../views/GalleryView.vue';
import ImageView from '../views/ImageView.vue';
import CommissionsView from '../views/CommissionsView.vue';
import UtilView from '../views/UtilView.vue';

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
      path: '/commissions',
      component: CommissionsView,
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
    },
    {
      path: '/util',
      component: UtilView,
      meta: {
        transition: 'fade'
      }
    }
  ]
});

export default router;
