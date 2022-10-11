function solution(seoul) {
    let xindex = seoul.findIndex(x => x == 'Kim');
    return `김서방은 ${xindex}에 있다`;
}
console.log(solution(['jim', 'Kelly', 'telp', 'Kim', 'Han', 'Ferry', 'Kil']));