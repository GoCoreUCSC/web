<template>
    <!--- Navigation Bar-->
<navbar />
<!-- nav ends -->

<!--content-->
<div id="content" >
  <div class="row">
    <div class="col-sm p-5">
      <form action="" class="login-form p-4">
        <h3>Sign In</h3>
        
        <label for="username">Email</label><br>
        <input type="email" required placeholder="Email" class="inputstyle"> <br><br>
        <label for="password">Password</label><br>
        <input type="password" required placeholder="Password" class="inputstyle">
        <p class="d-flex justify-content-end">forgot password?</p>
        <a href="/dashboardPageTest.vue"><button type="button" class="btn newbtn btn-primary btn-lg">Sign In</button></a>
        <br><br><br><br>
        <p>Login For Admins: <a href="/AdminLogin.vue"><button type="button" class="btn newbtn2 btn-primary btn-lg">Log In</button></a></p>
        
      <!-- <a href="./LogIn.vue"><button @click="login()" class="btn newbtn btn-primary btn-lg" id="loginbtn">Log In</button></a> -->
      </form>
    </div>
    <div class="col-sm p-4">
      <h1 id="heading2">Get GoCore Mobile App for a perfect experience</h1><br>
      <img src="../assets/iPhone.png" alt="gocore mobile app">
    </div>
    
  </div>
  
   <hr>
</div>
<!-- footer -->
<footerbar />
<!-- footer ends-->
</template>
<script>
import navbar from "./topNavbar.vue"
import footerbar from "./footerBar.vue"


export default{
  components:{
    navbar,
    footerbar
  },
  data(){
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login: function(){
      
      if(this.email == "denuka22@gmail.com" && this.password == "Denu@1"){
        // window.location.replace("http://localhost:8080/dashboardPage.vue");
        
        this.$router.push({ 
          name: 'login', 
          query: { redirect: './dashboardPage.vue' } });
      }
     
      else{
        alert("err");
      }
    }
  }
}
</script>

<style scoped>
.login-form{
  
  border-radius: 30px;
  border-color: black;
  border-width: 2px;
  border-style:solid;
  width: 25vw;
  height: 50vh;
  
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
  border-color: black;
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
.newbtn2{
  background-color: #eb830b;
  border-color: #e0af0d;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.newbtn2:hover{
  background-color:hsl(198, 72%, 46%);
  border-color:hsl(198, 72%, 46%);
}
#heading2{
 
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #085B7F;
}
</style>