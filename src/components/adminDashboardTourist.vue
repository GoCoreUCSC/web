<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->
    <div id="content">
        <div class="row">
            <div class="col-lg">
                <div><h3>Guides' details</h3></div>
                <MDBTable class="align-middle mb-0 bg-white">
    <thead class="bg-light">
      
      <tr>
        <th>Tourist Name</th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  

      
      <tr>

        <div class="post"
      v-for="(post,index) in touristDetails" 
      v-bind:item="post"
      v-bind:index="index"
      v-bind:key="post.id">
        <!-- <td><p class="fw-bold mb-1">{{posttouristName}}</p></td> -->
  
        <td><p class="text-muted mb-0">{{post.name}}</p></td>

        <td><p class="fw-normal mb-1">{{post.email}}</p></td>
        
        <!-- <td><p class="text">{{post.vehicletype}}</p></td>

        <td><p class="text">{{post.vehicleregno}}</p></td> -->
        
        <td>
          <MDBBadge badge="success" pill class="d-inline">Active</MDBBadge>
        </td>

        <td>
          <button class="btn btn-primary newbtn" type="submit" value="Next">
            Edit
          </button>
        </td>
        </div>

      </tr>
    

    </tbody>
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
import admin_dashboard_tourist from '../admin_dashboard_tourist';

import {
    MDBTable
  } from 'mdb-vue-ui-kit';

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"adminDashboardTourist",
  components:{
    MDBTable,
    navbar,
    
  },
  data(){
    return{
      touristDetails: [],
      error: '',
      
        user_role: "tuorist",
        name: "",
        email: "",

      
    }
  },
  async created(){
    try{
      this.touristDetails = await admin_dashboard_tourist.view_dashboard_tourist();
    }
    catch(err){
      this.error = err.message;
    }
  },

  methods:{

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