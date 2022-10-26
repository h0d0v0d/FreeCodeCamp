const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  
  
  let five = s[0]
  let seven = s[1]
  s[0] = s[2]
  s[1] = five
  s[2] = seven


  // Only change code above this line
}
editInPlace();
