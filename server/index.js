const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());


//POST
const posts = require('./routes/api/posts');   //link to posts.js file
app.use('/api/posts', posts);                  //http://localhost:5000/api/posts

const guide_reg = require('./routes/api/guide_Reg');
app.use('/api/guide_reg', guide_reg);

const guide_add_plan = require('./routes/api/guide_add_Plan');
app.use('/api/guide_add_plan', guide_add_plan);

const guide_add_sys = require('./routes/api/guide_add_Sys');
app.use('/api/guide_add_sys', guide_add_sys);

const hotel_add_sys = require('./routes/api/hotel_add_Sys');
app.use('/api/hotel_add_sys', hotel_add_sys);

const cab_add_sys = require('./routes/api/cab_add_Sys');
app.use('/api/cab_add_sys', cab_add_sys);

const insert_hotels = require('./routes/api/insert_Hotels');
app.use('/api/insert_hotels', insert_hotels);



//GET
const view_tour_plan = require('./routes/api/view_tour_Plan');
app.use('/api/view_tour_plan', view_tour_plan);

const admin_dashboard_guide = require('./routes/api/admin_dashboard_Guide');
app.use('/api/admin_dashboard_guide', admin_dashboard_guide);

const admin_dashboard_hotel = require('./routes/api/admin_dashboard_Hotel');
app.use('/api/admin_dashboard_hotel', admin_dashboard_hotel);

const admin_dashboard_tourist = require('./routes/api/admin_dashboard_Tourist');
app.use('/api/admin_dashboard_tourist', admin_dashboard_tourist);

const guide_added_plans = require('./routes/api/guide_added_Plans');
app.use('/api/guide_added_plans', guide_added_plans);

const guide_view_plan = require('./routes/api/guide_view_Plan');
app.use('/api/guide_view_plan', guide_view_plan);

const guide_view_tourPlan = require('./routes/api/guide_view_TourPlan');
app.use('/api/guide_view_tourPlan', guide_view_tourPlan);

const guide_view_prof = require('./routes/api/guide_view_Prof');
app.use('/api/guide_view_prof', guide_view_prof);

const guide_profile_load = require('./routes/api/guide_profile_Load');
app.use('/api/guide_profile_load', guide_profile_load);

const guide_login_home = require('./routes/api/guide_login_Home');
app.use('/api/guide_login_home', guide_login_home);

const admin_home = require('./routes/api/admin_Home');
app.use('/api/admin_home', admin_home);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));