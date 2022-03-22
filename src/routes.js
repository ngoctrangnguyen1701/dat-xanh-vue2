import HomePage from '@/pages/HomePage.vue'
import IntroductionPage from '@/pages/IntroductionPage.vue'
import IntroductionChildrenPage from '@/components/IntroductionPage/IntroductionPage/IntroductionChildrenPage.vue'


const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/introduction',
    component: IntroductionPage,
    children: [
      {
        path:'',
        component: IntroductionChildrenPage
      }
    ]
  },
]

export default routes