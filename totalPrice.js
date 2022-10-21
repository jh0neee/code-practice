function solution(price, money, count) {
    let cnt_price = 0;
    for(let i = 1; i <= count; i++) {
        cnt_price += price * i
    }
    return cnt_price < money ? 0 : cnt_price - money ;
}
console.log(solution(3, 20, 5));
console.log(solution(20, 100, 1));