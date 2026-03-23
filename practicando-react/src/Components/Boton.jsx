const Boton = ({letra, mensaje}) => {

const clicar =()=>{
    console.log(mensaje)
}

    return (
        <button className="btn btn-light" onClick={clicar}>Boton {letra}</button>
    );
};


export default Boton;