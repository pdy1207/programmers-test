function solution(my_string) {
    var answer = '';
    answer = my_string.toLowerCase().split('').sort().join('');
    console.log(answer)
    return answer;
}
// function solution(my_string) {
//     return my_string.toLowerCase().split('').sort().join('');
// }



