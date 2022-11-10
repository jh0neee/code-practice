function solution(n) {
    let answer = "";
    n = n + "";
    let emptyArray = [];
    for (let i = 0; i < n.length; i++) {
        emptyArray.push(n[i]);
    }
    for (let j = 0; j < emptyArray.length; j++) {
        if (emptyArray[j] < emptyArray[j+1]) {
            let temp = emptyArray[j];
            emptyArray[j] = emptyArray[j+1];
            emptyArray[j+1] = temp;
            j = -1;
        }
    }
    for (let k = 0; k < emptyArray.length; k++) {
        answer += emptyArray[k];
    }
    answer = Number(answer);
    return answer;
}
console.log(solution(116478));