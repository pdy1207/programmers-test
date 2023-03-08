function solution(num, k) {
  const index = [...('' + num)].findIndex(n => +n === k);
  return index === -1 ? -1 : index + 1;
}
순한맛 버전

function solution(num, k) {
    var answer = num.toString()
    if (answer.includes(k)) {
        return answer.indexOf(k) + 1;
    } else {
        return -1;
    }
}
