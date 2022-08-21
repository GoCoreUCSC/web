import axios from 'axios';

const url = 'http://localhost:5000/api/guide_add_Sys/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_add_Sys{
    
    //Create POST
    static guideAddSys(user_role,guidefname,guidenic,guidephone,guidepassword,guideuname,guideemail,guideaddress){
        return axios.post(url,{
            
            // guide:guide         
            user_role:user_role,         
            guidefname:guidefname,         
            guidenic:guidenic,         
            guidephone:guidephone,         
            guidepassword:guidepassword,        
            guideemail:guideemail,         
            guideaddress:guideaddress,         
        });
    }
}

export default guide_add_Sys;