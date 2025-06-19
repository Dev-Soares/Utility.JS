
import { Gasto } from "./classes";



export function criaGasto(){
    const descGasto = document.querySelector('.desc-gasto').value
    const dataGasto = document.querySelector('.data-gasto').value
    const valorGasto = document.querySelector('.valor-gasto').value
    
    if(descGasto === '' || dataGasto === '' || valorGasto === '' || typeof(valorGasto) !== 'number'){
        window.alert('Preencha todos os campos, por favor')
        return
    }

    const gasto = new Gasto (descGasto,dataGasto,valorGasto);
    const tr = createTr();

    for (let i in gasto){
        tr.appendChild(createTd(gasto[i]));
    }
    
    document.querySelector('.desc-gasto').value = ''
    document.querySelector('.data-gasto').value = ''
     document.querySelector('.valor-gasto').value = ''
    
} 

let createTd = (valor) => {
    const td = document.createElement('td');
    td.textContent = valor
    return td;
 }


let createTr = () => {
    const tabelaPrincipal = document.querySelector('.corpo-gastos');
    const tr = document.createElement('tr');
    tabelaPrincipal.appendChild(tr);
    return tr;
 }
 