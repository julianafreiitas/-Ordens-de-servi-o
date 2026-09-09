import "./header.css";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header>
                <div className="cima">

                    <img className="header-logo" src="/imagens/logo.png" alt="logo da empresa" />

                    <div className="header-atalhos">
                        <Link href={"/Product"}>Product</Link>
                        <Link href={"/product/solutions"}>Solutions</Link>
                        <Link href={"/product/solutions/Pricing"}>Pricing</Link>
                        <Link href={"/product/solutions/Pricing/Learn"}>Learn</Link>
                        <Link href={"/contato"}>Contact</Link>
                    </div>

                    <div className="header-ibtn">
                        <img className="header-icon" src="/imagens/lupa.png" alt="" />
                        <button className="btn-log-in">Log in</button>
                        <button className="free">Start My Free Trial</button>
                    </div>
                </div>
            </header>
        </>
    )
}