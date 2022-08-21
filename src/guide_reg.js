import axios from 'axios';

const url = 'http://localhost:5000/api/guide_Reg/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class guide_reg{

    //Create POST
    static insertGuideSignUp(fName,NIC,phnNo,password,username,email,Address,confPass){
        return axios.post(url,{
            fName:fName,
            NIC:NIC,
            phnNo:phnNo,
            password:password,
            username:username,
            email:email,
            Address:Address,
            confPass:confPass
        });
    }

}

export default guide_reg;