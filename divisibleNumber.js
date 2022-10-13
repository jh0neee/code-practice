function solution(arr, divisor) {
    let answer = [];
    arr.map((x) => {
        if (x % divisor === 0){
            if(Number.isInteger(x)) answer.push(x);
        }
    });
    return answer.length == 0 ? [-1] : answer.sort((a,b) => {return a-b});
    
}
console.log(solution([3,5,2,34,19,20], 2));
console.log(solution([3,5,19], 2));
