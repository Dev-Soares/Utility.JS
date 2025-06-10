import { parentElement } from 'react'

export function selecionaCheck() {
    const btnCheck = document.querySelector('.checked-button')
    return btnCheck
}

export function selecionaDelete(){
    const btnDelete = document.querySelector('.delete-button')
    return btnDelete;
}
