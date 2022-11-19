function solution(A,B){
    // A배열 제일 큰 수 * B배열 제일 작은 수 ... A배열 제일 작은 수 * B배열 제일 큰 수

    let answer = 0;

    // A배열 내림차순, B배열 오름차순
    let sortA = A.sort((a,b)=>b-a);
    let sortB = B.sort((a,b)=>a-b);

    // 배열 길이만큼 for문 돌려서 배열 값 곱하여 return 
    for(let i = 0; i < A.length; i++) {
        answer += sortA[i] * sortB[i];
    }

    return answer;
}
console.log(solution([2,1,9,3],[6,10,4,1]));