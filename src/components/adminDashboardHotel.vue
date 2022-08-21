<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->
    <div id="content">
        <div class="row">
            <div class="col-lg">
                <div><h3>Hotels' details</h3></div>
                <MDBTable class="align-middle mb-0 bg-white">
    
    <!-- <tbody> -->
  
      <thead class="bg-light">
      
      <tr>
        <th>Hotel Name</th>
        <th>Reg No</th>
        <th>City</th>
        <th>Web</th>
        <th>Address</th>
        <th>Phone</th>
        <th></th>
        <th></th>
      </tr>

    </thead>

    <div class="post"
      v-for="(post,index) in hotelDetails" 
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post.id">
      
<tr>
  
        <td>{{post.hotelh_name}} </td>

        <td>{{post.hotelregNo}}</td>

        <td><p class="text">{{post.hotelcity}}</p></td>

        <td><p class="text">{{post.hotelweb}}</p></td>
        
        <td><p class="text">{{post.hoteladdress}}</p></td>

        <td><p class="text">{{post.hotelphone}}</p></td>
        
        <td>
          <MDBBadge badge="success" pill class="d-inline">Active</MDBBadge>
        </td>

        <td>
          <button class="btn btn-primary newbtn" type="submit" value="Next">
            View
          </button>
        </td>
    </tr>
        </div>

      <!-- </tbody> -->
    </MDBTable>

      </div>  
    </div>    
    <hr>
        
    </div>
<!------Content ends------->

<!------Footer------->

<!------Footer ends------->
</template>

<script>
import navbar from "./topNavbar.vue"
import admin_dashboard_hotel from '../admin_dashboard_hotel';

import {
    MDBTable
  } from 'mdb-vue-ui-kit';

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"adminDashboardHotel",
  components:{
    MDBTable,
    navbar,
    
  },
  data(){
    return{
      hotelDetails: [],
      error: '',

      steps: {},
      step: 1,
        
        user_role: "hotel",
        hotelh_name: "",
        hotelregNo: "",
        hotelcity: "",
        hotelweb: "",
        hoteladdress: "",
        hotelphone: ""
      

    }
  },
  async created(){
    try{
      this.hotelDetails = await admin_dashboard_hotel.adminDashboardHotel();
    }
    catch(err){
      this.error = err.message;
    }
  },
 methods: {
  
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
 
</style>