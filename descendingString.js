function solution(s) {
    let answer = '';
    answer = s.match(/[a-zA-Z]/g).sort().reverse().join("");
    return answer;
}
console.log(solution("EwNDucsVOm"));