function solution(s, n) {
    let unicode = 0;
    return s.split('') // 문자열 자르기
            .map(x => { 
                unicode = x.charCodeAt(); // 문자열  >  유니코드
                if(unicode === 32) { // 공백이면 그대로 공백으로 저장
                    unicode = 32;
                }else if(unicode >= 65 && unicode <= 90) {  // unicode 대문자 범위이고
                    if(unicode + n > 90) {  // 거리 더한 값이 90(Z)을 넘으면
                        unicode = 65 + (unicode + n - 90) - 1  // 다시 A부터 돌아가서 거리 더해주기
                    }else{
                        unicode = unicode + n // 아니면 유니코드 값 + 거리
                    };
                }else if(unicode >= 97 && unicode <= 122) { // unicode 소문자 범위이고
                    if(unicode + n > 122) { // 거리 더한 값이 122(z)를 넘으면
                        unicode = 97 + (unicode + n - 122) - 1 // 다시 a부터 돌아가서 거리 더해줌
                    }else{
                        unicode = unicode + n // 아니면 유니코드 값 + 거리
                    };
                }
                return unicode; // [ 유니코드, 유니코드, ...]
            }).map(x => {  // 유니코드 > 문자열
                return String.fromCharCode(x);
            }).join(''); // 문자열 join 
}
console.log(solution("R", 14));
console.log(solution("R   w", 8));
console.log(solution("aBcD", 5));