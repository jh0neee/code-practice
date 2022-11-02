// 숫자 문자열과 영단어
function solution(s) {
    const number = {
        0 : 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 
        5 : 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    };
        for (const [key, value] of Object.entries(number)) {
            let regex = new RegExp(value, "g");
	        s = s.replace(regex, key); 
        }
        return Number(s);
}
console.log(solution("one346zerofivenine"));