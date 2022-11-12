function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i]*numbers[j]);
        }
    } 
    return Math.max(...answer);
    
}
console.log(solution([1,4,2,4,6,3,4,3]));