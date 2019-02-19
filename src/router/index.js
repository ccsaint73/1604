import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {path:'/',redirect:'/deal'},
        {path:'/deal',
          component:()=>import('@/page/deal'),
          children:[
            {path:'/deal',redirect:'/deal/newest'},
            //最新porcelain
            {path:'/deal/:name',component:()=>import('@/page/deal_newest')},
          ]
        },
        {path:'/consult',component:()=>import('@/page/consult')},
        {path:'/news',component:()=>import('@/page/news')},
        //鉴宝
        {path:'/treasure',component:()=>import('@/page/treasure'),
        children:[
          {path:'/treasure',redirect:'/treasure/new'},
          {path:'/treasure/new',component:()=>import('@/components/treasure_new')},
          {path:'/treasure/hot',component:()=>import('@/components/treasure_hot')},
        ]
      },
        {path:'/self',component:()=>import('@/page/self')},
      ]
    },
    {path:'/detail/:key/:url',component:()=>import('@/page/detail')},
    {path:'/login',component:()=>import('@/page/login')},
    {path:'/search',component:()=>import('@/page/search')},
    {path:'/user_img',component:()=>import('@/page/user_img')},
    {path:'/kefu',component:()=>import('@/page/kefu')},
    
  ]
})
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('userid')){
    next()
  }else{
    if(to.path==='/self' || to.path==='/news'){
      next('/login')
    }else{
      next()
    }
  }
})
export default router;