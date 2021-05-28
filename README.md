# Modelo de checkout atualizavel pelo git


## Como utilizar:

- Suba o arquivo checkout-fallback.css na vtex, como qualquer outro arquivo, que será utilizado em caso de erro na requisição
- Altere as cores das variaveis no arquivo **checkout-content.js**

```css
`:root {
    --theme-color-1: rgb(195, 0, 255);
    /*cor background secundaria, deixe a cor que está se não sabe o que faz*/

    --main-color: tomato;
    /*cor background principal, butões internos etc*/

    --header-bg: turquoise;
    /*cor do header:*/

    --header-border: yellow;
    /*cor da border bottom do header:*/

    --footer-border: darkblue;
    /*footer border*/

    --footer-bg: orange;
    /*cor de fundo do footer*/

    --footer-bottom-bg: grey;
    /*cor de fundo da parte inferior do footer*/

    --footer-color:green;
    /*cor dos elementos do footer*/

}`
```

- Cole o header e footer nos seus respectivos lugares
- Cole o conteudo de **checkout-content.js** no lugar de **checkout6-custom.js** e **checkout-confirmation4-custom.js**

## Lembre de alterar as informações do cliente no footer

Atendimento, redes sociais e formas de pagamento.