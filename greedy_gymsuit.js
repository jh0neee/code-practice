function solution(n, lost, reserve) {
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);

    const dupl = lost.filter(elem => reserve.includes(elem));
    let cnt = n - lost.length + dupl.length;

    const losted = lost.filter(elem => !dupl.includes(elem));
    const reserved = reserve.filter(elem => !dupl.includes(elem));

    for(let i of losted){
        if(reserved.includes(i - 1)){
            cnt++;
            reserved.splice(reserved.indexOf(i-1),1);
        }else{
            if(reserved.includes(i + 1)){
                cnt++;
                reserved.splice(reserved.indexOf(i+1),1);
            }
        }
    }
    return cnt;
}
console.log(solution(8, [1,4,5,4,2,7], [6,3,2,8]));