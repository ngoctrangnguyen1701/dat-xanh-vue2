import HomePage from '@/pages/HomePage.vue'
import IntroductionPage from '@/pages/IntroductionPage/IntroductionPage.vue'
import IntroductionChildrenPage from '@/pages/IntroductionPage/IntroductionChildrenPage.vue'
import CulturePage from '@/pages/IntroductionPage/CulturePage.vue'

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
      },
      {
        path: '/culture', //--> đường link này sẽ là 'localhost/culture', không phải là '/introduction/culture'
        component: CulturePage
      }
    ]
  },
]

export default routes