function solution(numbers) {
    let sum = [];
    for(let i = 1; i < numbers.length; i++) {
        numbers.map((x,index)=> {
            if(index === i) return;
            else{
                sum.push(x + numbers[i]);
            }
        });
    }
    return [...new Set(sum)].sort((a,b)=>a-b);
}
console.log(solution([2,1,3,4,1]));