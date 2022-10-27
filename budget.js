function solution(d, budget) {
    let result = 0, cnt =0;
    
    d.sort((a,b)=>a-b).forEach(elem => {
        result += elem;
        if(result == budget){
            cnt++;
            return cnt;
        }else if(result > budget){
            return cnt;
        };
        cnt++;
    });
    return cnt;
}
console.log(solution([7, 3, 1, 4, 3], 11));