<template>
  <!------Navigation Bar------->
  <navbar />
  <!------Navigation Bar ends------->
  <!------Content------->

  <div id="content">
    <div class="row">
      <div class="col-sm" style="padding-top:10px">
        <img src="../assets/WithSlogan.png" alt="gocore logo" width="100px" height="200px">
      </div>

      <div class="col-sm p-3">
        <div>
          <h3>Sign In</h3>
        </div>
         <div v-if="error" class="error">
              {{error.message}}
            </div>
            
        <form @submit.prevent="pressed" action="./dashboardPage.vue?name" class=" row p-4">
          <div class="col-sm">

            <label for="email">Email</label><br>
            <input type="email" v-model="email" required placeholder="Enter email"
              class="inputstyle">
            <br><br>
            <label for="password">Password</label><br>
            <input type="password" v-model="password" placeholder="Enter Password" class="inputstyle"><br><br>
            
          </div>
          
          <div style="justify-content:center"><a href="/dashboardPage.vue" style="color:white">

              <button type="submit" class="logbtn" v-on:click="guide_login">Sign In</button></a></div>
        </form>
        
      </div>
      <hr>
      
    </div>
  </div>
  <!------Content ends------->
  <!------Footer------->

  <footerbar />
  <!------Footer ends------->

</template>
<script>
// import axios from 'axios';
import guide_login_home from '../guide_login_home';
// import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as firebase from "firebase/app";
import "firebase/auth";

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
firebase(firebaseConfig);

const storage = getStorage();
console.log(storage);


  export default {
    name: 'SignIn',
    data(){
      return{
        steps: {},
        step: 1,

        email: "",
        password: "",
        error: '',
        
      imageData: null,
      picture: null,
      uploadValue: 0,
      }
    },

  methods:{
    async pressed(){
      try{
        const user = firebase.auth().createUserWithEmailAndPassword(
        this.email,
        this.password
      )
      console.log(user)
      this.$router.replace({name: "secret"});
      }catch(err){
        console.log(err)
      }
      
    },

    async guide_login(){
      await guide_login_home.insert_guide_login(
        this.fName,this.NIC,this.phnNo,this.password,this.lName,
        this.Address,this.confPass);
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;

      const storageRef = ref(storage, `${this.imageData.name}`);

      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, this.imageData).then((snapshot) => {
        console.log("Uploaded Successfully!");
        getDownloadURL(snapshot.ref).then((url) => {
          this.picture = url;
          console.log(url);
        });
      });

      //const storageRef =  ref(``).put(this.imageData);

      
    },
  },
};
</script>

<style scoped>
#content{
  align-items: center;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.inputstyle{
  border-width: 2px;
  border-color: gray;
  border-style: solid;
  border-radius: 10px;
  word-spacing: 5px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.logbtn{
  background-color: #0084BD;
  border-color: #0084BD;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 150px;
}
.logbtn:hover{
  background-color:#B3DAEB;
  border-color: #B3DAEB;
  color: #085B7F
}
  
#heading2{
 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #085B7F;
}
</style>