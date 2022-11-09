function isPrime(num){
    if(num === 1) return false; // 1은 소수 아님
    if(num % 2 === 0) { // 짝수일 때, 2 제외 소수 아님
        if(num === 2) return true;
        else{
            return false;
        }
    }
    if(num % 2 !== 0){ // 홀수일 때, 제곱근보다 작은 수로 나눠지면 소수 아님
       for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false; 
        } 
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