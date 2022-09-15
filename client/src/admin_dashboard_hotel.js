import axios from 'axios';

const url = 'http://localhost:5000/api/admin_dashboard_Hotel/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class admin_dashboard_Hotel{
    static adminDashboardHotel(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                       user_role: post.user_role,
                       hotelh_name: post.hotelh_name,
                       hotelregNo: post.hotelregNo,
                       hotelcity: post.hotelcity,
                       hoteladdress: post.hoteladdress,
                       hotelphone: post.hotelphone,

                        
                    }))

                );
            }catch(err){
                reject(err);                
            }
        });
    }

}

export default admin_dashboard_Hotel;