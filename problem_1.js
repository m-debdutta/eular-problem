const threshold = 10; 

const sumOfMultiple = function(threshold) {
  let i = 0; 
  let sum = 0;
  while(3 * i < threshold) {
    sum += 3 * i; 
    if((5 * i < threshold) && (5 * i % 15 !== 0)) {
      sum += 5 * i; 
    }
    i++;
  }
  return sum; 
}
