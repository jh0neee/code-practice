function solution(s) { // s : abc abcd abcde
    let answer = s.split(' '); // answer : [ 'abc', 'abcd', 'abcde' ]
    let result = []; // result : [](빈 배열)
    for(let i = 0; i < answer.length; i++) { // i : 0, 1, 2
        let sum = ''; // sum : ''(빈 문자열)
        for(let j = 0; j < answer[i].length; j++) { // j : 0 ~ answer 각 인덱스 내의 요소 길이. answer[2]의 경우, j : 0, 1, 2, 3, 4
            if(j % 2 === 0) { // j가 짝수이면, 대문자로
                sum += answer[i][j].toUpperCase(); 
            }else { // j가 홀수이면, 소문자로
                sum += answer[i][j].toLowerCase();
            }
            // sum : Abc Abcd AbCdE
        }
        result.push(sum); // result : ['AbC', 'AbCd', 'AbCdE' ]
    }
    return result.join(" "); // result : "AbC AbCd AbCdE"
}
console.log(solution("try hello world"));
console.log(solution("abc abcd abcde"));
console.log(solution("  tRy hello  WORLD    "));