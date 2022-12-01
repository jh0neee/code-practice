function solution(n, words) {
    let result = [];
    let cnt = 0;


    for(let i = 0; i < words.length; i++){
        // 차례 count
        if(i % n === 0) cnt++;

        // 중복된 단어일 경우
        if(result.includes(words[i]) === false){
            result.push(words[i]);
        }else{
            return [(i % n) + 1, cnt];
        }

        // 끝말과 첫말이 다른 경우
        if(i >= 1){
            let alpha = words[i-1].length - 1
            if(words[i-1][alpha] !== words[i][0]) return [(i % n) + 1, cnt];
        }

        // 탈락자 없는 경우
        if(result.length === words.length) return [0, 0];
    }
}
console.log(solution(3 ,["hello", "observe", "effect", "take", "neither", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))