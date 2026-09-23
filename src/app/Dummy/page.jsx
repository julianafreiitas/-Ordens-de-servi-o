"use client"
import "./dummy.css"

import { pegardados } from './function';

export default function Usuarios() {

    const {listaUsers, msgErro} = pegardados()


    return(
        <main>
            <h1>Página de usuários</h1>
            {msgErro != "" && <p>{msgErro}</p>}
            
            {listaUsers.length > 0 ?
            //se tiver Usuario mostra essa div
            <div className="infroma">
                {listaUsers.map((user) => {
                    return(
                        <div className="caixa" key={user.id}>
                            <img src={user.image} alt=""/>
                            <h3>{user.firstName}{" "}{user.lastName}</h3>
                            <p>E-mail: <b>{user.email}</b></p>
                            <p>Idade: <b>{user.age}</b></p>
                            <p>Telefone: <b>{user.phone}</b></p>
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

