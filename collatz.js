function solution(num) {
    let cnt = 0;
    do{
         if(num === 1) {
            cnt = 0;
        }
        else if(num % 2 === 0) {
            num = num / 2;
            cnt++;
        }
        else if(num % 2 === 1){
            num = num * 3 + 1;
            cnt++;
        }
    } while(num > 1)

    return cnt < 500 ? cnt : -1
}
console.log(solution(6));