let menu = ["Home", "Serviços", "Portfólio", "Links"];

//O valor "Serviços" está posição 1 da array (0,1,2,3), dessa forma a fim de obter o retorno da mesma no console, utilizamos array[posição];

let menuServices = menu[1];

console.log(menuServices);

//Para procurar o índice de um valor específico dentro da array utilizamos array.indexOf(valor);

let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

//Para adicionar um novo valor ao final da array, utilizamos array.push(valor);

menu.push("Contato");

console.log(menu);