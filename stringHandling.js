function solution(s) {
    let check =/[^0-9]/;
    if(s.length === 4 || s.length === 6) {
        return !check.test(s);
    }else{
        return false;
    }
}
console.log(solution("we2346"));
console.log(solution("2346"));
console.log(solution("12324"));
console.log(solution("112346"));