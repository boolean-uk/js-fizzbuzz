// TODO: Write your function in this file
function fizzBuzz(lower,upper) {
    let fizzBuzzArray=[];
    let size=upper-lower;
    size=size+1;
    console.log(size);
    let divisorObject={
        firstDivisor:{
            divisorValue:3,
            divisorString:'Fizz'
        },
        secondDivisor:{
            divisorValue:5,
            divisorString:'Buzz'
        }
     
    }
    const firstDiv=divisorObject.firstDivisor.divisorValue;
    const firstDivStr=divisorObject.firstDivisor.divisorString;
    const secondDiv=divisorObject.secondDivisor.divisorValue;
    const secondDivStr=divisorObject.secondDivisor.divisorString;

   for (let i=0; i<size; i++){
        fizzBuzzArray[i]=lower;
        lower++;
        if(fizzBuzzArray[i]%firstDiv==0&&fizzBuzzArray[i]%secondDiv!=0){
            fizzBuzzArray[i]=firstDivStr;
        }else if(fizzBuzzArray[i]%secondDiv==0&&fizzBuzzArray[i]%firstDiv!=0){
            fizzBuzzArray[i]=secondDivStr;
        }else if(fizzBuzzArray[i]%firstDiv==0&&fizzBuzzArray[i]%secondDiv==0){
            fizzBuzzArray[i]=firstDivStr+secondDivStr;
        }
console.log(i+":"+fizzBuzzArray[i]);

   }
   return fizzBuzzArray;
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
