function solution(dartResult) {
    let arr = dartResult.match(/[A-Z\*\#]|[0-9]{1,2}/g);
    let result = [];

    arr.forEach((item, idx) => { 
        if(item === 'S'){
            result.push(arr[idx-1] ** 1);
        }
        if(item === 'D'){
            result.push(arr[idx-1] ** 2);
        }
        if(item === 'T'){
            result.push(arr[idx-1] ** 3);
        }
    });

    arr.forEach((item, idx) => {
        if(item === '*' || item === '#'){
            if(arr.length-1 === 6){
                if(item === '*'){
                    if(idx === 2) result.splice(0, 1, result[0] * 2);
                    if(idx === 4) result.splice(0, 2, result[0] * 2, result[1] * 2);
                    if(idx === 6) result.splice(1, 2, result[1] * 2, result[2] * 2);
                }else{
                    if(idx === 2) result.splice(0, 1, result[0] * (-1));
                    if(idx === 4) result.splice(1, 1, result[1] * (-1));
                    if(idx === 6) result.splice(2, 1, result[2] * (-1));
                }
            }
            if(arr.length-1 === 7){
                if(item === '*'){
                    if(idx === 2 && arr[5] === '*' ) result.splice(0, 3, result[0] * 2 * 2, result[1] * 2, result[2]);   
                    if(idx === 2 && arr[7] === '*') result.splice(0, 3, result[0] * 2, result[1] * 2, result[2] * 2);  
                    if(idx === 4 && arr[7] === '*' ) result.splice(0, 3, result[0] * 2, result[1] * 2 * 2, result[2] * 2);

                    if(idx === 2 && arr[5] === '#' ) result.splice(0, 2, result[0] * 2, result[1] * (-1));   
                    if(idx === 2 && arr[7] === '#') result.splice(0, 3, result[0] * 2, result[1], result[2] * (-1));  
                    if(idx === 4 && arr[7] === '#' ) result.splice(0, 3, result[0] * 2, result[1] * 2, result[2] * (-1));
                }else{
                    if(idx === 2 && arr[5] === '#' ) result.splice(0, 2, result[0] * (-1), result[1] * (-1));   
                    if(idx === 2 && arr[7] === '#') result.splice(0, 3, result[0] * (-1), result[1], result[2] * (-1));  
                    if(idx === 4 && arr[7] === '#' ) result.splice(0, 3, result[0], result[1] * (-1), result[2] * (-1));

                    if(idx === 2 && arr[5] === '*' ) result.splice(0, 2, result[0] * (-1) * 2, result[1] * 2);   
                    if(idx === 2 && arr[7] === '*') result.splice(0, 3, result[0] * (-1), result[1] * 2, result[2] * 2);  
                    if(idx === 4 && arr[7] === '*' ) result.splice(0, 3, result[0], result[1] * (-1) * 2, result[2] * 2);
                }   
            }
            if(arr.length-1 === 8){
                 if(item === '*'){
                    if(idx === 2 && arr[5] === '*' && arr[8] === '*') result.splice(0, 3, result[0] * 2 * 2, result[1] * 2 * 2, result[2] * 2);
                    if(idx === 2 && arr[5] === '#' && arr[8] === '*') result.splice(0, 3, result[0] * 2, result[1] * (-1) * 2, result[2] * 2); 
                    if(idx === 2 && arr[5] === '*' && arr[8] === '#') result.splice(0, 3, result[0] * 2 * 2, result[1] * 2, result[2] * (-1)); 
                    if(idx === 2 && arr[5] === '#' && arr[8] === '#') result.splice(0, 3, result[0] * 2, result[1] * (-1), result[2] * (-1));
                 }
                if(item === '#'){
                    if(idx === 2 && arr[5] === '#' && arr[8] === '#') result.splice(0, 3, result[0] * (-1), result[1] * (-1), result[2] * (-1));
                    if(idx === 2 && arr[5] === '*' && arr[8] === '#') result.splice(0, 3, result[0] * (-1) * 2, result[1] * 2, result[2] * (-1)); 
                    if(idx === 2 && arr[5] === '#' && arr[8] === '*') result.splice(0, 3, result[0] * (-1), result[1] * (-1) * 2, result[2] * 2);
                    if(idx === 2 && arr[5] === '*' && arr[8] === '*') result.splice(0, 3, result[0] * (-1) * 2, result[1] * 2 * 2, result[2] * 2);
                }
            }
        }
    });
    return result[0] + result[1] + result[2];
}
console.log(solution('3T#10S*5T*'));