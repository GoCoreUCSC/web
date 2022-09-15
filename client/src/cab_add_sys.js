import axios from 'axios';

const url = 'http://localhost:5000/api/cab_add_Sys/';
// https://gocore.herokuapp.com/getguideCooperateHotels

class cab_add_Sys{
    
    //Create POST
    static cabAddSys(ownerName,ownerphoneNumber,owneraddress,ownercity,ownereMail,ownernic,
        vehicletype,vehicleregno,vehicleregYear,vehiclechassis,vehicleinsuarance,
        driverName,driverbirthdate,driverphoneNumber,driveraddress,drivereMail,drivernic,driverlicense
        )
    {
        return axios.post(url,{
            
            // owner:owner,
            // vehicle:vehicle,
            // driver:driver,
            
            ownerName:ownerName,
            ownerphoneNumber:ownerphoneNumber,
            owneraddress:owneraddress,
            ownercity:ownercity,
            ownereMail:ownereMail,
            ownernic:ownernic,
            
            vehicletype:vehicletype,
            vehicleregno:vehicleregno,
            vehicleregYear:vehicleregYear,
            vehiclechassis:vehiclechassis,
            vehicleinsuarance:vehicleinsuarance,
            
            driverName:driverName,
            driverbirthdate:driverbirthdate,
            driverphoneNumber:driverphoneNumber,
            driveraddress:driveraddress,
            drivereMail:drivereMail,
            drivernic:drivernic,
            driverlicense:driverlicense,
            
            
        });
    }
}

export default cab_add_Sys;