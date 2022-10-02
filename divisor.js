function solution(n) {
    var answer = [];
    for(let i = 0; i <= n; i++){
        if(n % i == 0) { answer.push(i); }
    }
    let sum = answer.reduce((sum, cur) => { return sum += cur; }, 0)
    return sum;
}

console.log(solution(12));