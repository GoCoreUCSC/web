<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->

    <div id="content">
        <div class="row">
            <div class="col-lg">
                <div><h3>Register to the system</h3></div>
                <form action="" class="row p-4">
                <div class="col-sm">
                <label for="h_name">Hotel Name</label><br>
                <input type="text" v-model="hotelh_name" required placeholder="Hotel Name" class="inputstyle"> <br><br>
                <label for="nic">Registration No</label><br>
                <input type="text" v-model="hotelregNo" class="inputstyle" placeholder="Hotel Registration Number"><br><br>
                <label for="phone">Contact Details</label><br>
                <input type="tel" v-model="hotelphone" placeholder="+94xxxxxxxxx" class="inputstyle"><br><br>
                <label for="city">City</label><br>
                <input type="tel" v-model="hotelcity" placeholder="Hotel Location" class="inputstyle"><br><br>
                <label for="password">Password</label><br>
                <input type="password" v-model="hotelpassword" required placeholder="Password" class="inputstyle" id="id_password"><br><br>
                </div>
                <div class="col-sm">
                <label for="web">Website Link</label><br>
                <input type="url" v-model="hotelweb" required placeholder="abchotel.com" class="inputstyle"> <br><br>
                <label for="docs">Upload docuements for verification</label><br>

                <!-- <input type="file" accept="image/*" @change="previewImage" class="inputstyle"><br><br>
                <button class="btn newbtn btn-primary btn-lg" type="filled" @click="onUpload">Upload</button> -->
                
                <div><input type="file" @change="previewImage" accept="image/">
                </div>
                <div>
                  <p>Progress: {{uploadValue.toFixed()+"%"}}
                    <progress :value="uploadValue" max="100"></progress>
                  </p>
                  <progress max="100"></progress>
                </div>
                <div>
                  <img class="preview" src="picture"><br>
                  <button @click="onUpload">Upload</button>
                </div>
                
                
                <div>
           <!-- <button @click="uploadFiles">Upload files</button> -->
</div>

                <label for="email">Email</label><br>
                <input type="email" v-model="hotelemail" placeholder="example@gmail.com" class="inputstyle"><br><br>
                <label for="address">Address</label><br>
                <input type="text" v-model="hoteladdress" placeholder="Enter your address" class="inputstyle"><br><br>
                <label for="passwordConf">Confirm Password</label><br>
                <input type="password" v-model="hotelpasswordConf" required placeholder="Re-enter password" class="inputstyle"><br><br>
                </div>
                <p><input type="checkbox">I have agreed to the terms and privacy policy</p>
                <div style="justify-content:center"><a href="./dashboardPage.vue" style="color:white">

                <button class="btn newbtn btn-primary btn-lg" v-on:click="hotelAdd">Sign Up</button></a></div>
            </form>

            </div>  
        </div>    
        <hr>
        
    </div>
<!------Content ends------->

<!------Footer------->
    <footerbar />

<!------Footer ends------->
</template>

<script>
import navbar from "./topNavbar.vue"
import footerbar from "./footerBar.vue"
import hotel_add_sys from '../hotel_add_sys'
import { getStorage,ref,uploadBytes      } from "firebase/storage";
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
// import firebase from 'firebase'
// import 'firebase/storage';
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();
console.log(storage)
export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"hotelRegister",
  components:{
    navbar,
    footerbar,
  },

  data: () => {
    return {
      steps: {},
      step: 1,
      
        user_role: "hotel",
        hotelh_name: "",
        hotelregNo: "",
        hotelphone: "",
        hotelcity: "",
        hotelpassword: "",
        hotelweb: "",
        hotelemail: "",
        hoteladdress: "",

        imageData: null,
        picture: null,
        uploadValue: 0
  
    };
  },

  methods:{

  async hotelAdd(){
      
      await hotel_add_sys.hotelAddSys(
        // this.hotel
        this.user_role,
        this.hotelh_name,
        this.hotelregNo,
        this.hotelphone,
        this.hotelcity,
        this.hotelpassword,
        this.hotelweb,
        this.hotelemail,
        this.hoteladdress,
        );

    },

    previewImage(event){
    this.uploadValue=0;
    this.picture=null;
    this.imageData = event.target.files[0];
  },

  onUpload(){
      this.picture=null;

      const storageRef = ref(storage, `${this.imageData.name}`);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, this.imageData).then(() => {
  console.log('Uploaded a blob or file!');
});

/*
      const storageRef =  ref(``).put(this.imageData);

       storageRef.on(`state_changed`, snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
      storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        this.picture = url;
      });
    }
    ); */
    }

 }, 
}

</script>

<style scoped>
  img.preview{
    width: 200px;
    
  }
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
  width: 400px;
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
  

#heading2{
 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #085B7F;
}

.cardstyle{
  margin-left: 50px;
  margin-right: 50px;

  }

  .img-div {
    display: flex;
    margin: 25px;
  }

  img {
    max-width: 250px;
    margin: 15px;
  }

</style>
