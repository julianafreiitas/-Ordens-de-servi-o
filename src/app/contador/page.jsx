"use client";

import { useState } from "react";

export default function contador() {

    const [contador, setContador] = useState(0);
    
    function addUmContador(){

        if (contador >= 100){
            alert("Não pode mais adicionar valor ao contador!");
            return
        }
        setContador(contador + 1)
        
    }

    function removeUmContador(){
        
        if (contador <= -5){
            alert("Não pode mais diminuir o valor ao contador!");
            return
        }
        setContador(contador - 1)
    }

    return (
        <>
            <h1>Desenvolvendo um contador</h1>
            <p> {contador} </p>
            <div style={{display: "flex", gap: "10px"}}>
                <button type="button" onClick={addUmContador} > + </button>
                <button type="button" onClick={removeUmContador}> - </button>
            </div>
        </>
    )
    
}