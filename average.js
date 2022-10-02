    arr = [5,5];

    const sum = arr.reduce((sum, cur) => {
        return sum += cur 
    } , 0)

    const result = sum / arr.length;
    console.log(result);

