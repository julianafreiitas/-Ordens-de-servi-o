"use client"

import { div } from 'motion/react-client';
import './dummy.css'
import { pegardados } from './function';

export default function Usuarios() {

    const {listaUsers, msgErro} = pegardados()

    return (
        <main>
        
                <h1>Página de usuários</h1>
                {msgErro != "" && <p>{msgErro}</p>}

                {listaUsers.length > 0 ?
                    //se tiver Usuario mostra essa div
                    <div className='espaco'>
                        {listaUsers.map((user) => {
                            return (
                                
                                <div className="informa" >
                                    <img src={user.image} />
                                    <h3>{user.fircstName}{" "}{user.lastName}</h3>
                                    <p>E-mail: <b>{user.email}</b></p>
                                    <p>Sexualidade: {user.gender}</p>
                                    <p>Idade: {user.age}</p>
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