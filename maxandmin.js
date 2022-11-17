function solution(s) {
    let answer = '', arrNum = [];
    s.split(' ').forEach(elem => {
        arrNum.push(Number(elem));
    });
    answer = `${Math.min(...arrNum)} ${Math.max(...arrNum)}`;
    return answer;
}
console.log(solution([2,3,-5,10,-8]));