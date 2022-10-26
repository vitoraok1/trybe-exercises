let chessPiece = "King";

// Para esse programa utilizaremos a estrutura condicional switch case, por se tratar de vários valores diferentes a verificação se torna mais simples e efetiva nesses casos. Detalhe: A utilização do .toLowerCase para a variável poder receber valores de string em maiúsculo ou minúsculo.

switch (chessPiece.toLowerCase()) {
    case "pawns":
        // Caso a peça seja o peão retornaremos o seguinte resultado:
        console.log ("pawns -> one space forward only, unless its their first move: then they can move two squares");

        break;

    case "knight":
        // Caso a peça seja o cavalo retornaremos o seguinte resultado:
        console.log ("knight -> moves in an “L” shape, two spaces vertically and one space horizontally, or the opposite: two spaces horizontally and one space vertically");

        break; 

    case "bishop":
         // Caso a peça seja o bispo retornaremos o seguinte resultado:
        console.log ("bishop -> can shoot up and down the diagonals of the chess board");

        break;

    case "rook":
        // Caso a peça seja a torre retornaremos o seguinte resultado:
        console.log ("rook -> has the ability to zoom all over the board, horizontally or vertically, any number of squares");

        break;

    case "queen":
        // Caso a peça seja a rainha retornaremos o seguinte resultado:
        console.log ("queen -> can move any amount of squares in any direction – horizontally, vertically, or diagonally");

        break;

    case "king":
        // Caso a peça seja o rei retornaremos o seguinte resultado:
        console.log ("king -> can move in any direction one square. It can move horizontally, vertically, or diagonally");

        break;
    
    default:
        // Caso a peça seja inválida retorna o seguinte resultado:
        console.log ("Erro: peça inválida")
}