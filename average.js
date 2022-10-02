function solution(arr) {
    let sum = 0; 
    arr.forEach(n => { sum += n; });
    return sum / arr.length;
}

    console.log(solution([1,2,3,4]));



