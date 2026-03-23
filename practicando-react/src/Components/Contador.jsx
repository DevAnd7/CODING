import { useState } from "react";

const Contador = () => {

    const [contar, setContar] = useState(0)

    const sumar = () => {
        setContar(contar + 1)
    }

    const restar = () => {
        setContar(contar - 1)
    }

    return (
        <div>
            <h1>Contando vamos por...{contar}</h1>
            <button className="btn btn-light"
                onClick={sumar}
            >Sumar
            </button>

            <button className="btn btn-light"
                onClick={restar}>Restar
            </button>

            <button className="btn btn-light"
                onClick={() => setContar(0)}>Reset
            </button>
        </div>
    )
}

export default Contador;