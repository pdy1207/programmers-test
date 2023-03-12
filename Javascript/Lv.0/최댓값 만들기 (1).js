function solution(numbers) {
  const [first, second, ...rest] = numbers.sort((a, b) => b - a);
  return first * second;
}

function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0] * numbers[1]
}
