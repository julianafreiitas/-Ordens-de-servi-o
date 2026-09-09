import LoadingSpinner from "@/components/loadingSpinner"

export default function Loading() {
    return (
        <>
            <div className="container">
                <div className="flex">
                    <h2>Carregando</h2>
                    <LoadingSpinner/>
                </div>
            </div>


        </>
    )
}