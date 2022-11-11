function isPrime(x) {
    if(x === 1) return false;
    if(x % 2 === 0){
        if(x === 2) return true;
        return false;
    }else{
     for(let i = 2; i <= Math.sqrt(x); i++){
        if(x % i === 0) return false;
     }
     return true;   
    }
}
function solution(nums) {
    let answer = 0;
    for(let i = 0; i < nums.length-2; i++){
        for(let j = i+1; j < nums.length-1; j++){
            for(let k = j+1; k < nums.length; k++){
                    if((isPrime(nums[i]+nums[j]+nums[k]))) answer++;
            }
        }
    }
    return answer;
}
console.log(solution([1,3,5,6,4,7]));