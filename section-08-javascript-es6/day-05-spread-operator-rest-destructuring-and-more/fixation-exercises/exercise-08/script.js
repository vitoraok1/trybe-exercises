// escreva sum abaixo

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(4, 5, 6));