import HomePage from '@/pages/HomePage'
import IntroductionPage from '@/pages/IntroductionPage/IntroductionPage'
import IntroductionChildrenPage from '@/pages/IntroductionPage/IntroductionChildrenPage'
import CulturePage from '@/pages/IntroductionPage/CulturePage'
import SystemPage from '@/pages/IntroductionPage/SystemPage'
import ActivityPage from '@/pages/IntroductionPage/ActivityPage'
import PartnerPage from '@/pages/IntroductionPage/PartnerPage'
import PrizePage from '@/pages/IntroductionPage/PrizePage'

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
      },
      {
        path: '/system',
        component: SystemPage
      },
      {
        path: '/activity',
        component: ActivityPage
      },
      {
        path: '/partner',
        component: PartnerPage
      },
      {
        path: '/prize',
        component: PrizePage
      },
    ]
  },
]

export default routes