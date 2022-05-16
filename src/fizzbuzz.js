// TODO: Write your function in this file
function fizzBuzz(lower,upper) {
    let newArray=[];
    let size=upper-lower;
    size=size+1;
    console.log(size);
    
   for (let i=0; i<size; i++){
        newArray[i]=lower;
        lower++;
        if(newArray[i]%3==0&&newArray[i]%5!=0){
            newArray[i]='Fizz';
        }else if(newArray[i]%5==0&&newArray[i]%3!=0){
            newArray[i]='Buzz';
        }else if(newArray[i]%5==0&&newArray[i]%3==0){
            newArray[i]='FizzBuzz';
        }
console.log(i+":"+newArray[i]);

   }
   return newArray;
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz;
