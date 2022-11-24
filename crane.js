function solution(board, moves) {
    let box = [];
    let answer = 0;

    for(let i = 0; i < moves.length; i++) {
        for(let j= 0; j < board.length; j++){
            if(board[j][moves[i]-1] === 0) continue;
            else{
                box.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
        if(box[box.length-1] !== undefined && box[box.length-2] === box[box.length-1]){
            box.pop();
            answer++;
            box.pop();
            answer++;
        }
    }
    return answer;
}
console.log(solution([[0,0,0,0],[0,0,0,1],[0,1,1,1],[1,1,1,1]],[1,4,3,2]));