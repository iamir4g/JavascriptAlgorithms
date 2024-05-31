function calculateFactorial() {
    const number = document.getElementById('input').value;
  
    // Input validation (optional)
    if (isNaN(number) || number < -1) {
      alert("Please enter a positive integer.");
      return;
    }
  
    const factorialSequence = factorial(number);
    document.getElementById('output').textContent = `The Factorial sequence up to ${number} is: ${factorialSequence}`;
  }
  
  function factorial(number) {
    var fact = 1
    for(let i=2;i<=number;i++)
      {
        fact = fact * i
      }
    return fact;
  }