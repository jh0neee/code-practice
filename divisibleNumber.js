function solution(arr, divisor) {
    let answer = [];
    let minus = [-1];
    arr.map((x) => {
        if (x % divisor === 0){
            if(Number.isInteger(x)) answer.push(x);
        }
    });
    answer.length === 0 ? answer.push(-1) : answer.sort((a,b) => {return a-b});
    return answer;
}
console.log(solution([3,5,2,34,19,20], 2));
console.log(solution([3,5,19], 2));
