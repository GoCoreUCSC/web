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
                        Title: post.Title,
                        Duration: post.Duration,
                        Activities: post.Activities,
                        startingCity: post.startingCity,
                        FdestName: post.FdestName,
                        Ftransport: post.Ftransport,
                        Fstay: post.Fstay,
                        destination: {
                            destName: post.destName,
                            transport: post.transport,
                            stay: post.stay,
                        },
                        
                    }))
                );
            }catch(err){
                reject(err);                
            }
        });
    }

    //Create POST
    // static insertPost(text){
    //     return axios.post(url,{
    //         text: text                  //also use text
    //     });
    // }

    //delete Post
//     static deletePost(id){
//         return axios.delete(`${url}${id}`);
//     }
}

export default guide_added_Plan;