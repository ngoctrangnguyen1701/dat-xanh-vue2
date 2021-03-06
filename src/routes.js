import HomePage from '@/pages/HomePage'

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
const ProjectDetailPage = () => import('@/pages/ProjectDetailPage/ProjectDetailPage')

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
        path:'/',
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
        path: '/',
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
    component: ProjectPage,
  },
  {
    path: '/project/:name',
    component: ProjectDetailPage
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default routes