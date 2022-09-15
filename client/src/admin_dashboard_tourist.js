import axios from 'axios';

const url = 'http://localhost:5000/api/admin_dashboard_Tourist/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class admin_dashboard_Tourist{
    static view_dashboard_tourist(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        user_role: post.owner.user_role,
                        name: post.owner.name,
                        email: post.owner.email,
                    }))

                );
            }catch(err){
                reject(err);                
            }
        });
    }

}

export default admin_dashboard_Tourist;