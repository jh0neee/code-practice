function solution(s){
    s = s.toUpperCase().split('');
    let result_P = s.filter( a => a === 'P' ).length;
    let result_Y = s.filter( a => a === 'Y' ).length;
    if ( result_P == result_Y ) {
        return true;
    } else {
        return false;
    }
}
console.log(solution('pptpfyydPadY'));