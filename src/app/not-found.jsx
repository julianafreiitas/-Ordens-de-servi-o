import Link from "next/link";
import NotFoundBuddy from "@/components/not-found-buddy"

export default function NotFound() {
    return (
        <>

            <div className="container">
                <div className="flex">
                    <h2>Conteúdo não encontrado!</h2>
                    <p>Erro 404</p>
                    <NotFoundBuddy className="face"/>
                    <Link href={"/"}>Voltar</Link>
                </div>
            </div>
        </>
    )
}