import axios from 'axios';

const url = 'http://localhost:5000/api/guide_view_Plan/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_added_Plan{
    static getguideAddedPlans(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                    }))
                );
            }catch(err){
                reject(err);                
            }
        });
    }

}

export default guide_added_Plan;