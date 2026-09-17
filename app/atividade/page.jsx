"use client"
import { useState } from "react";
import "./ordem.css";
import { motion, AnimatePresence } from "motion/react";

export default function Ordens() {
    const lista = [
        {
            id: 1,
            cliente: "Gabriel",
            equipamento: "Mochila",
            descricao: "Amigo quebrou"
        },
        {
            id: 2,
            cliente: "Lucas",
            equipamento: "Lápis",
            descricao: "Sumiu em casa"
        },
        {
            id: 3,
            cliente: "Felipe",
            equipamento: "Estojo",
            descricao: "Rasgou na escola"
        },
        {
            id: 4,
            cliente: "Ana",
            equipamento: "Tesoura",
            descricao: "Ficou cega"
        },
    ];

    const [ordens, setOrdens] = useState(lista);
    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");
    const [erro, setErro] = useState("");
    const [visivel, setVisivel] = useState(true);

    function cadastrarOrdem(event) {
        event.preventDefault();

        //validações
        if (cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ) {
            setErro("Preencha o formulário");
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta",
        }

        setOrdens([...ordens, novaOrdem]) // add item a lista
        console.log(ordens);

        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    return (

        <main>
            <div className="botao">
                <button command="show-modal" commandfor="modal-formulario">Abrir Cadastro</button>
                <button type="button" onClick={() => setVisivel(!visivel)}>
                    {visivel ? "Esconder tabela" : "Mostrar tabela"}
                </button>
            </div>
            {/* motion + dialog === "Não rola" */}
            <dialog className="form-content" id="modal-formulario"> 
                <motion.div className="mot" initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <h1>Ordens de Serviço</h1>
                    <form onSubmit={cadastrarOrdem}>
                        <div className="row">
                            <label htmlFor="cliente">Cliente:</label>
                            <input
                                type="text"
                                name="cliente"
                                id="cliente"
                                placeholder="Nome do Cliente"
                                value={cliente}
                                onChange={(event) => setCliente(event.target.value)}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="equipamento">Equipamento:</label>
                            <input
                                className="a"
                                type="text"
                                name="equipamento"
                                id="equipamento"
                                placeholder="Nome do Equipamento"
                                value={equipamento}
                                onChange={(event) => setEquipamento(event.target.value)}
                            />
                        </div>
                        <div className="row">
                            <div className="content-area">
                                <label htmlFor="descricao">Descriçãoz:</label>
                                <textarea
                                    maxLength={100}
                                    minLength={15}
                                    id="descricao"
                                    placeholder="Nome do Descrição"
                                    value={descricao}
                                    onChange={(event) => setDescricao(event.target.value)}
                                />
                            </div>
                        </div>
                        {erro != "" && <p className="msgErro" ><i>{erro}</i></p>}
                        <div className="row">
                            <button>Cadastrar Ordem</button>
                            <button type="button" command="close" commandfor="modal-formulario">Fechar</button>
                        </div>
                    </form>
                </motion.div>
            </dialog>


            <AnimatePresence>
                {visivel && (
                    <motion.table
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Equipamento</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordens.map((p, i) =>
                                <motion.tr key={p.id}
                                    intial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}>
                                    <td>Id:{p.id}</td>
                                    <td>Nome:{p.cliente}</td>
                                    <td>Equipamento:{p.equipamento}</td>
                                    <td>Descrição:{p.descricao}</td>
                                </motion.tr>)}
                        </tbody>
                    </motion.table>
                )}
            </AnimatePresence>
        </main>
    );
}