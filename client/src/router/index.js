import { createWebHistory, createRouter } from "vue-router"
import HomePage from '../components/HomePage.vue'
import loginPage from '../components/LogIn.vue'
import signup from '../components/SignUp.vue'
import dashboardPage from '../components/dashboardPage.vue'
import dashboardPageTest from '../components/dashboardPageTest.vue'
import planView from '../components/viewPlan.vue'
import tourPlan from '../components/tourPlan.vue'
import profilePage from '../components/profilePage.vue'
import guideRegister from '../components/guideRegister.vue'
import cabRegister from '../components/cabRegister.vue'
// import testForm from '../components/testForm.vue'
import hotelRegister from '../components/hotelRegister.vue'
import adminDashboardGuide from '../components/adminDashboardGuide.vue'
import adminDashboardTourist from '../components/adminDashboardTourist.vue'
import adminDashboardHotel from '../components/adminDashboardHotel.vue'
import PlanetChart from '../components/PlanetChart.vue'
import AdminHome from '../components/AdminHome.vue'
import AdminLogin from '../components/AdminLogin.vue'


const routes = [
    {path: "/",component: HomePage},
    {path: "/HomePage.vue",component: HomePage},
    {path: "/LogIn.vue",component: loginPage},
    {path: "/SignUp.vue",component: signup},
    {path: "/dashboardPage.vue",component: dashboardPage},
    {path: "/dashboardPageTest.vue",component: dashboardPageTest},
    {path: "/viewPlan.vue",component: planView},
    {path: "/tourPlan.vue",component: tourPlan},
    {path: "/profilePage.vue",component: profilePage},
    {path: "/guideRegister.vue",component: guideRegister},
    {path: "/cabRegister.vue",component: cabRegister},
    {path: "/hotelRegister.vue",component: hotelRegister},   
    {path: "/adminDashboardGuide.vue",component: adminDashboardGuide},   
    {path: "/adminDashboardTourist.vue",component: adminDashboardTourist},   
    {path: "/adminDashboardHotel.vue",component: adminDashboardHotel},
    {path: "/PlanetChart.vue",component: PlanetChart},
    {path: "/AdminHome.vue",component: AdminHome},
    {path: "/AdminLogin.vue",component: AdminLogin}

  ]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router
 
