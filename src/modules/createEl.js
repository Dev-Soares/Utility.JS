import { Tarefa } from './classTarefa';
import { createElement, appendChild } from 'react';




export function criaItem(){
    const nomeTarefa = document.querySelector('.tarefa').value;
    if(nomeTarefa === ''){
        window.alert('Digite algo válido, por favor')
        return
    }
    const mostraTarefa = document.querySelector('.lista-tarefas');
    const item = document.createElement('li')
    mostraTarefa.appendChild(item)
    const tarefa = new Tarefa(nomeTarefa, false);
    const listaTarefa = []
    listaTarefa.push(tarefa)
    item.innerHTML = tarefa.nome;
    document.querySelector('.tarefa').value = ''
    return item; 
}

export function criaBotoes(item){
    const btnCheck = document.createElement('button');
    btnCheck.classList.add('checked-button');
    btnCheck.innerHTML = 'OK';
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-button');
    btnDelete.innerHTML = 'X';
    item.appendChild(btnCheck);
    item.appendChild(btnDelete);
}

