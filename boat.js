function solution(people, limit) {
    let cnt = 0;
    let first = 0, last = people.length -1;
    
    people.sort((a,b) => b-a);
    
    while(first < last){
        let boat = people[first] + people[last];
        
        if(boat > limit) first++;
        else{
            first++;
            last--;
        }
        cnt++;
    }
    if(first === last) cnt++;
    
    return cnt;
}
console.log(solution([45,60,120,270], 300));