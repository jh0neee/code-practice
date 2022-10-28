function solution(s, n) {
    let code = 0;
    return s.split('') // 문자열 자르기
            .map(x => { 
                code = x.charCodeAt(); // 문자열  >  아스키코드
                if(code === 32) { // 공백이면 그대로 공백으로 저장
                    code = 32;
                }else if(code >= 65 && code <= 90) {  // ASCIIcode 대문자 범위이고
                    if(code + n > 90) {  // 거리 더한 값이 90(Z)을 넘으면
                        code = 65 + (code + n - 90) - 1  // 다시 A부터 돌아가서 거리 더해주기
                    }else{
                        code = code + n // 아니면 아스키코드 값 + 거리
                    };
                }else if(code >= 97 && code <= 122) { // ASCIIcode 소문자 범위이고
                    if(code + n > 122) { // 거리 더한 값이 122(z)를 넘으면
                        code = 97 + (code + n - 122) - 1 // 다시 a부터 돌아가서 거리 더해줌
                    }else{
                        code = code + n // 아니면 아스키코드 값 + 거리
                    };
                }
                return code; // [ code, code, ...]
            }).map(x => {  // 아스키코드 > 문자열
                return String.fromCharCode(x);
            }).join(''); // 문자열 join 
}
console.log(solution("R", 14));
console.log(solution("R   w", 8));
console.log(solution("aBcD", 5));