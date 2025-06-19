
import './assets/css/style.css';
import { criaBotoes, criaItem } from './modules/createElTask'
import { criaGasto } from './modules/createTable'

// TASKLIST:

  const iniciarTasklist = () => {

  const btnTarefa = document.querySelector('#btn-tarefa');

  btnTarefa.addEventListener('click', (e) => {
    e.preventDefault();
    const item = criaItem();
    criaBotoes(item);
  })

  document.querySelector('#tarefa').addEventListener('keypress', (event) => {
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
}


  // MONITORADOR DE GASTOS:

  const iniciarMonitoradorGastos = () => {

  const btnGastos = document.querySelector('#btn-gastos');

  btnGastos.addEventListener('click', (e) => {
    console.log('clicou');
    e.preventDefault();
    criaGasto();
  })

  const containerFormGasto = document.querySelector('.container-form-gasto')
  containerFormGasto.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      console.log('clicou');
      criaGasto();
    };
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
    const path = window.location.pathname;
    if (path.endsWith('Monitorador.html')){
      iniciarMonitoradorGastos();

    }
    if (path.endsWith('Lista.html')) {
      iniciarTasklist();
    }
});
