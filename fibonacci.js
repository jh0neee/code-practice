function solution(n) {
    let result = [];
    
    // F(0) = 0, F(1) = 1
    result[0] = 0;
    result[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        result[i] = (result[i-1] + result[i-2]) % 1234567;
    }
    
    return result[n] % 1234567;
}
console.log(solution(78));