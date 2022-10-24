function solution(arr)
{
    let answer = [arr[0]];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    // for(let i = 1; i < arr.length; i++){
    //     if(answer[answer.length-1] !== arr[i]) {
    //         answer.push(arr[i]);
    //     }
    }
    return answer;
}
console.log(solution([1,3,4,2,2,2,6,6,7,9,9,9]));