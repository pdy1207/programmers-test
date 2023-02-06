function solution(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) count += 2;
  }
  if (n % Math.sqrt(n) === 0) count += 1;
  return count;
}

function solution(n) {
    const answer = []
    for (let i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            answer.push(i)
        }
    }
    return answer.length
}
