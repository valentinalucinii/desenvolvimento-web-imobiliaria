const inicio = () => {
    console.log('inicio');
}

const fim = () => {
    console.log('FIm');
}

const processa= (funcao1, funcao2)  => {
    funcao1();

    funcao2();
}

processa(inicio, fim);

processa(() => {
    console.log('função 1');
}, ( ) => {
    console.log('função 2');
}
)