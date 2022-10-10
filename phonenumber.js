function solution(number) {
    return number.substring(0,number.length-4)
                 .replace(/[0-9]/gi,"*") 
         + number.substr(number.length-4,4);
}
console.log(solution("01027364934"));