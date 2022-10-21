function solution(price, money, count) {
    let cnt_price = (count * (count + 1) / 2) * price;
    return cnt_price < money ? 0 : cnt_price - money ;
}
console.log(solution(3, 20, 5));
console.log(solution(20, 100, 1));