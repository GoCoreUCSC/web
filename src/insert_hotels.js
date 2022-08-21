import axios from 'axios';

const url = 'http://localhost:5000/api/insert_Hotels/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class insert_hotels{

    //Create POST
    static insertHotels(hotelName,regNo,address,city,telPhn,web,mail,rooms){
        return axios.post(url,{
            hotelName:hotelName,
            regNo:regNo,
            address:address,
            city:city,
            telPhn:telPhn,
            web:web,
            mail:mail,
            rooms:rooms
        });
    }

}

export default insert_hotels;