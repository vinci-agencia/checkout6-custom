(async function() {
    document.querySelector('body').style.opacity = '0';

    function showBody() {
        document.querySelector('body').style.transition = 'opacity .3s';
        document.querySelector('body').style.opacity = '1';
    }

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
        const getCss = await (await fetch('https://raw.githubusercontent.com/vinci-agencia/checkout6-custom/main/checkout-fallback.css')).text();
        appendStyle(getCss);
        showBody();
        console.log('%c Utilizando raw.githubusercontent', 'color: turquoise;font-weight:bold');
    } catch (Error) {
        console.alert(Error)
        console.log('%c Erro ao chamar cdn, usando fallback /arquivos/checkout-fallback.css', 'color: tomato; font-size:14px');

        try {
            const getCss = await (await fetch('/arquivos/checkout-fallback.css')).text();
            appendStyle(getCss);
            showBody();
            console.log('%c Utilizando /arquivos/checkout-fallback.css', 'color: yellow;font-weight:bold');
        } catch (Error) {
            console.alert(Error);
            console.log('%c Erro ao chamar fallback fallback /arquivos/checkout-fallback.css, confira se o arquivo existe', 'color: tomato; font-size:14px;font-weight:bold');
            showBody();
        }


    }

})()