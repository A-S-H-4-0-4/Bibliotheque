// it is an API file for calling get and post API

// importing validate API 
// import {validateParams} from '../validations/validateAPI';

const BaseUrl="http://127.0.0.1:8000/cadCamingApi/"

export const callAPI=async (API,params=null,method=null)=>{
    console.log(params);
    try {
        let informationObject={}
        // simple logic
        if (params) {
            //chekcing for params:- if they have all required set of keys or not
            // const areParamsSafe = validateParams(API,params)
            // if (!areParamsSafe) {
            //    return false
            // }
            // making a post request
            if (method==="delete") {
                informationObject.method="DELETE"
            }else{
                informationObject.method="POST"
            }
            const dataObject = new FormData() 
            for(const key in params){
                dataObject.append(key,params[key])
            }
            
            console.log("data object");
            console.log(dataObject);
            informationObject['content-type']='multipart/form-data'
            informationObject.body=dataObject
        }else{
            // making a get request
            informationObject.headers = {
               
                'Content-Type':'application/json',
                'Authorization':'Token 8788bd76500c075c1a57673e41fe30e14301dd04',
                
                
              };
              informationObject.method="GET"
              informationObject.cache='no-cache'
    
        }
        console.log(informationObject);
        const response=  await fetch(BaseUrl+API,informationObject)
        const result = await response.json()
        return result
        
    } catch (error) {
        return error
    }
   
}




