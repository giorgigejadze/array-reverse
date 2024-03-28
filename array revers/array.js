
class ArrayHelper{
    constructor(reverseArray){
        this.reverseArray = reverseArray ;
    }
 
   get(){
    return this.reverseArray
   }
}
let reverseArray = new ArrayHelper([1,2,3,4,5,6,7,8,9,10]);
console.log(reverseArray.get());

let array = Arrayreverse()
console.log(array);

function Arrayreverse(){
    let reverseArray = [1,2,3,4,5,6,7,8,9,10];
    let array = reverseArray.reverse();
    console.log(array);
}