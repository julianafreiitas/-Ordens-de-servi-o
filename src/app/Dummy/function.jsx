import { useEffect, useState } from "react";
export function pegardados() 
{
    
    const [listaUsers, setListaUsers] = useState([]);
    const [msgErro, setMsgErro] = useState("");
    
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then(resposta => resposta.json()) //aqui é o happy path (deu certo)
            .then(data => {
                console.log(data);
                (data.users);
                setListaUsers(data.users);
                setMsgErro("");
            })
    
            .catch(erro => setMsgErro(erro.message)) // aqui é o sad path (deu errado)
    }, []);
    return{listaUsers, msgErro};
}