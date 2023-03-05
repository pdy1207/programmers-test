function solution(age) {
  return [...('' + age)].map(num => String.fromCharCode('a'.charCodeAt(0) + +num)).join('');
}

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}
