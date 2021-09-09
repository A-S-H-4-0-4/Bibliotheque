// it is an API file for calling get and post API
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export const callAPI=async (searchQuery,params=null)=>{

    console.log(params);
    try {
        let informationObject={}
        // simple logic
        if (params) {
         
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
            // informationObject.headers = {
               
                
                
                
            //   };
              informationObject.method="GET"
              informationObject.cache='no-cache'
              
    
        }
        console.log(informationObject);
        
        const response=  await fetch(BaseUrl+searchQuery,informationObject)
        const result = await response.json()
        return result
        
    } catch (error) {
        return error
    }
   
}