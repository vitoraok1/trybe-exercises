const productCost = 10;
const saleValue = 24;

//Primeiro é estipulado duas constantes com o total de unidades (totalProducts) e o imposto (tax).

const totalProducts = 1000;
const tax = 1.2;

//Para elaboração da lógica foi pensado da seguinte forma:
    //1 - Na primeira checagem o custo do produto (productCost) teria que ser maior ou igual a 0 e o valor de venda (saleValue) também maior ou igual a 0.
    //2 - Passando da primeira checagem seria criado duas constantes, uma com a lógica do custo final do produto (finalProductCost), que seria o valor do produto (productCost) multiplicado pelo imposto (tax) que no caso são 20%.
    //3 - Após isso, seria criado a constante lucro (profit), resultante do valor de venda (saleValue) subtraindo-se o custo final do produto (finalProductCost) e multiplicando-se pela quantidade de produtos (toalProducts) para obter o valor total e consquentemente o resultado retornado pelo console com o valor do lucro desse profit.
    //4 - Por fim caso a primeira checagem não fosse concluida com exito (algum dos valores menor que 0) o console retornaria o erro que o valor de entrada está inválido.
    
if (productCost >= 0 && saleValue >= 0) {
    const finalProductCost = productCost * tax;
    const profit = ((saleValue - finalProductCost) * totalProducts);
    console.log ("O valor do lucro é " + profit);
} else {
    console.log ("Erro : valor de entrada inválido")
}