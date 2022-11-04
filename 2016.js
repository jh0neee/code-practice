function solution(a, b) {
    let curday = new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
    return curday;
}
console.log(solution(2,6));