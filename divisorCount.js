function solution(left, right) {
    let sum = 0;
    for(let i = left; i <= right; i++){
        let num_count = 0; // 약수의 개수 초기화
        for(let j = 1; j <= right; j++){
            if(i % j === 0) num_count++; // 약수이면 count + 1
        }
        num_count % 2 === 0 ? sum += i : sum -= i; // 개수가 짝이면 + 홀이면 -
    }
    return sum;
}
console.log(solution(10,18));