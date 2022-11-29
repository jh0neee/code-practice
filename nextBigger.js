function solution(n) {
    let cnt = n.toString(2).split('1').length-1;
    let answer = 0;

    for(let i = n+1; i > n; i++){
        if(cnt === i.toString(2).split('1').length-1){
            answer = i
            break;
        }
    }
    return answer;
}
console.log(solution(42));