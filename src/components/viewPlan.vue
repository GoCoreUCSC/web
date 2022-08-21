<template>
  <!--Navbars start-->
  <sidenav/>
  <div :style="{'margin-left':sidebarWidth}">
  <router-view />
  </div>
  <usernav/>
  <!--Nav bars end-->

  <!---content-->
<div>
  <!--Carousel slides -->
  <div class="card bg-dark text-white">
   <img class="imgslide" src="../assets/pexels-sahir-sujahudeen-10727551.jpg" alt="">
  <div class="card-img-overlay"
    v-for="(post,index) in posts"
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post.id"
    >
    <h5 class="card-title">
      {{post.text}}
      <!-- Ella Rock Hiking -->
      </h5>
    <p class="card-text">
     {{post.text}}
      <!-- Duration 4 Days -->
      </p>
  </div>
</div>
 
  <!---tour navbar--->
 <tour-plan-nav />
 <br>
 <div class="row" >
  <div class="col-md-6" id="tour-route" data-spy="scroll" data-target="#tour-route">
    <div class="col">
       <p>Start : Bandaranayake International Airport</p>
       <p><i class="fa fa-car"></i>  Drive</p><br>
       <p>Wellawaya - 1 Night</p>
       <p><i class="fa fa-car"></i>  Drive</p><br>
       <p>Ella Rock Viewpoint - 2 Night</p>
       <p><i class="fa fa-train"></i>  Train</p><br>
       <p>End : Colombo</p>
    </div>
   
  </div>
  <div class="col-md-6">
    <img class="mapimg" src="../assets/map.png" alt="">
  </div>
 </div>
</div>
  <!---content ends-->
  <!---Footer-->
  <footerbar/>
  <!---footer ends-->
</template>

<script>
import footerbar from "./footerBar.vue"
import sidenav from "./sideNavbar.vue"
import {sidebarWidth} from "./state"
import { collapsed, toggleSidebar } from './state'
import usernav from "./userNav.vue"
import tourPlanNav from "./tourPlanNav.vue"
import guide_view_plan from "../guide_view_plan"
 
export default{
  components:{
   
    footerbar,
    sidenav,
    usernav,
    tourPlanNav,
   
  },
  name:"viewPlan",
  setup(){
    return{sidebarWidth},{ collapsed, toggleSidebar }
  },
  data() {
      return{
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try{
      this.posts = await guide_view_plan.getguideViewPlan(); 
    }
    catch(err){
      this.error = err.message;
    }
  },
  
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
    },
  
}
</script>
<style scoped>
.imgslide {
  height:500px;
  width:100%;
  margin-left:40px
}
.mapimg{
  height: 300px;
  width: 75%;
  margin: 10px;
}
.navbar{
  margin-left: 50px;
}
.timeline {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative
}
</style>