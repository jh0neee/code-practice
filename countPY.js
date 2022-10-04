function solution(s){
    s = s.toUpperCase().split('');
    let result_P = s.filter( a => a === 'P' ).length; 
    let result_Y = s.filter( a => a === 'Y' ).length;
    return result_P == result_Y;
}
console.log(solution('pptpfyydPadY')); // false