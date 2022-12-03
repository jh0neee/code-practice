function solution(s){
    let stack = [];

    stack.push(s[0]);

    for(let i = 1; i < s.length; i++){
        s[i] !== stack[stack.length-1] ? stack.push(s[i]) : stack.pop();
    }
    return stack.length === 0 ? 1 : 0;
}
console.log(solution('bbbaab'));