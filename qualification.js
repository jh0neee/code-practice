function solution(data) {
  // [' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -']
  // + > 1 , - > 0 & 공백 삭제
  // 2진수 -> 10진수로
  // 10진수 -> 아스키코드

  let newData = [];

  data.map((str) => {
    const newStr = str.replace(/\s/g, ""); // 모든 공백 제거
    const numPlus = newStr.replace(/\+/g, 1); // + => 1
    const numMinus = numPlus.replace(/\-/g, 0); // - => 0
    const unicode = parseInt(numMinus, 2); // 이진수 => 십진수

    // const newStr = str.replace(/\s/g,'');
    // for(let el of newStr) {
    //   if(el === '+') number.push(1);
    //   else number.push(0);
    // }
    // const unicode = parseInt(number.join(''), 2);

    newData.push(String.fromCharCode(unicode));
  });
  return newData.join("");
}
