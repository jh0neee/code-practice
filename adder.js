function solution(a, b) {
    let sum = [];
    let answer = 0;
    for(let i = Math.min(a,b); i <= Math.max(a,b); i++) {
        sum.push(i);
    }
    return sum.reduce((acc,cur) => {return acc + cur}, 0)
}
console.log(solution(2,7));