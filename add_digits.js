function solution(n)
{
    //console.log(typeof(n));
    const number = n.toString().split('');
    const answer = number.reduce((sum, cur) => { return sum += parseInt(cur); }, 0);

    return answer;
}

console.log(solution(123));