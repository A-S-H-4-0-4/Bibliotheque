// it is an API file for calling get and post API
const BaseUrl="http://127.0.0.1:8000/jfj-authentication/login/"

export const callLogin = async (params) => {

    console.log(params);
    try {
        let informationObject = {}
        
        // simple logic
        if (params) {
         
            // making a post request
            
            informationObject.method="POST"
            const dataObject = new FormData() 
            for(const key in params){
                dataObject.append(key,params[key])
            }
            
            console.log("data object");
            console.log(dataObject);
            informationObject['content-type']='multipart/form-data'
            informationObject.body=dataObject
        }
        console.log(informationObject);
        const response=  await fetch(BaseUrl,informationObject)
        const result = await response.json()
        return result
        
    } catch (error) {
        return error
    }
   
    
}