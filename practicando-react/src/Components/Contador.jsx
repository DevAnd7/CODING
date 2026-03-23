import { useState } from "react";

const Contador = ({valorInicial}) => {

    const [contar, setContar] = useState(valorInicial)

    const sumar = () => {
        setContar(contar + 1)
    }

    const restar = () => {
        setContar(contar > 0 ? contar - 1 : 0)
    }

    return (
        <div className="d-flex gap-2">
            <h1>Contando por...{contar}</h1>

            <button className="btn btn-light"
                onClick={sumar}
            >Sumar
            </button>

            <button className="btn btn-light"
                onClick={restar}>Restar
            </button>

            <button className="btn btn-light"
                onClick={() => setContar(valorInicial)}>Reset
            </button>
        </div>
    )
}

export default Contador;