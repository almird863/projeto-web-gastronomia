const pesqValor = document.querySelector('#pesq-valor');
const itens = document.querySelectorAll('.pesq-ul-item');

pesqValor.addEventListener('input', (Event) => {
    const termo = Event.target.value.toLowerCase();

    itens.forEach(item => {
        const textoItem = item.textContent.toLowerCase();
        if (textoItem.includes(termo)) {
            itens.style.display = "block";
        }
        else {
            itens.style.display = "none";
        }
    });
});