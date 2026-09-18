function DataHora(){
    const agora = new Date();
    const hora = agora.toLocaleDateString('pt-br');

    const relogios = document.querySelectorAll ('.relogio-post');

    relogios.forEach(relogio =>{
        relogio.innerHTML = hora;
    });


}

setInterval(DataHora, 1000);
DataHora