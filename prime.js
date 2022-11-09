function solution(n) {
    let answer = 0;
    let notPrime = [];
    for(let i=2; i <= n; i++){
        for(let j=2; j < i; j++){
            if(i%j === 0) notPrime.push(i);
            notPrime = [...new Set(notPrime)];
        }        
    }
    for(let k = 2; k <= n; k++){
        if(!notPrime.includes(k)) answer++;
    }
    return answer;

} 
console.log(solution(55));