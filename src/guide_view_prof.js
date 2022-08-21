import axios from 'axios';

const url = 'http://localhost:5000/api/guide_view_Prof/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_view_Prof{
    static getguideViewProf(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve,reject)=>{
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>({
                        ...post,
                        user_role: post.user_role,
                        guidefname: post.guidefname,
                        guidenic: post.guidenic,
                        guideemail: post.guideemail,
                        guidephone: post.guidephone,
                        guideuname: post.guideuname,
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
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default guide_view_Prof;