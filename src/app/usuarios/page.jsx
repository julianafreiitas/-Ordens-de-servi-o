"use client"

import { useEffect, useState } from "react";

export default function Usuarios(){

    const [listaUsers, setListaUsers] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect( () => {
        fetch("https://randomuser.me/api/?results=10")
        .then(resposta => resposta.json()) //aqui é o happy path (deu certo)
        .then(data => {
            console.log(data);
            (data.results);
            setListaUsers(data.results);
            setMsgErro("");
        })

        .catch(erro => setMsgErro(erro.message)) // aqui é o sad path (deu errado)
    }, []);

    return(
        <main>
            <h1>Página de usuários</h1>
            {msgErro != "" && <p>{msgErro}</p>}
            
            {listaUsers.length > 0 ?
            //se tiver Usuario mostra essa div
            <div>
                {listaUsers.map((user, idx) => {
                    return(
                        <div key={idx}>
                            <h3>{user.name.first}{" "}{user.name.last}</h3>
                            <img src={user.picture.large} alt=""/>
                            <p>E-mail: <b>{user.email}</b></p>
                        </div>
                    )
                })}
            </div>
            :
            //se não tiver usuario mostra isso
            <div>
                sem Usuarios por enquanto! Tente novamente mais tarde...
            </div>}

        </main>
    )
}