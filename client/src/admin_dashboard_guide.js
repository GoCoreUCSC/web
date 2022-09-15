import axios from 'axios';

const url = 'http://localhost:5000/api/admin_dashboard_Guide/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class admin_dashboard_Guide{
    static view_dashboard_guide(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        user_role: post.user_role,
                        name: post.name,
                        contact_no: post.contact_no,
                        // certification: post.certification[0],
                        ownernic: post.ownernic,
                        // image: post.image,
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

export default admin_dashboard_Guide;