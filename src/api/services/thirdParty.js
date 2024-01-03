const axios = require('axios');
const { env, thirdPartyService } = require('../../config/vars');
const { createNewCircuit } = require('../services/thirdParty.js');

const getDetailsCircuit = createNewCircuit(getDetails);

exports.getDetails = async () => {

try{
    if(env='development') {

        const randomValue = Math.random();
        if(randomValue) {   

        return { message: "hello from the other side" }

        } 
        throw new Error('some Client side Error'); 
        
    }
    const options = {
        url: thirdPartyService.uri  + "/" + thirdPartyService.endpoint,
        method: 'GET'
    }
    
    info = await axios(options);
    return {...info, message: "hello from the other side!" }
} catch(err) {
    throw new Error('Something went wrong while fetching the info, please try again later!!');
}

}