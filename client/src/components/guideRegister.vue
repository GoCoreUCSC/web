<template>
    <!------Navigation Bar------->
    <navbar />
 <!------Navigation Bar ends------->

<!------Content------->
    <div id="content">
        <div class="row">
            <div class="col-sm">
                <img src="../assets/WithSlogan.png" alt="GoCore Logo">
            </div>
            <div class="col-sm">
                <div><h3>Register to the system</h3></div>
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
                  <label for="guideDocs">Upload documents for verification</label>
                  <!-- <input type="file" @change="previewFiles" multiple class="inputstyle"><br><br> -->
                </div>
                <div>
                  <p><input type="checkbox">I have agreed to the terms and privacy policy</p>
                </div>
                
                <div style="justify-content:center"><a href="./dashboardPage.vue" style="color:white">
                <button class="btn newbtn btn-primary btn-lg" v-on:click="guideAdd">Sign Up</button></a></div>
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
import guide_add_sys from '../guide_add_sys';
 
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
      
    };
  },
  methods:{

  async guideAdd(){
      
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

    }
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
