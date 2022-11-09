function isPrime(num){
    if(num === 1) return false;
       for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false; 
        } 
    return true;
}
function solution(n) {
    let answer = 0
    for(let i = 1; i <= n; i++){
       if(isPrime(i)) answer++;
    }
    return answer;
} 

console.log(solution(55));