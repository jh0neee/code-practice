function solution(sides) {
    let max_t = Math.max(...sides);
    let min_t = Math.min(...sides);
    let result = 0;
    for (let i = 1; i <= max_t; i++) {
        if (i > max_t - min_t) result++;
    }
    for (let j = max_t + 1; j < max_t + min_t; j++) {
        if (j < max_t + min_t) result++;
    }
    return result;
}
console.log(solution([4,18]));
