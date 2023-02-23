function solution(my_string, num1, num2) {
    const arr = my_string.split('');
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;
    return arr.join('');
}

function solution(my_string, num1, num2) {
  const str = [...my_string];

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join('');
}
