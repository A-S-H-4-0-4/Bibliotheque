// file for generation session key
const alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const Alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numbers = [1,2,3,4,5,6,7,8,9]
const letter = [Alphabets,numbers,alphabets];

export const generate = () =>  {

let sessionKey = "";
for (let index = 0; index < 15; index++) {
    let letterScope =  letter[Math.floor(Math.random()*3)]
    const char = letterScope[Math.floor(Math.random()*letterScope.length)]
    sessionKey += char.toString()
}
return sessionKey

}

