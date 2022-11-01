function solution(array, commands) {
    let sliceSort = [];
    let answer = [];
    for(let i = 0; i < commands.length; i++){
        sliceSort = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b);
        answer.push(sliceSort[commands[i][2]-1]);
    }
    return answer;
}
console.log(solution([1,3,10,9,2,4,25,7], [[2,4,3], [4,8,2]]));