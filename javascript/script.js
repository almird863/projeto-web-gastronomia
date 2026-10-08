const pesqValor = document.querySelector('#pesq-valor');
const itens = document.querySelectorAll('.pesq-ul-item');

pesqValor.addEventListener('input', (evento) => {
    const termo = evento.target.value.toLowerCase();

    itens.forEach(itens => {
        const textoItem = itens.textContent.toLowerCase();
        if (textoItem.includes(termo)) {
            itens.style.display = "block";
        }
        else {
            itens.style.display = "none";
        }
    });
});