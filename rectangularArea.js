function solution(dots) {
    let w = 0, h = 0;
    for(let i = 0; i <= dots.length-1; i++){
        if(dots[0][0] == dots[i][0]){
            h = dots[i][1] - dots[0][1];
            if(h < 0) h = Math.abs(h);
        }
        if(dots[0][1] == dots[i][1]){
            w = dots[i][0] - dots[0][0];
            if(w < 0) w = Math.abs(w);
        }
    }
    return w * h;
}
console.log(solution([[2,3],[3,2],[2,2],[3,3]]))