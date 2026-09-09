'use client'
import PageErro from "@/components/pageErro"

export default function Error({ retry }) {
    return (
        <div>
            <div className="container">
                <div className="flex">
                    <h2>Erro</h2>
                    <button onClick={() => retry('new')}>Try again</button>
                    <PageErro />
                </div>
            </div>

        </div>
    )
}

