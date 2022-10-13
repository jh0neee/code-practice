function solution(arr) {
    let answer = arr.filter(num => num !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer;
}
console.log(solution([4,49,34,2,99,7,43]));