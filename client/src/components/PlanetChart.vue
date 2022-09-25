<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->
    <!-- <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
     /> -->

     <div class="card-body"
                    v-for="(post,index) in posts"
                    v-bind:item="post"
                    v-bind:index="index"
                    v-bind:key="post.id"
                    >
                    <p class="card-text">Galle <br> {{post.text}} Duration 3 days</p> 
                    </div>
<!------Content ends------->

<!------Footer------->
    <footerbar />

<!------Footer ends------->

</template>

<script>

import navbar from "./topNavbar.vue"
import footerbar from "./footerBar.vue"
import planet_chart from '../planet_chart'
import { getStorage,ref,uploadBytes      } from "firebase/storage";
import { initializeApp } from "firebase/app";
// import planetChartData from '../planet-data.js';
// import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

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
console.log(storage)

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"PlanetChart",
  components:{
    navbar,
    footerbar,
    // Bar
  },
  // props: {
  //   chartId: {
  //     type: String,
  //     default: 'bar-chart'
  //   },
  //   datasetIdKey: {
  //     type: String,
  //     default: 'label'
  //   },
  //   width: {
  //     type: Number,
  //     default: 400
  //   },
  //   height: {
  //     type: Number,
  //     default: 400
  //   },
  //   cssClasses: {
  //     default: '',
  //     type: String
  //   },
  //   styles: {
  //     type: Object,
  //     default: () => {}
  //   },
  //   plugins: {
  //     type: Object,
  //     default: () => {}
  //   }
  // },

  data: () => {
    return {
      posts: [],

      steps: {},
      step: 1,

      // planetChartData: planetChartData,

      imageData: null,
      picture: null,
      uploadValue: 0
  
    };
  },
async mounted () {
    this.loaded = false

    // try {
    //   const { userlist } = await axios.get('http://localhost:5000//api/admin_dashboard_Hotel')
    //   this.user_role = userlist

    //   this.loaded = true
    // } catch (e) {
    //   console.error(e)
    // }
    
  },
  async created(){
    try{
      this.posts = await planet_chart.getguideAddedPlans();   //class name.method in the PostService.js file
    }
    catch(err){
      this.error = err.message;
    }
  },
  methods:{

  async hotelAdd(){
      
      await planet_chart.hotelAddSys(
        // this.hotel
        this.user_role,
        
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
  console.log('Uploaded Successfully!');
});

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
