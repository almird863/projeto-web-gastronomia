const pesqValor = document.querySelector('#pesq-valor');
const itens = document.querySelectorAll('.pesq-ul-item');
//
const commentBtn = document.getElementById('comment-box-submit');

if (pesqValor != null) {
    pesqValor.addEventListener('input', (evento) => {
        const termo = evento.target.value.toLowerCase();

        itens.forEach(itens => {
            const nomeItem = itens.querySelector('h3');
            const textoItem = nomeItem.textContent.toLowerCase();
            if (textoItem.includes(termo)) {
                itens.style.display = "block";
            }
            else {
                itens.style.display = "none";
            }
        });
    });
}

if (commentBtn != null) {
    commentBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const textComentario = document.getElementById('comment-box').value;
        // const starRating = document.querySelector('.star-rating').value;

        if (textComentario.trim() == '') {
            alert('Por favor, escreva um comentário.');
            return;
        }

        const cardModelo = document.getElementById('review-card');
        const novoCard = cardModelo.cloneNode(true);

        novoCard.removeAttribute('id');
        novoCard.querySelector('.titulo').textContent = "Usuário"

        novoCard.querySelector('.comentario').textContent = `${textComentario}`

        const areaComentarios = document.getElementById('comment-box-area');
        areaComentarios.appendChild(novoCard);

        document.getElementById('comment-box').value = '';
    });
}