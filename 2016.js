function solution(a, b) {
    let dayweek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let curday = new Date(2016, a-1, b).getDay();
    return dayweek[curday];
}
console.log(solution(2,6));