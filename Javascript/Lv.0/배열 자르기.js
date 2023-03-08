function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}
function solution(numbers, num1, num2) {    
    return numbers.splice(num1,num2);
}

위 문제는 다음과 같다.

splice의 내부를 살펴보자면 splice(start, deleteCount) 로 구성되어있습니다. 

그리고 slice 메소드는 slice(begin, end)로 구성되어있습니다.
