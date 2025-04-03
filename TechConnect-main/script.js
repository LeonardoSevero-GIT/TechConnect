document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal-termos');
    const linkTermos = document.getElementById("TermoDeServico");
    const fechaTermo = document.querySelector('.close');

    modal.style.display = 'none';

    linkTermos.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    fechaTermo.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
})

