export function interatividadeBotoes(){
    const btnCheck = document.querySelector('.checked-button');
    btnCheck.addEventListener('click', (e) => {
        const tarefaCompleta = btnCheck.parentNode;
        tarefaCompleta.classList.add('checado');
    })
    const btnDelete = document.querySelector('.delete-button');
    btnDelete.addEventListener('click', (e) => {
        const tarefaCompleta = btnCheck.parentNode;
        tarefaCompleta.remove();
    })
};
