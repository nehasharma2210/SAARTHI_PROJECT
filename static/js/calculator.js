const calcDisplay = document.getElementById('calcDisplay');

    function degreesToRadians(deg) {
      return deg * (Math.PI / 180);
    }

    function appendToCalc(value) {
      calcDisplay.value += value;
      calcDisplay.focus();
    }

    function clearCalc() {
      calcDisplay.value = '';
      calcDisplay.focus();
    }

    function backspaceCalc() {
      calcDisplay.value = calcDisplay.value.slice(0, -1);
      calcDisplay.focus();
    }
    function isBalanced(expression) {
    let stack = [];
    for (let char of expression) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}
function replaceTrig(fnName) {
  return expr.replace(
    new RegExp(`${fnName}\\(([^()]+)\\)`, 'g'),
    (_, arg) => `Math.${fnName}(degreesToRadians(${arg}))`
  );
}

    function calculateExpression(expr) {
  try {
    function degreesToRadians(degrees) {
      return degrees * (Math.PI / 180);
    }

    expr = replaceTrigFunc(expr, 'sin');
    expr = replaceTrigFunc(expr, 'cos');
    expr = replaceTrigFunc(expr, 'tan');

    expr = expr.replace(/log\(/g, 'Math.log(');
    expr = expr.replace(/\^/g, '**');

    return eval(expr);
  } catch {
    return 'Error';
  }

  function replaceTrigFunc(expr, fnName) {
    return expr.replace(
      new RegExp(`${fnName}\\(([^()]+)\\)`, 'g'),
      (_, arg) => `Math.${fnName}(degreesToRadians(${arg}))`
    );
  }
}

   function calculate() {
    try {
        const expression = calcDisplay.value.trim();
        if (expression === '') return;

        if (!isBalanced(expression)) {
            alert('Missing closing parenthesis.');
            return;
        }

        const result = calculateExpression(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid result');
        }

        calcDisplay.value = result;
    } catch (error) {
        alert("Check your expression.");
        clearCalc();
    }
    calcDisplay.focus();
}

    // Keyboard Support
    if (calcDisplay) {
      calcDisplay.addEventListener('keydown', (event) => {
        const key = event.key;
        const operators = ['+', '-', '*', '/', '.', '^'];
        const digits = '0123456789';

        if (digits.includes(key) || operators.includes(key)) {
          appendToCalc(key);
        } else if (key === 's') {
          appendToCalc('sin(');
        } else if (key === 'c') {
          appendToCalc('cos(');
        } else if (key === 't') {
          appendToCalc('tan(');
        } else if (key === 'l') {
          appendToCalc('log(');
        } else if (key === 'p') {
          appendToCalc('^');
        } else if(key==')')
          appendToCalc('^');
        else if (key === 'Enter') {
          event.preventDefault();
          calculate();
        } else if (key === 'Backspace') {
          event.preventDefault();
          backspaceCalc();
        } else if (key === 'Delete') {
          event.preventDefault();
          clearCalc();
        }

        if (digits.includes(key) || operators.includes(key)) {
          event.preventDefault();
        }
      });

      document.getElementById('calculatorModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('calculatorModal')) {
          calcDisplay.focus();
        }
      });
    }