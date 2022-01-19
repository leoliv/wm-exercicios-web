# Protocolo HTTP
## Hyper Text Trasfer Protocol (HTTP)
* Textos lincavéis

## Características...
* Camada de Aplicação
* Stateless
    * Sem estado (Como se fosse a primeira vez)
* Cliente-Servidor
* TCP/IP
* HTML, CSS, JS, Mídias...

## Fluxo ...
* Usuário informa a URL
    * Browser gera a requisição
        * Get / HTTP /1.1
        * Host: www.google.com.br
* Servidor Web gera a Resposta
    * HTTP/1.1 200 OK
    * content-Type: text/http; charset=UTF-8
    * date: Mon, 30 Abril 2018 17:00:02 GMT
    * connection: close
    * content-Length: 438
    * Corpo da resposta...
* Browser exibe a página
* Métodos do HTTP
    * GET
    * POST
    * PUT
    * DELETE
    * TRACE
    * OPTIONS
    * CONNECT
    * HEAD
## Requisitando
* https://www.google.com.br/search?q=web+moderno&hl=pt-BR
* Requisição Via **GET**
    * Os parâmetros vão na URL
* Requisição Via **POST**
    * Os parâmetros vão no CORPO
        * Não significa que tem uma conecção segura
            * Informações sensíveis
                * Protocolo HTTPS

## Grupos de Status HTTP
* 1XX - Informação
* 2XX - Sucesso
* 3XX - Redirecionamento
* 4XX - Erro no Cliente
* 5XX - Erro no Servidor