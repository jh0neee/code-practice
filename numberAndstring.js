// 숫자 문자열과 영단어
function solution(s) {
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = '';
    let alphanum = '';
    for(let i = 0; i < s.length; i++){
        let str_s = s[i].match(/[a-z]/gi);
        if(str_s === null) {
            result += s[i];
        }else {
            alphanum += s[i];
            if(number.includes(alphanum)) {
                result += number.indexOf(alphanum);
                alphanum = "";
            }
        }                      
    }
    return Number(result);
}
console.log(solution("one346zerofivenine"));