import axios from 'axios';

const url = 'http://localhost:5000/api/guide_login_Home/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_profile_load{
    static getGuideProfile(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        createdAt: new Date(post.createdAt)
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

export default guide_profile_load;