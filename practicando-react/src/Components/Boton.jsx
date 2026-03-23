const Boton = ({letra, mensaje}) => {

const clicar =()=>{
    console.log(mensaje)
}

    return (
        <button onClick={clicar}>Boton {letra}</button>
    );
};


export default Boton;