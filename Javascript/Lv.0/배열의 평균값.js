function solution(numbers) {
    var answer = 0;
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i]; //배열의 요소들을 하나씩 더한다
    }
    return answer = sum / numbers.length; //더한 값과 배열의 길이 (=요소 갯수)를 나눈다.
}

// reduce 사용하기 

function solution(numbers){
    return numbers.reduce((sum,current) => sum + current) / numbers.length;
}
