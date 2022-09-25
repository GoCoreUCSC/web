<template>
<!--Navigation Bars-->
    <usernav />
<sidenav />
<div :style="{'margin-left':sidebarWidth}">
  <router-view />
</div>
<!--Navigation ends-->
<!--content-->

<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-11 col-md-12">
                <div class="card user-card-full">
                    <div class="row ml-1 m-r-0">
                        <div class="col-sm-4 bg-clr user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25"
                                v-for="(post, index) in posts"
                                v-bind:item="post"
                                v-bind:index="index"
                                v-bind:key="post.id"
                                >
                                    <!-- <img src="../assets/Denuka.jpg" class="img-radius" alt="User-Profile-Image"> -->
                                    <div v-if="post.image">
                                    <img class="img-radius" v-bind:src="post.image" /><br />
                                    
                                    </div>
                                </div>
                                <h1><p>Tour Guide</p></h1>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h2 class="m-b-20 p-b-5 b-b-default f-w-600"> Personal Information</h2>
                                <div class="row">

                                <div class="post"
                                v-for="(post,index) in posts"
                                v-bind:item="post"
                                v-bind:index="index"
                                v-bind:key="post.id">
                                
                                    <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600" >Full Name</p>
                                        <h6 class="text-muted f-w-400">
                                            {{post.name}}
                                            
                                            </h6>
                                    </div>
                                    <!-- <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600">Last Name</p>
                                        <h6 class="text-muted f-w-400">Denuka Perera</h6>
                                    </div> -->
                                    <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600">NIC</p>
                                        <h6 class="text-muted f-w-400">
                                             {{post.nic}}
                                        </h6>
                                    </div>
                                
                                <h2 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Contact Information</h2>
                                <div class="row">

                                    <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">
                                            {{post.email}}
                                        </h6>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600">Contact Number</p>
                                        <h6 class="text-muted f-w-400">
                                            {{post.contact_no}}
                                        </h6>
                                    </div>
                                    <div class="col-sm-4">
                                        <p class="m-b-10 f-w-600">Social Media</p>
                                        <ul class="social-link list-unstyled m-t-40 m-b-10">
                                            <li><a href="https://www.facebook.com/" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a></li>
                                            </ul>
                                    </div>
                                </div>
                                <!-- <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">User Account</h6> -->
                                <div class="row">
                                    
                                    <!-- <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Password </p>
                                        <h6 class="text-muted f-w-400">xxxxxxxxxx</h6>
                                    </div> -->
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button type="submit" class="newbtn btn btn-primary btn-lg" v-on:click="updateAccount">Edit Profile</button>
                                    </div>
                                    <div class="col-sm-6">

                                    <form action="" class="login-form">
                                        <button type="submit" class="newbtn btn btn-primary btn-lg" 
                                        >Delete Account</button>
                                    </form>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div>
    <hr>
    <footerbar/>
</div>

</template>

<script>
    import footerbar from "./footerBar.vue"
    import sidenav from "./sideNavbar.vue"
    import {sidebarWidth} from "./state"
    import { collapsed, toggleSidebar } from './state'
    import usernav from "./userNav.vue"
    import guide_view_prof from "../guide_view_prof"
    import {getStorage,ref as rt,uploadBytes,getDownloadURL,} from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8P8DO81a_NbOU5qxL-2Jst1i6HoJwgT4",
  authDomain: "gocore-6873c.firebaseapp.com",
  projectId: "gocore-6873c",
  storageBucket: "gocore-6873c.appspot.com",
  messagingSenderId: "1087670929534",
  appId: "1:1087670929534:web:9bd2c04e15dacd10ac302f",
  measurementId: "G-GT1883S0BG",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage();
console.log(storage);

    export default{

  name:"profilePage",
  components:{
   
    footerbar,
    sidenav,
    usernav
  },
  data(){
    return{
      posts: [],
      error: '',
      user_role: "guide",
      name: "",
      nic: "",
      email: "",
      contact_no: ""

    }
  },
  async created(){
    try{
      this.posts = await guide_view_prof.getguideViewProf();   //class name.method in the PostService.js file
    }
    catch(err){
      this.error = err.message;
    }
  },
  methods:{
    async deleteAccount(id){
      await guide_view_prof.deletePost(id);
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;

      const storageRef = rt(storage, `${this.imageData.name}`);

      // 'file' comes from the Blob or File API
      return uploadBytes(storageRef, this.imageData).then((snapshot) => {
        console.log("Uploaded Successfully!");
        return getDownloadURL(snapshot.ref).then((url) => {
          this.picture = url;
          console.log("rrttt", url);
          return url;
        });
      });
    },
  },

  setup(){
    return{sidebarWidth},{ collapsed, toggleSidebar }
  }
}
</script>

<style scoped>

.cardstyle{
  max-width: 200px;
  max-height: 10vh;
  margin-left: 50px;
  margin-right: 50px;

  }
body {
    background-color: #f9f9fa
}

.padding {
    padding: 3rem !important
}

.user-card-full {
    overflow: hidden;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    box-shadow: 0 1px 20px 0 rgba(69,90,100,0.08);
    border: none;
    margin-bottom: 30px;
}

.m-r-0 {
    margin-right: 0px;
}

.m-l-0 {
    margin-left: 0px;
}

.user-card-full .user-profile {
    border-radius: 5px 0 0 5px;
}

.bg-clr {
        background: -webkit-gradient(linear, left top, right top, from(#85c7e3), to(#0084BD));
        background: linear-gradient(to right, #0084BD, #85c7e3);
}

.user-profile {
    padding: 20px 0;
}

.card-block {
    padding: 1.25rem;
}

.m-b-25 {
    margin-bottom: 25px;
}

.img-radius {
    border-radius: 5px;
    max-width: 300px;
    max-height: 500px;
}

.newbtn{
  background-color: #0084BD;
  border-color: #0084BD;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.newbtn:hover{
  background-color:hsl(198, 72%, 46%);
  border-color:hsl(198, 72%, 46%);
}
 
h6 {
    font-size: 14px;
}

.card .card-block p {
    line-height: 50px;
}

@media only screen and (min-width: 1400px){
p {
    font-size: 14px;
}
}

.card-block {
    padding: 1.25rem;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.m-b-20 {
    margin-bottom: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.card .card-block p {
    line-height: 25px;
}

.m-b-10 {
    margin-bottom: 10px;
}

.text-muted {
    color: #919aa3 !important;
}

.b-b-default {
    border-bottom: 1px solid #e0e0e0;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-20 {
    margin-bottom: 20px;
}

.m-t-40 {
    margin-top: 20px;
}

.p-b-5 {
    padding-bottom: 5px !important;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-40 {
    margin-top: 20px;
}

.user-card-full .social-link li {
    display: inline-block;
}

.user-card-full .social-link li a {
    font-size: 20px;
    margin: 0 10px 0 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}



</style>