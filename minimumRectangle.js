function solution(sizes) {
    let arr1 =[];
    let arr2 = [];
    for(let i = 0; i < sizes.length; i++){
        arr1.push(Math.max(sizes[i][0],sizes[i][1]));
        arr2.push(Math.min(sizes[i][0],sizes[i][1]));
    }
    return Math.max(...arr1) * Math.max(...arr2);
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))