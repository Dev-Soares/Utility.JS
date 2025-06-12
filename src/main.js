
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

const lista = document.querySelector(".lista-tarefas");

lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const item = event.target.closest("li");
    item.remove();
  }

  if (event.target.classList.contains("checked-button")) {
    const item = event.target.closest("li")
    item.classList.add('checado');
  }
});

