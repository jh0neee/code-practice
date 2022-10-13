function solution(absolutes, signs) {
    let value = 0;
    for(let i = 0; i < signs.length; i++){
        signs[i] ? value += absolutes[i] : value -= absolutes[i];
    }
    return value;
}
console.log(solution([3,65,43], [false,true,false]));