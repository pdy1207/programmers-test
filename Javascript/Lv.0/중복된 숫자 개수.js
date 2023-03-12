function solution(array, n) {
    var newArr = [];
    for(let i=0; i<array.length; i++){
        if(array[i] === n){
            newArr.push(array[i])
        }         
    }
     return newArr.length;
}


function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}
