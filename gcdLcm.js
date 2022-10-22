function solution(n, m) {
    let answer = [];
    let gcd, lcm = 0;

    for(let i = 1; i <= m; i++){
        if(n % i === 0 && m % i === 0) gcd = Math.max(i);
        lcm = n * m / gcd;
    }
    answer.push(gcd, lcm);
    return answer;
}
console.log(solution(18,42));