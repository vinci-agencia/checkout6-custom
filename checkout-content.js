(async function() {

    function appendStyle(innerCss) {
        const newStyle = document.createElement('style');
        newStyle.innerHTML = innerCss;
        document.querySelector('head').append(newStyle)
    }


    const rootContent = `
        :root {
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
        
        }
        `

    appendStyle(rootContent);


    try {
        const getCss = await (await fetch('https://cdn.jsdelivr.net/gh/vinci-agencia/checkout6-custom/checkout6-custom.css')).text();
        appendStyle(getCss);

    } catch (Error) {
        console.alert(Error)
        console.log('%c Erro ao chamar cdn, usando fallback /arquivos/checkout-fallback.css', 'color: tomato; font-size:14px');

        try {
            const getCss = await (await fetch('/arquivos/checkout-fallback.css')).text();
            appendStyle(getCss);
        } catch (Error) {
            console.alert(Error);
            console.log('%c Erro ao chamar fallback fallback /arquivos/checkout-fallback.css, confira se o arquivo existe', 'color: tomato; font-size:14px');
        }
    }

})()