function solution(N, stages) {
    let answer = [];
    for(let i = 1; i <= N; i++){
        let all = stages.filter(x => x >= i).length;
        let curr = stages.filter(x => x === i).length;
        answer.push([curr/all, i]);
    }
    answer.sort((a,b) => b[0]-a[0]);
    return answer.map(x => x[1]);
}
console.log(solution(7, [2,3,1,1,3,6,8,5]));