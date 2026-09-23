"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import dados from "@/dados.json"

export default function Filme() {
    const params = useParams();
    const [filme, setFilmes] = useState();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilmes(filmeEncontrado);
    }, [])


    return (
        <main>
            {filme && <>
                <h1>{filme.titulo}</h1>
                <img src={filme.imagem} alt="" />
                <ul>
                    <li>Ano: {filme.ano}</li>
                    <li>Gênero: {filme.genero}</li>
                </ul>
                <p>{filme.sinopse}</p>

            </>}
        </main>
    )
}