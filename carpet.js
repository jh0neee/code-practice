function solution(brown, yellow) {
    let divisor = [];

    for(let i = 1; i <= yellow; i++){
        if(yellow % i === 0) divisor.push(i); 
    }

    for(let j = 0; j < divisor.length; j++){
        let w = divisor[j]; 
        let h = yellow / divisor[j];

        if (2 * (w + h) + 4 === brown && w >= h) return [w + 2, h + 2]
    }
}
console.log(solution(16,8));