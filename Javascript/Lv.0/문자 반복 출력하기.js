function solution(my_string, n) {
  return [...my_string].map(char => char.repeat(n)).join('');
}


function solution(my_string, n) {
    let answer = ''
    for (const i of my_string.split('')) {
        answer += i.repeat(n)
    }
    return answer
}
