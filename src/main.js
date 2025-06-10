
import './assets/css/style.css';
import { criaBotoes, criaItem } from './modules/createEl';

    const btnTarefa = document.querySelector('.btn-tarefa');
    btnTarefa.addEventListener('click', (e) => {
        const item = criaItem();
        criaBotoes(item);
    })
    document.querySelector('.tarefa').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const item = criaItem();
            criaBotoes(item);
        };
    });

    const btnDelete = document.querySelector('.delete-button');
    const btnCheck = document.querySelector('.checked-button');
  
