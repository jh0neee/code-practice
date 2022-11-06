function solution(answers) {
    let max = answers.length;
    let n1 = '12345'.repeat(2000).split('');
    let n2 = '21232425'.repeat(1250).split('');
    let n3 = '3311224455'.repeat(1000).split('');
    
    let cnt = [0,0,0]
    let answer = [];
    
    for(let i = 0; i < answers.length; i++){
        if(n1[i] == answers[i]) cnt[0]++;
        if(n2[i] == answers[i]) cnt[1]++;
        if(n3[i] == answers[i]) cnt[2]++;
    }
    
    let mx = Math.max(...cnt);
    
    for(let j = 0; j < 3; j++){
        if(mx === cnt[j]) answer.push(j+1); 
    }
    
    return answer;
}
console.log(solution([1,3,4,2,3]));