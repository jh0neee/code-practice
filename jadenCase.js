function solution(s) {
    let upperArr = [];
    let arrStr = s.toLowerCase().split(' ');

    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i].match(/[a-z]/) === null){
            upperArr.push(' ');
        }else{
            if(i !== 0){
                upperArr.push(' ');
            }
            arrStr[i][0].match(/[a-z]/) === null ? 
                upperArr.push(arrStr[i]) : 
                upperArr.push(arrStr[i].replace(arrStr[i][0],arrStr[i][0].toUpperCase()));
        }
    }
   return upperArr.join('');
}
console.log(solution("Hello, my name is boby"));