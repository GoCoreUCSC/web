<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->
    <div id="content">
        <div class="row2">
          <div class="column2">
            <div class="col-sm">
                <img src="../assets/guide.jpg" alt="GoCore Logo" >
            </div>
            </div>
            <div class="column2">
            <div class="col-sm">
                <div><h3>Guide Registration</h3></div>
                <form action="" class="row p-4">
                <div class="col-sm">
                <label for="fname" >Name</label><br>
                <input type="text" v-model="guidefname" required placeholder="Enter your first name" class="inputstyle"> <br><br>
                <label for="nic">NIC</label><br>
                <input type="text" v-model="guidenic" placeholder="123345456v" class="inputstyle"><br><br>
                <label for="phone">Contact Details</label><br>
                <input type="tel" v-model="guidephone" placeholder="+94xxxxxxxxx" class="inputstyle"><br><br>
                <label for="password">Password</label><br>
                <input type="password" v-model="guidepassword" required placeholder="Password" class="inputstyle" id="id_password"><br><br>
                </div>
                <div class="col-sm">
                <label for="email">Email</label><br>
                <input type="email" v-model="guideemail" placeholder="example@gmail.com" class="inputstyle"><br><br>
                <label for="address">Address</label><br>
                <input type="text" v-model="guideaddress" placeholder="Enter your address" class="inputstyle"><br><br>
                <label for="passwordConf">Confirm Password</label><br>
                <input type="password" required placeholder="Re-enter password" class="inputstyle"><br><br>
                </div>
                <div>
                  <label for="guideDocs">Upload documents for verification</label><br>
                  <input type="file" @change="previewPDF" accept="image/" /><br><br>
                  
                </div>

                <div>
                  <p><input type="checkbox">I have agreed to the terms and privacy policy</p>
                </div>
                
                <div class="col-sm-6">
              <!-- Button trigger modal -->
              <div class="col-sm-6">
              <!-- Button trigger modal -->
              <button type="submit" class="newbtn btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Sign Up
              </button>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-danger" id="exampleModalLabel">Are You Sure?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="mb-3">
                          <label class="label">Do you really want to Confirm?</label>
                        </div>
                        <a><button type="submit" class="newbtn1 btn btn-primary">Cancel</button></a>
                        <a><button type="submit" class="newbtn2 btn btn-primary">Confirm</button></a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-danger" id="exampleModalLabel">Are You Sure?</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body"
                    >
                      <form>
                        <div class="mb-3">
                          <label class="label">Successfully Inserted!</label>
                        </div>
                        <a href="./HomePage.vue"><button type="button" class="newbtn2 btn btn-primary"  v-on:click="guideAdd(); onUpload();">OK</button></a>
                        <div class="col-sm-6">
              <!-- Button trigger modal -->
              
        
          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            </form>

            </div>  
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
import navbar from "./topNavbar.vue"
import footerbar from "./footerBar.vue"
import guide_add_sys from '../guide_add_sys';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
// import { file } from "@babel/types";


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
  // eslint-disable-next-line vue/multi-word-component-names
  name:"guideRegister",
  components:{
    navbar,
    footerbar
  },
  data: () => {
    return {
      steps: {},
      step: 1,
      
        user_role: "guide",
        guidefname: "",
        guidenic: "",
        guidephone: "",
        guidepassword: "",
        guideemail: "",
        guideaddress: "",

        imageData: null,
        picture: null,
        uploadValue: 0,
      
    };
  },
  methods:{

  async guideAdd(){
      
    alert("Succesfully registered!")
      await guide_add_sys.guideAddSys(
        // this.guide
        this.user_role,
        this.guidefname,
        this.guidenic,
        this.guidephone,
        this.guidepassword,
        this.guideuname,
        this.guideemail,
        this.guideaddress,
        );

    },

    previewPDF(event) {
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


      
    },
 }, 

}

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

.row2 {
  display: flex;
}
.row3 {
  height: 240px;
}

.column2 {
  flex: 50%;
}

.newbtn1 {
  background-color: grey;
  border-color: grey;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 50px;
}

.newbtn1:hover {
  background-color: darkgrey;
  border-color: darkgrey;
}

.newbtn2 {
  background-color: red;
  border-color: red;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

.newbtn2:hover {
  background-color: darkred;
  border-color: darkred;
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

.newbtn{
  background-color: #0084BD;
  border-color: #0084BD;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
  width: 180px;
}

.newbtn:hover{
  background-color:hsl(198, 72%, 46%);
  border-color:hsl(198, 72%, 46%);
}
  
.col{
  width: 100px;
  height: 200px;
}

#heading2{
 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #085B7F;
}

.cardstyle{
  margin-left: 50px;
  margin-right: 50px;

  }
</style>
