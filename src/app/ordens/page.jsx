"use client";
import { useState } from "react";

export default function Ordens() {
    const [ordens, setOrdens] = useState([]);

    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");

    function cadastrarOrdem(event){
        event.preventDefault(); // isso previne que a página recarregue...para sempre
        
        //validações abaixo
        if(
            cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ){
            setErro("Preencha todos os campos!")
            return; // para não realizar o resto da função 
        }

        //objeto
        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),    
            descricao: descricao.trim(),
            status: "Aberta"
        }
         setOrdens([...ordens, novaOrdem]); //isso adiciiona um item a lsita
         console.log(ordens);
         

         //vamos zerar os campos e o erro
         setCliente("");
         setEquipamento("");
         setDescricao("");
         setErro("");
    }

    return (
        <main>
            <h1>Ordens de Serviço</h1>
            <form onSubmit={cadastrarOrdem}>
                <label htmlFor="cliente">Cliente: </label>
                <input
                    type="text"
                    name="cliente"
                    id="cliente"
                    value={cliente}
                    placeholder="Nome do cliente"
                    //tecla 
                    onChange={(event) => setCliente(event.target.value)}
                />

                <label htmlFor="equipamento">Equipamento: </label>
                <input
                    type="text"
                    name="equipamento"
                    id="equipamento"
                    placeholder="Ex: notebook"
                    value={equipamento}
                    //tecla 
                    onChange={(event) => setEquipamento(event.target.value)}
                />


                <label htmlFor="descricao">Descrição: </label>
                <input
                    id="descricao"
                    placeholder="descreva o problema"
                    value={descricao}
                    //tecla 
                    onChange={(event) => setDescricao(event.target.value)}
                />

                {erro != "" && <p>{erro}</p>}

                <button type="submit">Cadastrar Ordem</button>



            </form>
        </main>
    )
}