function solution(participant, completion) {
    participant = participant.sort();
    completion = completion.sort();

    return participant.find((elem, idx) => {
        if(elem !== completion[idx]) return elem;
    });
}
console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));