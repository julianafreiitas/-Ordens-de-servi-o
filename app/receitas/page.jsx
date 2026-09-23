"use client";

import { useEffect, useState } from "react";
import dadosReceita from "@/dadosReceita.json"

export default function Receitas() {
    const [receitas, setReceitas] = useState([]);
    useEffect(() => {
        setReceitas(dadosReceita);
    }, []);

    return (
        <main>
            <h1>Listagem de todas as receitas</h1>
            {receitas.length > 0 &&
                <div>
                    {receitas.map(f => {
                        return (
                            <div key={f.id} className="wrap-filme">
                                <img src={f.image} alt="" />
                                <h3>{f.titulo}</h3>
                                <a href={`/receitas/${f.id}`}>Saiba mais...</a>
                            </div>
                        )
                    })}
                </div>
            }
        </main>
    )
}