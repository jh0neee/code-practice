function solution(s) {
    let answer = s.split(' ');
    let result = [];
    for(let i = 0; i < answer.length; i++) {
        let sum = '';
        for(let j = 0; j < answer[i].length; j++) {
            if(j % 2 === 0) {
                sum += answer[i][j].toUpperCase();
            }else {
                sum += answer[i][j].toLowerCase();
            }
        }
       result.push(sum);
    }
    return result.join(" ");
}
console.log(solution("try hello world"));
console.log(solution("abc abcd abcde"));
console.log(solution("  tRy hello  WORLD    "));