// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수를 완성해주세요.
function EvenandOdd(num) {
    return num % 2 ? "Odd" : "Even"
}
console.log(EvenandOdd(4));
console.log(EvenandOdd(27));


// 삼항연산자
// 조건 ? Truthy : Falsy
// Falsy : false , 0 , -0 , 0n, "", null, undefined, NaN
// num을 2로 나눈 나머지가 0이면 짝수
// num % 2 가 0 이면 = num을 2로 나눈 나머지가 "0"이면 Falsy
