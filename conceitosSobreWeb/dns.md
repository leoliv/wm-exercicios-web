# DNS
## Servidor DNS
* Traduzir os nomes de domínios em endereços IP
    + www.cod3r.com.br
        - 54.69.61.89
* Sub-domínio
    + www.
* Domínio
    + .com.br
* *DNS funciona sobre o protocolo UDP na porta 53*

## Funcionamento básico do DNS
* Usuário informa o endereço no browser
* Computador envia uma consulta DNS para os servidor local
* O servidor responde com o endereço IP
* Computador acessa o servidor a partir do IP obtido.

## Busca recursiva
* DNS Client
    + DNS Server 1 11.11.12.1
        - DNS Server 1 11.11.12.2
            * Um DNS vai chamar o outro até ser encontrado o IP requerido

## Busca Iterativa
* DNS Client
    + DNS Server 1 11.11.12.1
        - Passa uma referência de outro Server
            * 11.22.33.44

## DNS Records
* A - IPv4
* AAAA - IPv6
* MX - Servidor de Email
* NS - Servidor de DNS
* CNAME - Canonical name (Apelido)