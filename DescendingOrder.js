function solution(n) {
    return Number((n + '').split('')
                          .sort()
                          .reverse()
                          .reduce((sum, cur) => {return sum += cur}));
}
console.log(solution(116478));