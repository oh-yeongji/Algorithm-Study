function solution(array) {
  let answer = 0;
  const newObject = {};

  array.forEach((item) => {
  // 오브젝트에 배열의 값을 key에 하나하나 담으면서 
  // 중복될 경우 value에 기존값+1을,
  // 중복되지 않았을 경우 value에 1을 넣는다.
  newObject[item] ? (newObject[item] += 1) : (newObject[item] = 1);
  });


  const findMax = Math.max(...Object.values(newObject));
  

  const findNumber = Object.keys(newObject).filter(
    (i) => newObject[i] === findMax
  );

  answer = findNumber.length === 1 ? parseInt(findNumber[0]) : -1;

  return answer;
}
