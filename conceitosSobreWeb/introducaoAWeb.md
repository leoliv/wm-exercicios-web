# Introdução
## Breve História...
No vídeo
## Topologias...
1. Centralizada
3. distribuida (Assumida hoje em dia pela internet)

## A base da Internet
### Transmission Control Protocol/Internet Protocol (TCP/IP)
* Orientado a conexão e confiável
* Roteamento entre redes
* Camadas do TCP/IP
    + Aplicação
        - HTTP, FTP, SMTP...
        - Comunicação Processo-A-Processo
        - Número da Porta
    + Transporte
        - TCP [Confiável], UDP [Melhor esforço]...
        - Comunicação Host-A-Host
        - Confiabilidade, Integridade...
    + Internet
        - IP - Internet Protocol
        - Conexão entre redes
        - Transferência de Pacotes
    + Rede/Física
        - Ethernet, Wi-Fi...
        - MAC Address
        - Física [Hardware] e Elance [Software]

## Anatomia do IPV4...
* Classe A
    + 192.168.100.230
        - [**REDE**].*[HOST].[HOST].[HOST]*
    + Mascara de sub-rede
        - 255.0.0.0
* Classe B
    + 192.168.100.230
        - [**REDE**].[**REDE**]*.[HOST].[HOST]*
    + Mascara de sub-rede
        - 255.255.0.0
* Classe C
    + 192.168.100.230
        - [**REDE**].[**REDE**].[**REDE**]*.[HOST]*
    + Mascara de sub-rede
        - 255.255.255.0

## Conceito de Porta...
* Comp. 1 - 10.85.0.4
    + Skype
    + Chrome
    + Apache
    + Dropbox
        - http://10.85.0.5:8080
* Comp. 2 - 10.85.0.5
    + Github Desk
    + Chrome
    + Node
    + MySQL
        - 8080