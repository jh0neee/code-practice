function solution(A,B){
    let answer = 0;

    let sortA = A.sort((a,b)=>b-a);
    let sortB = B.sort((a,b)=>a-b);

    for(let i = 0; i < A.length; i++) {
        answer += sortA[i] * sortB[i];
    }

    return answer;
}
console.log(solution([2,1,9,3],[6,10,4,1]));