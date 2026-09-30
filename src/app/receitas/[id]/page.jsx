"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dadosReceita.json";
import "../receitaID.css"


export default function receitas() {
    const params = useParams(); //pega o parametro pelo id que tem no filme encontrado ele sempre joga pra essa página mas ele identifica o id que vc está tentando acessar
    const [receitas, setPizza] = useState();
    
    useEffect( () => {
        const pizzaEncontrado = dados.find(f => f.id == params.id);
        setPizza(pizzaEncontrado);
    }, [] )

    //duas maneiras e será usado o hook

    return(
        <main className="container-pizza">
            {receitas && <>
            <div className="titulo">
            <h1>Nome da receita:{receitas.name}</h1>
            </div>


           <div className="base">

           
            <div>
            <img className="img_receita" src={receitas.image} alt=""/>
            </div>
            
            <div className="informacoes">
                <h1>Modo de preparo</h1>
            <h3>Tempo de preparo em minutos: {receitas.prepTimeMinutes}</h3>
            <h3>Tempo de cozimento em minutos: {receitas.cookTimeMinutes}</h3>
            <h3>Porções: {receitas.servings}</h3>
            <h3>{receitas.difficulty}</h3>
            <h3>{receitas.cuisine}</h3>
            <h3>{receitas.caloriesPerServing}</h3>
            <h3>Ingredientes: {receitas.ingredients.join(", ")}</h3>
            <h3>{receitas.difficulty}</h3>
            </div>
            </div>
            
            
            </>}
        </main>
    )
}
