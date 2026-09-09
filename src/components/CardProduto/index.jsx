import "./cardProduto.css"

export default function CardProduto({titulo, descicao, imagem, preco}){
    return(
        <div className="card-wrap">
            <h2>{titulo}</h2>
            <p>{descicao}</p>
            <img src={imagem} alt="" />
            <p>Preço: <b>{preco}</b> </p>
        </div>
    )
}