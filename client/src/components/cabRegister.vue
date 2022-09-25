<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar endsss------->

<!------Content------->
    <div id="content">
        <div class="row">
            <div class="col-sm">
                <img src="../assets/driver.jpg" alt="GoCore Logo">
            </div>
            <div class="col-sm">
                <section class="">
		<transition name="slide-fade">
			<section v-show="step === 1">
				<form class="form  p-4" method="post" action="#" @submit.prevent="next">

					<div class="form group">
						<h2 class="">Details of the Owner</h2>
            <label for="ownerName">Name</label><br>
						<input class="inputstyle " type="text" v-model="ownerName"  placeholder="First name" required /><br><br>
            <label for="ownerTel">Contact Number</label><br>				
						<input class="inputstyle" type="tel" v-model="ownerphoneNumber"  placeholder="Phone number" minlength="9" maxlength="10"  required /><br><br>
            <label for="ownerAddress">Address</label><br>					
						<input class="inputstyle" type="tel" v-model="owneraddress"  placeholder="Address" required /><br><br>
            <label for="ownerCity">City</label><br>				
						<input class="inputstyle" type="text" v-model="ownercity"  placeholder="City" required /><br><br>
            <label for="ownerMail">Email</label><br>					
						<input class="inputstyle" type="email" v-model="ownereMail"  placeholder="Email" required /><br><br>
            <label for="ownerNIC">NIC Number</label><br>					
						<input class="inputstyle" type="text" v-model="ownernic"  placeholder="NIC" minlength="12" maxlength="12" required /><br><br>
					</div>
					<div>
						<button class="btn btn-primary newbtn" type="submit" value="Next">Next</button>
					</div>
				</form>
			</section>
		</transition>
		<transition name="slide-fade">
			<section v-show="step === 2">

				<div class="form-group">
				<h2 class="">Details of the Vehicle</h2>
				<form class="form p-4" method="post" action="#" @submit.prevent="next">
					
            <label for="Vtype">Vehicle Type</label><br>
						<input class="inputstyle" type="text" v-model="vehicletype"  placeholder="Vehicle Type" required /><br><br>
            <label for="Vregno">Registration Number</label><br>
						<input class="inputstyle" type="text" v-model="vehicleregno"  placeholder="Registered Number" required /><br><br>
            <label for="Vregyr">Registered Year</label><br>
						<input class="inputstyle" type="text" v-model="vehicleregYear"  placeholder="Registered Year" required /><br><br>
            <label for="Vchassis">Chassis Number</label><br>
						<input class="inputstyle" type="text" v-model="vehiclechassis"  placeholder="Chassis No" required /><br><br>
            <label for="Vinsurance">Insurance Type</label><br>
						<input class="inputstyle" type="text" v-model="vehicleinsuarance"  placeholder="Insurance Type" required /><br><br>
            <label for="Vdocs">Upload documents for verification</label><br>
            <p><input class="inputstyle" type="file" @change="previewPDF" accept="application/pdf"></p>

						<div class="fom-group">
							<button type="" class="btn btn-lg newbtn btn-primary" @click.prevent="prev(); onUpload();">Previous</button>
							<button type="submit" class="btn btn-lg newbtn btn-primary">Next</button>
						</div>
				</form>
				</div>
			</section>
		</transition>
		<transition name="slide-fade">
			<section v-show="step === 3">
				<h2 class="">Details of the Driver</h2>
				<form class="form" action="#" @submit.prevent="customerRegister">
					
						<label for="driverName">Name</label><br>
            <input class="inputstyle" type="text" v-model="driverName"  placeholder="Name" required /><br><br>
            <label for="driverBdy">Birthday</label><br>
						<input class="inputstyle" type="date" v-model="driverbirthdate" placeholder="Birthday ('day'/'month'/'year')" required /><br><br>				
						<label for="driverTel">Contact Number</label><br>
            <input class="inputstyle" type="tel" v-model="driverphoneNumber"  placeholder="Contact Number" required /><br><br>
            <label for="driverAddress">Address</label><br>			
						<input class="inputstyle" type="text" v-model="driveraddress" placeholder="Address" required /><br><br>
            <label for="driverMail">Email</label><br>
						<input class="inputstyle" type="email" v-model="drivereMail"  placeholder="Email" required /><br><br>
            <label for="driverNIC">NIC Number</label><br>
						<input class="inputstyle" type="text" v-model="drivernic" placeholder="NIC" required /><br><br>
            <label for="driverLicense">License Number</label><br>
						<input class="inputstyle" type="text" v-model="driverlicense" placeholder="License Number" required /><br><br>
            <label for="driverDocs">Upload documents for verification</label><br>
						<!-- <input class="inputstyle" type="file"  placeholder="Upload the document" required /><br><br> -->
            <div>
                  <p><input class="inputstyle" type="file" @change="previewPDF" accept="application/pdf"></p>
              
                </div>

					<div class="fom-group">
							<button type="" class="btn btn-lg newbtn btn-primary" @click.prevent="prev()">Previous</button>
							<button type="submit" class="btn btn-lg newbtn btn-primary" v-on:click="cabAdd(); onUpload();">Sign Up</button>
						</div>
				</form>
			</section>
		</transition>
	</section>
            

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
import cab_add_sys from '../cab_add_sys';
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

  name:"cabRegister",
  components:{
    navbar,
    footerbar
  },
    data: () => {
    return {
      steps: {},
      step: 1,
      
        ownerName: "",ownerphoneNumber: "",owneraddress: "",ownercity: "",ownereMail: "",ownernic: "",

        vehicletype: "",vehicleregno: "",vehicleregYear: "",vehiclechassis: "",vehicleinsuarance: "",
      
        driverName: "",driverbirthdate: "",driverphoneNumber: "",driveraddress: "",drivereMail: "",drivernic: "",driverlicense: "",
     
        imageData: null,
        picture: null,
        uploadValue: 0
    };
  },
  methods: {
    prev() {
      this.step--;
    },

    next() {
      this.step++;
    },
    async cabAdd(){
      
      await cab_add_sys.cabAddSys(
        // this.owner,this.vehicle,this.driver
        this.ownerName,
        this.ownerphoneNumber,
        this.owneraddress,
        this.ownercity,
        this.ownereMail,
        this.ownernic,
        
        this.vehicletype,
        this.vehicleregno,
        this.vehicleregYear,
        this.vehiclechassis,
        this.vehicleinsuarance,

        this.driverName,
        this.driverbirthdate,
        this.driverphoneNumber,
        this.driveraddress,
        this.drivereMail,
        this.drivernic,
        this.driverlicense,


        );

    },
    previewPDF(event){
    this.uploadValue=0;
    this.picture=null;
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
  }



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

.animation-in {
   transform-origin: left;
   animation: in .6s ease-in-out;
}
.animation-out {
   transform-origin: bottom left;
   animation: out .6s ease-in-out;
}

</style>
