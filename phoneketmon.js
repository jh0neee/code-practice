function solution(nums) {
    let answer = 0, b = [];

    for(let i =0; i < nums.length; i++) {
        if(b.includes(nums[i])) {
            continue;
        }
        b.push(nums[i]);
        if(b.length === (nums.length)/2) break;
    }
    return b.length 
}
console.log(solution([1,1,3,2,4,3]));