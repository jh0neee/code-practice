function solution(n) {
    let num = Math.sqrt(n);
    return Number.isInteger(num) ? (num+1)**2 : -1; 
}


console.log(solution(121));