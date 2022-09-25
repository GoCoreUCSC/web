import axios from 'axios';

const url = 'http://localhost:5000/api/guide_view_TourPlan/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_view_tourPlan{
    static guideViewTourPlan(id){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url+'?id='+id);
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

    // delete Post
    static deleteGuide(id){
        console.log("Hello");
        return axios.delete(`${url}${id}`);
    }
}

export default guide_view_tourPlan;