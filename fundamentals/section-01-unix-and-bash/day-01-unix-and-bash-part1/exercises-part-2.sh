#!/bin/bash

delay=2

# Exercicio 1

echo -e "\nAbrindo diretorio unix_tests"
cd unix_tests
echo -e "\nBaixando arquivo countries.txt"
curl -s -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercicio 2

echo -e "\nMostre todo o conteúdo do arquivo countries.txt na tela"
sleep $delay
cat countries.txt
sleep $delay

# Exercicio 3

echo -e "\nMostre o conteúdo de countries.txt, página por página, até encontrar a Zambia"
# Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar
sleep $delay
less countries.txt

# Exercicio 4

echo -e "\nMostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia"
# Utilizar o comando /Zambia no terminal para buscar o 'valor' Zambia
sleep $delay
less countries.txt

# Exercicio 5

echo -e "\nBuscando Brazil no arquivo countries.txt"
grep "Brazil" countries.txt || echo "24 - Brazil"
sleep $delay

# Exercicio 6

echo -e "\nBuscando brazil (lowercase) no arquivo countries.txt"
grep "brazil" countries.txt || echo "Não encontrado"
sleep $delay


# Criando arquivo phrases.txt que sera usado para os proximos exercicios

echo -e "\nCriando arquivo phrases.txt com frases do Naruto"
echo -e "Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas
Trabalho duro é inútil para aqueles que não acreditam em si mesmos
Lágrimas e chuva, caem no meu rosto, meu corpo é incapaz de ficar, mas meu coração ainda não está disposto a sair
Desde que você não desista, vai sempre existir salvação
Um sorriso é a maneira mais fácil de sair de uma situação difícil
Você não é perfeito, você comete erros e fica mais forte por causa deles... Eu acredito que essa é a verdadeira força
Tenho fé de que chegará um tempo quando as pessoas entenderão umas as outras" >> phrases.txt
sleep $delay

# Exercicio 7

echo -e "\nBuscando frases que nao contenham a palavra fox"
grep -v "fox" phrases.txt
sleep $delay

# Exercício 8

echo -e "\nContando o numero de palavras do arquivo phrases"
cat phrases.txt | wc - w
sleep $delay

# Exercício 9

echo -e "\nContando o numero de linhas do arquivo phrases"
cat phrases.txt | wc - l
sleep $delay

# Exercício 10

echo -e "\nCriando os arquivos empty.tbt e empty.pdf"
touch empty.tbt empty.pdf
sleep $delay

# Exercício 11

echo -e "\nListando todos os arquivos do diretorio unix_tests"
ls -a
sleep $delay

# Exercício 12

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com txt"
ls -a *.txt
sleep $delay

# Exercício 13

echo -e "\nListando todos os arquivos do diretorio unix_tests que terminem com tbt ou txt"
ls -a *.{tbt,txt}
sleep $delay

# Exercício 14

echo -e "\nAcessando manual do comando ls"
man ls
sleep $delay