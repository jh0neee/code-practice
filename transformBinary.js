function solution(s) {
    let cnt = 0, zero = 0;
    
    do {
        zero += s.split('0').length-1;
        s = s.replace(/0/g, '').length.toString(2);
        cnt++;
    } while( s !== "1")
        
    return [cnt, zero];
}
console.log(solution("10101011011101"));