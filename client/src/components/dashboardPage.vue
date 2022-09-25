<template>
 <!--- Navigation Bars-->
<usernav />
<sidenav />
<div :style="{'margin-left':sidebarWidth}">
  <router-view />
</div>
<br><br>
<!-- nav ends -->
<!--- content------>
<div class="container">
    <div class="row">
      <div class="flex-row-reverse">
        <Modal @close="toggleModal" :modalActive="modalActive">
          <div class="modal-content" id="modal-content">

            <form action="" class="login-form">
           <div class="p-3">
                <h1>Tour Plan</h1>
                <div class="form-group p-1">
                  <input type="text" v-model="Title" placeholder="Tour Title"> <br>
                     
                <input type="text" v-model="Duration" placeholder="Duration">
         
                  <input type="text" v-model="Activities" placeholder="Activities"><br>
                
                    <!-- <input class="form-control-sm" type="file" multiple v-on:change="uploadFile" id="formFile"><br> -->
                     <small>Add a cover photo for the tour plan</small>
                     <div>
                        <input type="file" @change="previewImage" accept="image/" />
                      </div>

                      <div>
                        <img class="preview" v-bind:src="picture" /><br />
                        <button @click="onUpload">Upload</button>
                      </div>
                          
              
                   <input type="text" v-model="startingCity" placeholder="Enter Starting City">

                   <input type="text" v-model="destName" placeholder="Enter Next Destination">

                   <input type="text" v-model="transport" placeholder="Transportation Method">
               
                   <input type="text" v-model="stay" placeholder="Accomodation">
               </div>

              </div>
        

              <!--Dynamic input fields to add more destinations-->
              <div class="p-3" v-for="(k,index) in destination" :key="index">
                
                
                <div class="form-group p-1">
                   <input type="text" placeholder="Enter Next Destination" v-model="k.nextDestination">
                  
                </div>
                <div class="form-group p-1">
                   <input type="text" placeholder="Transportation Method" v-model="k.transportMethod">
                </div>
                <div class="form-group p-1">
                   <input type="text" placeholder="Accomodation" v-model="k.Accomodation">
                </div>
              </div>
              <!-- Controls to add or remove fields-->
              <div class="p-2">
                <a href="#" id="add-destination" @click="add" class="controls"><i class="fa-solid fa-plus"></i>Add Destination</a>
                <a href="#" id="remove-destination" @click="remove(index)" class="controls"><i class="fa-solid fa-minus"></i>Remove Destination</a>
              </div>
              
                 
             <div class="p-4">
                 <a href="./dashboardPage.vue">
                 <button type="submit" class="newbtn btn btn-primary btn-lg" v-on:click="guideAddPlan">Add Plan</button></a>
              </div> 
              
            </form>
          </div>

        </Modal>
        <div class="d-flex flex-row-reverse ">
           <button type="button" class="btn newbtn btn-primary btn-lg" @click="toggleModal">
            + New Plan 
            </button>  
        </div>
       
  </div>

    <!-- Button to add a new tour plan.This button trigger the modal--> 
    
    </div>
    <!-- existing tour plans-->
    <div class="row">
        <div class="card-deck p-5">
            <div class="d-flex flex-fill">


            </div>

        </div>
        
    </div>

<!-- existing tour plans ends-->

    <div class="row"> 
        <div></div>
    </div>
    <br>
</div>

<!-- google map -->


<!----content ends----->
<hr>
<!-- footer -->
<footerbar />
<!-- footer ends-->
</template>


<script>
//import footerbar from "./footerBar.vue"
import Modal from "@/components/modalPopup.vue";
import { ref } from "vue";
import sidenav from "./sideNavbar.vue"
import {sidebarWidth} from "./state"
import { collapsed, toggleSidebar } from './state'
import usernav from "./userNav.vue"
import guide_add_plan from '../guide_add_plan';
import guide_added_plans from '../guide_added_plans';
import Map from '../../node_modules/vue2-google-maps/dist/components/map.vue';

// import { getStorage, ref1, uploadBytes, getDownloadURL } from "firebase/storage";
// import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyBuavlOfALy5q7PejkdQCj9r00AimU4-w0",
//   authDomain: "gocore-6873c.firebaseapp.com",
//   projectId: "gocore-6873c",
//   storageBucket: "gocore-6873c.appspot.com",
//   messagingSenderId: "1087670929534",
//   appId: "1:1087670929534:web:9bd2c04e15dacd10ac302f",
//   measurementId: "G-GT1883S0BG",
// };

// Initialize Firebase
// initializeApp(firebaseConfig);
// const storage = getStorage();
// console.log(storage);


export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"dashboardPage",
  components:{
    //footerbar,
    Modal,
    sidenav,
    usernav,
    // eslint-disable-next-line vue/no-unused-components
    Map
},
  setup(){
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return{sidebarWidth},{ collapsed, toggleSidebar },{ modalActive, toggleModal }
  },


  //define data
data: function(){
  return{
    Title: "",
    Duration: "",
    Activities: "",
    startingCity: "",

    imageData: null,
    picture: null,
    uploadValue: 0,
   
  }
},

  async tourList(){


    try{
      this.guide_tour_List = await guide_added_plans.getguideAddedPlans();   //class name.method in the PostService.js file
    }
    catch(err){
      this.error = err.message;
    }
  },

methods:{
  add:function(){
    this.destination.push({
      destName:'',
      transport:'',
      stay:''
    })
  },
  remove(index){
    this.destination.splice(index,1)
  },

  guideAddPlan(){

    // var destine = this.destination.push({});
      guide_add_plan.insertGuidePlan(
        this.Title,
        this.Duration,
        this.startingCity,
        this.Activities,
        this.destination.push({})
        
        );

    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    // onUpload() {
    //   this.picture = null;

    //   const storageRefCover = ref1(storage, `${this.imageData.name}`);

    //   // 'file' comes from the Blob or File API
    //   uploadBytes(storageRefCover, this.imageData).then((snapshot) => {
    //     console.log("Uploaded Successfully!");
    //     getDownloadURL(snapshot.ref1).then((url) => {
    //       this.picture = url;
    //       console.log(url);
    //     });
    //   });


      
    // },
    
},   

}
</script>
<style scoped>
.img.preview {
  width: 200px;
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
.cardstyle{
  max-width: 200px;
  max-height:40vh;
  margin-left: 50px;
  margin-right: 50px;
  }
  .modal-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    }
    .modal-content h1,p {
      margin-bottom: 16px;
    }
     .modal-content h1 {
      font-size: 32px;
    }
     .modal-content p {
      font-size: 18px;
    }
    .login-form{
    border: 1.5px;
    border-radius: 5px;
    border-color: gray;
    border-style: solid;
    width: 30vw;
    max-height: 1000vh;
    align-items: center;
  
}
.login-form input{
  border-width: 1.5px;
  border-color: gray;
  border-style: solid;
  border-radius: 10px;
  word-spacing: 5px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 350px;
}
.controls{
  color: black;
  padding: 5px;
  
}
</style>