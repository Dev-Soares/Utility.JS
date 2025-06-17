import { createElement } from "react";
import { Gasto } from "./classes";
import { create } from "core-js/core/object";


export default function criaGasto(){
    const descGasto = document.querySelector('.desc-gasto')
    const dataGasto = document.querySelector('.data-gasto')
    const valorGasto = document.querySelector('.valor-gasto')
    const gasto = new Gasto (descGasto,dataGasto,valorGasto);
    createTr()
    for (i in gasto){
        createTd(gasto[i]);
    }
} 

 const createTd = (valor) => {
    const td = createElement('td')
    td.innerhtml = valor
 }


 const createTr = () => {
    const tabelaPrincipal = document.querySelector('tabela-final')
    const tr = document.createElement('tr')
    tabelaPrincipal.appendChild(tr)
 }
 