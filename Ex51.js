document.addEventListener('DOMContentLoaded', () => {

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result-display');
    const operationButtons = document.querySelectorAll('.op-btn');

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const operation = button.dataset.operation;
            const n1 = parseFloat(num1Input.value);
            const n2 = parseFloat(num2Input.value);

            if (isNaN(n1) || isNaN(n2)) {
                resultDisplay.textContent = 'Please enter valid numbers';
                return;
            }

            let result;

            switch (operation) {
                case 'add':
                    result = n1 + n2;
                    break;
                case 'subtract':
                    result = n1 - n2;
                    break;
                case 'multiply':
                    result = n1 * n2;
                    break;
                case 'divide':
                    if (n2 === 0) {
                        resultDisplay.textContent = 'Error: Cannot divide by zero';
                        return;
                    }
                    result = n1 / n2;
                    break;
                default:
                    return;
            }

            resultDisplay.textContent = `Result: ${result}`;
        });
    });
});