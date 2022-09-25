<template>
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
<footer class=" footstyle footer-expand-sm text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-2">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-8">
        <h5 class="text-uppercase">Social Media</h5> 

        <p>
          <MDBBtn tag="a" color="primary" href="#!" floating size="sm" style="background-color: rgb(59, 89, 152); margin-right: 10px;">
            <MDBIcon iconStyle="fab" icon="facebook-f"></MDBIcon>
          </MDBBtn>
          <MDBBtn tag="a" color="primary" href="#!" floating size="sm" style="background-color: rgb(172, 43, 172); margin-right: 10px;">
            <MDBIcon iconStyle="fab" icon="instagram"></MDBIcon>
          </MDBBtn>
          <MDBBtn tag="a" color="primary" href="#!" floating size="sm" style="background-color: rgb(0, 130, 202); margin-right: 10px;">
            <MDBIcon iconStyle="fab" icon="linkedin-in"></MDBIcon>
          </MDBBtn>
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-8">
        <h5 class="text-uppercase">Contact Us</h5>
         <p>
          <MDBIcon icon="envelope" size="lg" style="margin-right: 5px;" />
          <a href="#">gocoretourplan@gmail.com</a> 
          <MDBIcon icon="phone-square" size="lg" style="margin-left: 5px; margin-right: 5px;" />
          <a href="#">+94 1122334</a>
          </p>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <a class="text-dark">GoCore</a>
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
import {
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";

export default {
    name:'footerBar',
    components: {
    MDBBtn,
    MDBIcon,
  } 
};

</script>

<style scoped>
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  color: gray;
  height: 5px;
}
.fa:hover {
    opacity: 0.7;
}
.footstyle{
  max-height: 60px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
}



</style>