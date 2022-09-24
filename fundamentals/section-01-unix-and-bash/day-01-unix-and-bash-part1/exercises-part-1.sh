#!/bin/bash

delay=2

# Exercício 1

echo -e "\nCriando diretorio unix_tests"
mkdir unix_tests
echo -e "\nNavegando para diretorio unix_tests"
cd unix_tests
sleep $delay

# Exercício 2

echo -e "\nCriando arquivo trybe.txt"
touch trybe.txt
sleep $delay

# Exercício 3

echo -e "\nCriando uma copia de trybe.txt com o nome de trybe_backup.txt"
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercício 4

echo -e "\nRenomeando/movendo o arquivo trybe.txt para trybe02.txt"
mv trybe.txt trybe02.txt
sleep $delay

# Exercício 5

echo -e "\nCriando diretorio backup"
mkdir backup
sleep $delay

# Exercício 6

echo -e "\nMovendo trybe_backup.txt para o diretorio backup"
mv trybe_backup.txt backup
sleep $delay

# Exercício 7

echo -e "\nCriando um diretorio chamado backup2"
mkdir backup2
sleep $delay

# Exercício 8

echo -e "\nMovendo trybe_backup da pasta backup para a pasta backup2"
mv backup/trybe_backup.txt backup2
sleep $delay

# Exercício 9

echo -e "\nApagando o diretorio backup"
rmdir backup
sleep $delay

# Exercício 10

echo -e "\nRenomeando a pasta backup2 para backup"
mv backup2 backup
sleep $delay

# Exercício 11-1

echo -e "\nMostrando o path atual"
pwd
sleep $delay

# Exercício 11-2

echo -e "\nListando arquivos do path atual"
ls
sleep $delay

# Exercício 12

echo -e "\nApague o diretório backup"
rm -rf backup
sleep $delay

# Exercício 13

echo -e "\nLimpe o terminal"
clear
sleep $delay

# Exercício 14

echo -e "\nCriando arquivo skills.txt"
echo -e "Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL >> skills.txt"

sleep $delay

# Exercício 15

echo -e "\nMostrando as 5 primeiras skills do arquivo skills.txt"
cat skills.txt | head -5
sleep $delay

# Exercício 16

echo -e "\nMostrando as 4 ultimas skills do arquivo skills.txt"
cat skills.txt | tail -4
sleep $delay

# Exercício 17

echo -e "\nApagando todos os arquivos que terminem em .txt"
rm -rf *.txt
sleep $delay