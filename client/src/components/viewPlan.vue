<template>
  <!---content-->

  <div class="card-img-overlay"
  v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post.id"
  >

  <div class="row p-5">
      <hr>
      <h1>{{ post.Title }}</h1>
      <hr>
    </div>

  <div class="row2">
    <div class="row3"></div>
    <div class="column2">
 <!-- image -->
 <br>
    <img class="topImage" v-bind:src="post.url ? post.url : '../assets/beach.jpg'" alt=""/>
    </div>
   

    <div class="column2">
     <br><br><br><br>
        <div class="card tourcard tourplan shadow-sm">
        <div class="card-body row">
          <div class="row2">
            <div class="column2">
              <!-- Duration -->
              <p><i class="fa-regular fa-calendar"></i> Duration: {{ post.Duration }} Days</p> <br>
            </div>
            <div class="column2">
              <!-- Starting City -->
              <p><i class="fa-solid fa-map-location"></i> Price: Rs. {{post.Price}}</p><br>
            </div>
            </div>
            <div class="row2">
            <div class="column2" 
            
            >
              <!-- destination -->

              <p><i class="fa-solid fa-map-location-dot"></i> Rate: {{post.Rate}}</p><br>
            </div>

            <div class="column2">
              <!-- Transport -->
              <p><i class="fa-solid fa-map-location-dot"></i> Activities: {{post.Activities}}</p><br>
            </div>
          </div>

          <div class="row2">
            <div class="column2">
              <!-- accomodation -->
              <p><i class="fa-solid fa-map-location-dot"></i> Payment Method: {{post.PaymentMethod}}</p><br>
            </div>
          </div>
 
        </div>
        
        
    </div>
    </div>
  </div>    
    
  <!---tour navbar
 <tour-plan-nav />--->
 <br>
 
  <div class="row2">
    <div class="column2">
      <dir class="p-3">
          <a href="#" class="btn btn-primary newbtn">Edit</a>
        </dir>
    </div>
    <div class="column2">
      <dir class="p-3">
       <a href="./dashboardPageTest.vue"><button class="btn btn-primary newbtn" type="button" >Back</button></a>
       </dir>
    </div>
  </div>
                
  
  </div>
 
</template>

<script>
// import footerbar from "./footerBar.vue";
import { sidebarWidth } from "./state";
import { collapsed, toggleSidebar } from "./state";
//import tourPlanNav from "./tourPlanNav.vue"
import guide_view_tourPlan from "../guide_view_tourPlan";

import {
  getStorage,
  ref as rt,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
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
export default {
  components: {
    // footerbar,
    //tourPlanNav,
  },
  name: "viewPlan",
  setup() {
    return { sidebarWidth }, { collapsed, toggleSidebar };
  },
  data() {
    return {
      
      posts: [

      {destination: []},
      ],
      
      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  computed: {
    hotelList() {
      if (this.search_location.trim().length > 0) {
        return this.hotels.filter((hotels) =>
          hotels.location
            .toLowerCase()
            .includes(this.search_location.trim().toLowerCase())
        );
      }

      return this.hotels;
    },
  },

  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    // async guideDelete(id){
    //   try{
    //     console.log(JSON.stringify(id))
    //    await guide_view_tourPlan.deleteGuide(id);
    //   this.guideDetails = await guide_view_tourPlan.guideViewTourPlan();

    //   <a href="./dashboardPageTest.vue"></a>
    
    //   console.log(this.guideDetails)
    // }
    // catch(err){
    //   this.error = err.message;
    //  }
    // }

  },

  previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      location.href='/Plan.vue'
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

  async created() {
    try {
      let x = new URLSearchParams(location.search);
      this.posts = await guide_view_tourPlan.guideViewTourPlan(x.get("id"));
      console.log(JSON.stringify(this.posts));
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>
<style scoped>

.row2 {
  display: flex;
}
.row3 {
  height: 240px;
}

.column2 {
  flex: 50%;
}
.imgslide {
  height: 500px;
  width: 100%;
  margin-left: 40px;
}
.mapimg {
  height: 300px;
  width: 75%;
  margin: 10px;
}
.navbar {
  margin-left: 50px;
}
.timeline {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.tourplan {
  margin-left: 70px;
  margin-right: 70px;
}
.tourcard {
  background-color: white;
  color: black;
  border-color: #0084bd;
  max-width:100%;
}
.newbtn {
  background-color: #0084bd;
  border-color: #0084bd;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.newbtn:hover {
  background-color: hsl(198, 72%, 46%);
  border-color: hsl(198, 72%, 46%);
}
.hotelcard {
  background-color: white;
  color: black;
  border-color: #0084bd;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}
input {
  display: block;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  border-color: #535c6070;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
.error {
  background-color: tomato;
}
.card-img {
  max-block-size: 350px;
}

.topImage{
  height: 350px;
  border-radius: 5px;
}
</style>