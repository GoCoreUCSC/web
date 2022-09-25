<template>
  <!------Navigation Bar------->
  <navbar />
  <!------Navigation Bar ends------->

  <!------Content------->

  <div id="content">
    <div class="row">
      <div class="col-lg">
        <div><h3>Hotel Registration</h3></div>
        <form action="" class="row p-4">
          <div class="col-sm">
            <label for="h_name">Hotel Name</label><br />
            <input
              type="text"
              v-model="hotelh_name"
              required
              placeholder="Hotel Name"
              class="inputstyle"
            />
            <br /><br />
            <label for="nic">Registration No</label><br />
            <input
              type="text"
              v-model="hotelregNo"
              class="inputstyle"
              placeholder="Hotel Registration Number"
            /><br /><br />

            <!-- contact -->

            <label for="city">City</label><br />
            <input
              type="tel"
              v-model="hotelcity"
              placeholder="Hotel Location"
              class="inputstyle"
            /><br /><br />
            <label for="password">Password</label><br />
            <input
              type="password"
              v-model="hotelpassword"
              required
              placeholder="Password"
              class="inputstyle"
              id="id_password"
            /><br /><br />

            <label for="passwordConf">Confirm Password</label><br />
            <input type="password" v-model="hotelpasswordConf" placeholder="Re-enter password" class="inputstyle" required /><br /><br />
          </div>
          <div class="col-sm">
            <label for="web">Website Link</label><br />
            <input
              type="url"
              v-model="hotelweb"
              required
              placeholder="abchotel.com"
              class="inputstyle"
            />
            <br /><br />
            <label for="docs">*Upload Photo</label><br />

            <div>
              <input type="file" @change="previewImage" accept="image/" />
              <!-- <div class="planImage"><img class="preview" v-bind:src="picture" /><br /></div> -->
            </div>

            <div>
              <img class="preview" v-bind:src="picture" /><br />

            </div>
            <label for="phone">Contact Details</label><br />
            <input type="tel" v-model="hotelphone" placeholder="+94xxxxxxxxx" class="inputstyle" />
            <br /><br />
            
            <label for="email">Email</label><br />
            <input type="email" v-model="hotelemail" placeholder="example@gmail.com" class="inputstyle" /><br /><br />

            <label for="address">Address</label><br />
            <input type="text" v-model="hoteladdress" placeholder="Enter your address" class="inputstyle" /><br /><br />
           

          </div>
          <!-- <p>
            <input type="checkbox" />I have agreed to the terms and privacy
            policy
          </p> -->

          <div style="justify-content: center">
            <!-- <a href="./dashboardPage.vue" style="color: white">
              <button class="btn newbtn btn-primary btn-lg" v-on:click="hotelAdd(); onUpload();" >Sign Up</button></a> -->

            <div class="col-sm-6">
              <!-- Button trigger modal -->
              <button type="submit" class="newbtn btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                    <div class="modal-body"
                    >
                      <form>
                        <div class="mb-3">
                          <label class="label">Successfully Inserted!</label>
                        </div>
                        <a href="./HomePage.vue"><button type="button" class="newbtn2 btn btn-primary"  v-on:click="hotelAdd(); onUpload();">OK</button></a>
                        <div class="col-sm-6">
              <!-- Button trigger modal -->
              
        
          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>

        </form>
      </div>
    </div>
    <hr />
  </div>
  <!------Content ends------->

  <!------Footer------->
  <footerbar />

  <!------Footer ends------->
</template>

<script>
import navbar from "./topNavbar.vue";
import footerbar from "./footerBar.vue";
import hotel_add_sys from "../hotel_add_sys";
import {getStorage,ref as rt2,uploadBytes,getDownloadURL,} from "firebase/storage";
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "hotelRegister",
  components: {
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
      uploadValue: 0,
    };
  },

  methods: {
    async hotelAdd() {
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
        this.hoteladdress
      );
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;

      const storageRef = rt2(storage, `${this.imageData.name}`);

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
};
</script>

<style scoped>
img.preview {
  width: 200px;
}
#content {
  align-items: center;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
}

.inputstyle {
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

.newbtn {
  background-color: #0084bd;
  border-color: #0084bd;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.newbtn2 {
  background-color: #0084bd;
  border-color: #3d464a;
  border-style: solid;
  height: 50px;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
}

.newbtn2:hover,.newbtn:hover  {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  border-color: #3d464a;
}

.newbtn:hover {
  background-color: hsl(198, 72%, 46%);
  border-color: hsl(198, 72%, 46%);
}

#heading2 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #085b7f;
}

.cardstyle {
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

.planImage{
  height: 50px;
  width: 40px;
}
</style>
