function solution(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s[0] === ')') return false;
        else if(s[i] === '(') stack.push('(');
        else{
            if(stack[stack.length-1] === '(') stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}
console.log(solution("(()()()((()"));