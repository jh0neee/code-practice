function solution(numbers, hand) {
    let dist2 = { 1: 1, 2: 0, 3: 1, 4: 2, 5: 1, 6: 2, 7: 3, 8: 2, 9: 3, 0: 3 };
    let dist5 = { 1: 2, 2: 1, 3: 2, 4: 1, 5: 0, 6: 1, 7: 2, 8: 1, 9: 2, 0: 2 };
    let dist8 = { 1: 3, 2: 2, 3: 3, 4: 2, 5: 1, 6: 2, 7: 1, 8: 0, 9: 1, 0: 1 };
    let dist0 = { 1: 4, 2: 3, 3: 4, 4: 3, 5: 2, 6: 3, 7: 2, 8: 1, 9: 2, 0: 0 };
    let answer = '';
    let lastR = 0, lastL = 0;
    numbers.forEach((elem) => {
        if (elem === 1 || elem === 4 || elem === 7) {
            answer += 'L';
            lastL = elem;
        }
        else if (elem === 3 || elem === 6 || elem === 9) {
            answer += 'R';
            lastR = elem;
        }
        else {
            if (elem === 2) {
                if (dist2[lastL] == dist2[lastR]) {
                    if (hand === "left") {
                        answer += "L";
                        lastL = elem;
                    } else {
                        answer += "R";
                        lastR = elem;
                    }
                } else {
                    if (dist2[lastL] > dist2[lastR]) {
                        answer += "R";
                        lastR = elem
                    } else {
                        answer += "L";
                        lastL = elem;
                    }
                }
            } else if (elem === 5) {
                if (dist5[lastL] == dist5[lastR]) {
                    if (hand === "left") {
                        answer += "L";
                        lastL = elem;
                    } else {
                        answer += "R";
                        lastR = elem;
                    }
                } else {
                    if (dist5[lastL] > dist5[lastR]) {
                        answer += "R";
                        lastR = elem
                    } else {
                        answer += "L";
                        lastL = elem;
                    }
                }
            } else if (elem === 8) {
                if (dist8[lastL] == dist8[lastR]) {
                    if (hand === "left") {
                        answer += "L";
                        lastL = elem;
                    } else {
                        answer += "R";
                        lastR = elem;
                    }
                } else {
                    if (dist8[lastL] > dist8[lastR]) {
                        answer += "R";
                        lastR = elem
                    } else {
                        answer += "L";
                        lastL = elem;
                    }
                }
            } else if (elem === 0) {
                if (dist0[lastL] == dist0[lastR]) {
                    if (hand === "left") {
                        answer += "L";
                        lastL = elem;
                    } else {
                        answer += "R";
                        lastR = elem;
                    }
                } else {
                    if (dist0[lastL] > dist0[lastR]) {
                        answer += "R";
                        lastR = elem
                    } else {
                        answer += "L";
                        lastL = elem;
                    }
                }
            }
        }
    })
    return answer;
}
console.log(solution([5,2,1,6,4,0,8,5,9]));