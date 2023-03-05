function solution(n) {
  const getLCM = (a, b) => {
    let lcm = 1;
    while ((lcm % a !== 0 || lcm % b !== 0) && lcm < a * b) lcm += 1;
    return lcm;
  };

  return getLCM(n, 6) / 6;
}
function solution(n) {
    let pizza = 1;
    while (pizza * 6 % n) {
        pizza++;
    }
    return pizza;
}
