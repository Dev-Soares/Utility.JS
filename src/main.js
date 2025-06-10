
import './assets/css/style.css';
import { criaBotoes, criaItem } from './modules/createEl';
import { selecionaCheck, selecionaDelete } from './modules/IntBotoes';


const btnTarefa = document.querySelector('.btn-tarefa');

btnTarefa.addEventListener('click', (e) => {
    const item = criaItem();
    criaBotoes(item);
    interatividadeBotoes()
})

document.querySelector('.tarefa').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const item = criaItem();
        criaBotoes(item);
        interatividadeBotoes();
    };
});

function interatividadeBotoes(){
    const btnCheck = selecionaCheck();
    btnCheck.addEventListener('click', (e) => {
        const tarefaCompleta = btnCheck.parentNode;
        tarefaCompleta.classList.add('checado');
    })
    const btnDelete = selecionaDelete()
    btnDelete.addEventListener('click', (e) => {
        const tarefaCompleta = btnCheck.parentNode;
        tarefaCompleta.remove();
    })
}