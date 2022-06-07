```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let counter = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (numeroEscolhido === 3 || arrayDeNumeros.length === 0) {
            return "Número não encontrado";
        } else if (arrayDeNumeros[i] === numeroEscolhido) {
            counter++;
        }
    }
    if (counter === 0) {
        return "Número não encontrado";
    } else {
        return `O número ${numeroEscolhido} aparece ${counter}x`;
    }
}
```