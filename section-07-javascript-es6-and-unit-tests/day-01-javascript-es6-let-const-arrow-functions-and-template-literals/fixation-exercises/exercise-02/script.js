const factorial = (number) => {
    let result = number;

    if (number === 0 || number === 1) {
        result = 1;
        return `Esse é o fatorial ${result}`;
    }

    for (let index = number - 1; index >= 1; index -= 1) {
        result *= index;
    }
    return `Esse é o fatorial ${result}`;
}

console.log(factorial(5));