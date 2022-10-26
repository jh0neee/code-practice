function solution(n) {
    let answer = 0;
    let result = [...n.toString(3)].reverse(); // 3진법으로 바꾸고 반전
    for(let i = 0; i < result.length; i++) {
        answer += result[i] * (3 ** (result.length-1 - i)); // 반전 3진법 -> 10진법
    }
    return answer;
}    
console.log(solution(45));    

    // do{ 10진법 -> 3진법
    //     result.unshift(n % 3);
    //     n = Math.floor(n / 3);
    // } while(n > 0)