import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SobreView from '../views/SobreView.vue';
import NossaHistoria from '../components/Sobre/NossaHistoria.vue';
import MissaoVisao from '../components/Sobre/MissaoVisao.vue';
import CorpoClinico from '../components/Sobre/CorpoClinico.vue';
import CertificacoesLab from '../components/Sobre/CertificacoesLab.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sobre',
    component: SobreView,
    children: [
      {
        path: '/sobre/historia',
        name: 'sobre',
        component: NossaHistoria,
      },
      {
        path: '/sobre/missao',
        name: 'missao',
        component: MissaoVisao,
      },
      {
        path: '/sobre/corpoclinico',
        name: 'corpoclinico',
        component: CorpoClinico,
      },
      {
        path: '/sobre/certificacoes',
        name: 'certificacoes',
        component: CertificacoesLab,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
