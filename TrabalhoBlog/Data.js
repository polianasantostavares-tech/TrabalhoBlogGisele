function Data (){
    const agora = new Date();
    const dia = String(agora.getDate());
    const mes = String(agora.getMonth());
    const ano = agora.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById('data-blog').innerText = dataFormatada;
}
Data();

function DataHora(){
    const agora = new Date();
    const hora = agora.toLocaleTimeString('pt-br');
    const relogios = document.querySelectorAll('.relogio-post');
    relogios.forEach(relogio => {
        relogio.innerHTML = hora;

    });
    
     
    
}
setInterval(DataHora, 1000);
DataHora();