function calculateFibonacci() {
    const number = document.getElementById('input').value;
  
    // Input validation (optional)
    if (isNaN(number) || number < 1) {
      alert("Please enter a positive integer.");
      return;
    }
  
    const fibonacciSequence = fibonacci(number);
    document.getElementById('output').textContent = `The Fibonacci sequence up to ${number} is: ${fibonacciSequence.join(', ')}`;
  }
  
  function fibonacci(number) {
    const fib = [0, 1];
    for (let i = 2; i < number; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }