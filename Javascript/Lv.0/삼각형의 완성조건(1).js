function solution(sides) {
  const max = Math.max(...sides);
  return max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
}


function solution(sides) {
    var answer = 0;
    sides = sides.sort(function(a,b){return b-a;});
    return sides[0] < sides[1]+sides[2] ? 1 : 2;
}
