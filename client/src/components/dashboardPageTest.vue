<template>
  <!--- Navigation Bars-->
  <usernav />
  <sidenav />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
  <br /><br />
  <!-- nav ends -->
  <!--- content------>
  <div class="container">
    <div class="row">
      <div class="flex-row-reverse">
        <Modal @close="toggleModal" :modalActive="modalActive">
          <div class="modal-content">
            <form action="" class="login-form">
              <div class="p-3">
                <h1>Tour Plan</h1>
                <div class="form-group p-1">
                  <input type="text" v-model="PlanId" placeholder="Plan Id" />
                  <input type="text" v-model="Title" placeholder="Plan Name" />
                  <br />

                  <input
                    type="text"
                    v-model="Duration"
                    placeholder="Duration"
                  />

                  <input type="text" v-model="Destination" placeholder="Destination" />

                  <br />
                  <small>Add a cover photo for the tour plan</small>

                  <div>
                    <input type="file" @change="previewImage" accept="image/" />
                  </div>

                  <div class="planImage"><img class="preview" v-bind:src="picture" /><br /></div>

                  <input type="text" v-model="Rate" placeholder="Rate" />
                  <br />
                  <input type="text" v-model="Price" placeholder="Enter Price" />

                  <input type="text" v-model="Activities" placeholder="Activities" />

                  <input type="text" v-model="Duration" placeholder="Duration" />

                  <input type="text" v-model="MaxTravellers" placeholder="Maximum Travellers" />

                  <input type="text" v-model="PaymentMethod" placeholder="PaymentMethod" />
                </div>
              </div>

              <!--Dynamic input fields to add more destinations-->
              <div class="p-3" v-for="(k, index) in destination1" :key="index">
                <div class="form-group p-1">
                  <input
                    type="text"
                    placeholder="Enter Next Destination"
                    v-model="destination1[index].nextDestination"
                  />
                </div>
                <div class="form-group p-1">
                  <input
                    type="text"
                    placeholder="Transportation Method"
                    v-model="destination1[index].transportMethod"
                  />
                </div>
                <div class="form-group p-1">
                  <input
                    type="text"
                    placeholder="Accomodation"
                    v-model="destination1[index].Accomodation"
                  />
                </div>
              </div>
              
              <!-- Controls to add or remove fields-->
              <div class="p-2">
                <a href="#" id="add-destination" @click="add" class="controls"
                  ><i class="fa-solid fa-plus"></i>Add Destination</a
                >
                <a
                  href="#"
                  id="remove-destination"
                  @click="remove(index)"
                  class="controls"
                  ><i class="fa-solid fa-minus"></i>Remove Destination</a
                >
              </div>

              <div class="p-4">
                <button
                  type="button"
                  class="newbtn btn btn-primary btn-lg"
                  v-on:click="
                    guideAddPlan() ;;
                  
                  "
                >
                  Add Plan
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <div class="d-flex flex-row-reverse">
          <button
            type="button"
            class="btn newbtn btn-primary btn-lg"
            @click="toggleModal"
          >
            + New Plan
          </button>
        </div>
      </div>

      <!-- Button to add a new tour plan.This button trigger the modal-->
    </div>
    <!-- existing tour plans-->
    <div class="row">
      <div class="card-deck p-5">
        <div class="d-flex flex-fill"></div>
      </div>
    </div>

    <div class="row">
      <div class="card-deck p-5">
        <div class="d-flex flex-fill flex-wrap">
          <div
            class="card cardstyle"
            style="width: 18rem"
            v-for="(post, index) in posts"
            v-bind:item="post"
            v-bind:index="index"
            v-bind:key="post.id"
          >
            <a v-bind:href="'./viewPlan.vue?id='+post._id">
              <img
                class="card-img-top"
                v-bind:src="post.url ? post.url : '../assets/beach.jpg'"
                alt="Card image cap"
              />
              </a>
              <div class="card-body">
                <p>{{ post.Title }}</p>
                <!-- <p>{{ post.Duration }}</p>
                <p class="card-text">{{ post.Activities }}</p> -->
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <!-- existing tour plans ends-->

    <div class="row">
      <div></div>
    </div>
    <br />
  </div>
  <!----content ends----->
  <hr />
  <!-- footer -->
  <footerbar />
  <!-- footer ends-->
</template>
<script>
//import footerbar from "./footerBar.vue"
import Modal from "@/components/modalPopup.vue";
import { ref } from "vue";
import sidenav from "./sideNavbar.vue";
import { sidebarWidth } from "./state";
import { collapsed, toggleSidebar } from "./state";
import usernav from "./userNav.vue";
import guide_add_plan from "../guide_add_plan";
import guide_added_plans from "../guide_added_plans";
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

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "dashboardPage",
  components: {
    //footerbar,
    Modal,
    sidenav,
    usernav,
  },
  setup() {
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return (
      { sidebarWidth },
      { collapsed, toggleSidebar },
      { modalActive, toggleModal }
    );
  },
  //define data
  data: function () {
    return {
      posts: [],
      destination: [],

      imageData: null,
      picture: null,
      uploadValue: 0,
    };
  },
  async created() {
    try {
      this.posts = await guide_added_plans.getguideAddedPlans(); //class name.method in the PostService.js file
    } catch (err) {
      this.error = err.message;
    }
  },

  methods: {
    add: function () {
      this.destination.push({});
    },
    remove(index) {
      this.destination.splice(index, 1);
    },

    async guideAddPlan() {

      const urlx = await this. onUpload();
      await guide_add_plan.insertGuidePlan(
        this.PlanId,
        this.Title,
        this.Destination,
        this.Rate,
        this.Price,
        this.Activities,
        this.Duration,
        this.MaxTravellers,
        this.PaymentMethod,
        this.destination1,
        urlx
      );
      location.href='/dashboardPageTest.vue'
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
};
</script>
<style scoped>
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
.cardstyle {
  max-width: 200px;
  max-height: 40vh;
  margin-left: 50px;
  margin-right: 50px;
}
.modal-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: none;
}
.modal-content h1,
p {
  margin-bottom: 16px;
}
.modal-content h1 {
  font-size: 32px;
}
.modal-content p {
  font-size: 18px;
}
.login-form {
  border: 1.5px;
  border-radius: 5px;
  border-color: gray;
  border-style: solid;
  width: 30vw;
  max-height: 1000vh;
  align-items: center;
}
.login-form input {
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
.controls {
  color: black;
  padding: 5px;
}

.planImage{
  height: 50px;
  width: 40px;
}
</style>d