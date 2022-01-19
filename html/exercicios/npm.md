## Para instalar o http-server
Na pasta dos exercícios '/exercicios-web'
$ sudo npm i (install) -g (global) http-server
= Coloque sua senha.

## Para iniciar o servidor no node.
$ http-server .
= vai abrir na porta 8080, mas se quiser mudar pra outra porta
localhost:8080
$ http-server -p 9090 (por exemplo) .

## Para desabilitar o cache do http-server
$ http-server -c10 (vai guardar os arquivos cache por 10 segundos)
Mas eu quero que desabilite o cache, então
$ http-server -c-1 . (vai desabilitar)