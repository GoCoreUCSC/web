import axios from 'axios';

const url = 'http://localhost:5000/api/hotel_add_Sys/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class hotel_add_Sys{
    
    //Create POST
    static hotelAddSys(user_role,hotelh_name,hotelregNo,hotelphone,hotelcity,hotelpassword,hotelweb,
        hotelemail,hoteladdress
        )

        {

        return axios.post(url,{
            
            // hotel:hotel
            user_role:user_role,
            hotelh_name:hotelh_name,
            hotelregNo:hotelregNo,
            hotelphone:hotelphone,
            hotelcity:hotelcity,
            hotelpassword:hotelpassword,
            hotelweb:hotelweb,
            hotelemail:hotelemail,
            hoteladdress:hoteladdress,

        });
    }
}

export default hotel_add_Sys;