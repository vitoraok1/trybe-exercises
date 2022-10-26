#!/bin/bash

delay=2

# Exercicio 1

echo -e "Abrindo diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercicio 2

echo -e "\nCriando arquivo skills2.txt"
echo -e "Internet
Unix
Bash" > skills2.txt
sleep $delay

# Exercicio 3

echo -e "\nAdicionando 5 linhas ao arquivo skills2.txt"
echo -e "Git
Github
HTML
CSS
Javascript" >> skills2.txt
sleep $delay

# Exercicio 4

echo -e "\nContando linhas do arquivo skills2.txt"
cat skills2.txt | wc -l 
sleep $delay

# Exercicio 5

echo -e "\nCriando arquivo top_skills.txt com as 3 primeiras skills do arquivo skills2.txt depois de ordenado alfabeticamente"
cat skills2.txt | sort | head -3 > top_skills.txt
sleep $delay

# Exercicio 6

echo -e "\nCriando phrases2.txt com frases do Homem-aranha"
echo -e "Grandes poderes trazem grandes responsabilidades
Podemos não ganhar todas as batalhas, mas devemos dar sempre o nosso máximo
Se alguém precisa de ajuda, e você pode ajudar, tem a obrigação de fazer isso
Os segredos têm um custo, eles não são grátis" >> phrases2.txt
sleep $delay

# Exercicio 7

echo -e "\nContando o numero de linhas que contem br em phrases2.txt"
grep -c br phrases2.txt
sleep $delay

# Exercicio 8

echo -e "\nContando o numero de linhas que NÃO contem br em phrases2.txt"
grep -vc br phrases2.txt
sleep $delay

# Exercicio 9

echo -e "\nAdicionando 2 paises ao final de phrases2.txt"
echo -e "Brasil
Japão" >> phrases2.txt
sleep $delay

# Exercicio 10

echo -e "\nCriando bunch_of_things.txt com os conteudos de phrases2.txt e countries.txt"
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $delay

# Exercicio 11

echo -e "\nCrie um novo arquivo bunch_of_things_ordered.txt com o conteúdo do arquivo bunch_of_things.txt ordenado"
cat bunch_of_things.txt | sort > bunch_of_things_ordered.txt
sleep $delay