import axios from 'axios';

const url = 'http://localhost:5000/api/admin_Home/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class admin_Home{
    static view_admin_home(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                console.log(res)
                const data = res.data;
                resolve(
                    data.map(post =>({
                        id:post._id,
                        user_role: post.user_role,
                        name: post.name,
                        contact_no: post.contact_no,
                        address: post.address,
                        nic: post.nic,
                        image: post.image,
                        vehicletype: post.vehicletype,
                        vehicleregno: post.vehicleregno
                    }))

                );
                
            }catch(err){
                reject(err);                
            }
        });
    }


}

export default admin_Home;