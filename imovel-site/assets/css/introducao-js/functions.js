function inicio(){
const mensagem = 'Programa Iniciado!';
console.log(mensagem);
}

inicio();

function processa(){
    const mensagem = 'processando...';
    return mensagem;
}

function run(){
    inicio();
    const resultado = processa();
    ocnsole.log(resultado);
}
run()