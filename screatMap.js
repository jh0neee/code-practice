function solution(n, arr1, arr2) {
    
    let a = arr1.map(x => x.toString(2));
    let b = arr2.map(x => x.toString(2));
    let sum = '';
    let result = [];
    for(let i = 0; i < n; i++) {
        
        sum = [...String(Number(a[i]) + Number(b[i]))];
        for(let j = 0; j < n; j++){
            if(sum[j] === '1' || sum[j] === '2') {
                sum[j] = '#';
            }
            else if(sum[j] === '0'){
                sum[j] = ' ';
            }
            else {
                sum.unshift(' ');
            }
        };
        result.push(sum.join(''));
    }
    return result;
}
console.log(solution(4, [12,3,10,9], [7,15,4,13]));