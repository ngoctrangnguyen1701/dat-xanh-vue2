import HomePage from '@/pages/HomePage'

// import IntroductionPage from '@/pages/IntroductionPage/IntroductionPage'
// import IntroductionChildrenPage from '@/pages/IntroductionPage/IntroductionChildrenPage'
// import CulturePage from '@/pages/IntroductionPage/CulturePage'
// import SystemPage from '@/pages/IntroductionPage/SystemPage'
// import ActivityPage from '@/pages/IntroductionPage/ActivityPage'
// import PartnerPage from '@/pages/IntroductionPage/PartnerPage'
// import PrizePage from '@/pages/IntroductionPage/PrizePage'

//LAZY LOAD CHO ROUTER
// https://viblo.asia/p/vue-router-lazy-loading-routes-Qbq5QvpRKD8

/* INTRODUCTION PAGE */
const IntroductionPage = () => import ('@/pages/IntroductionPage/IntroductionPage')
const IntroductionChildrenPage = () => import ('@/pages/IntroductionPage/IntroductionChildrenPage')
const CulturePage = () => import ('@/pages/IntroductionPage/CulturePage')
const SystemPage = () => import ('@/pages/IntroductionPage/SystemPage')
const ActivityPage = () => import ('@/pages/IntroductionPage/ActivityPage')
const PartnerPage = () => import ('@/pages/IntroductionPage/PartnerPage')
const PrizePage = () => import ('@/pages/IntroductionPage/PrizePage')

/* STOCK PAGE */
const StockPage = () => import ('@/pages/StockPage/StockPage')
const StockChildrenPage = () => import ('@/pages/StockPage/StockChildrenPage')
const ShareholderPage = () => import ('@/pages/StockPage/ShareholderPage')

/* PROJECT */
const ProjectPage = () => import('@/pages/ProjectPage/ProjectPage')

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
        path:'/introduction/first',
        component: IntroductionChildrenPage
      },
      {
        path: '/introduction/culture', //--> đường link này sẽ là 'localhost/culture', không phải là '/introduction/culture'
        component: CulturePage
      },
      {
        path: '/introduction/system',
        component: SystemPage
      },
      {
        path: '/introduction/activity',
        component: ActivityPage
      },
      {
        path: '/introduction/partner',
        component: PartnerPage
      },
      {
        path: '/introduction/prize',
        component: PrizePage
      },
    ]
  },
  {
    path: '/stock',
    component: StockPage,
    children: [
      {
        path: '/stock/first',
        component: StockChildrenPage
      },
      {
        path: '/stock/shareholder',
        component: ShareholderPage,
        alias: ['/stock/message', '/stock/report', '/stock/profile']
      }
    ]
  },
  {
    path: '/project',
    component: ProjectPage
  }
]

export default routes