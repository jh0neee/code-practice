function solution(food) {
    let str_food = '';
    let result = ['0'];

    for(let i = food.length-1; i >= 1; i--) {
        if(food[i] % 2 !== 0) {
            if(food[i] === 1) continue;
            str_food = String(i).repeat((food[i]-1)/2);
            result.push(str_food);
            result.unshift(str_food);
        }else{
            str_food = String(i).repeat(food[i]/2);
            result.push(str_food);
            result.unshift(str_food);
        }
    }
    return result.join('');
}
console.log(solution([1,4,3,8,9,5,6]));