"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dadosReceita from "@/dadosReceita.json"

export default function Receita() {
    const params = useParams();
    const [receita, setReceitas] = useState();

    useEffect(() => {
        const receitaEncontrada = dadosReceita.find(f => f.id == params.id);
        setReceitas(receitaEncontrada);
    }, [])


    return (
        <main>
            {receita && <>
                <h1>{receita.name}</h1>
                <img src={receita.image} alt="" />
                <ul>
                    <li>Ano: {receita.ingredients}</li>
                    <li>Gênero: {receita.instructions}</li>
                </ul>
                <p>{receita.sinopse}</p>

            </>}
        </main>
    )
}