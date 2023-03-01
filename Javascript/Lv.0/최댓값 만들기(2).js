function solution(numbers){
    const sorted = numbers.sort((a,b) => a -b);
    return Math.max(sorted[0] * sorted[1],sorted[sorted.length - 1] * sorted[sorted.length - 2 ])
}
function solution(numbers) {
    const N = numbers.length;

    numbers.sort((a,b) => a - b);

    return Math.max(
        numbers[N-1] * numbers[N-2],
        numbers[0] * numbers[1]
    )
}
