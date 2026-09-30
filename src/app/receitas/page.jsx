"use client"

import { useEffect, useState } from "react";
import dados from "@/dadosReceita.json"
import "./receita.css"

export default function Pizzas() {
    const [pizzas, setPizzas] = useState([]);
    useEffect( () => {
        setPizzas(dados)
    }, []);

    return (
        <main>
            <h1>Listagem das Receitas</h1>
            {pizzas.length > 0 &&
                <div className="container-pizza">
                    {pizzas.map(f => {
                        return (
                            <div key={f.id} className="wrap-pizza">
                                <img  className="img" src={f.image} alt="" />
                                <h3>{f.name}</h3>
                                <a className="botao"href={`/receitas/${f.id}`}>Saiba Mais</a>
                            </div>
                        )
                    })}
                </div>}
        </main>
    )
}
