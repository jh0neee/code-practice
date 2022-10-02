 function solution(arr) {
        var sum = 0;
        for(var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        var result = sum / arr.length;
        return result;
    }

    console.log(solution([1,2,3,4]));



