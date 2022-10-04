function solution(n) {
    const answer = [];
    const num = n.toString().split(''); // 숫자 -> 문자열
    for(let i = num.length-1; i >= 0; i--) { // 4 부터 0 까지. 인덱스는 0부터 시작이니까.
        answer.push(parseInt(num[i])); // 문자열 -> 숫자 후 배열 안으로 push
    }
    return answer;
    
}

console.log(solution(12345));