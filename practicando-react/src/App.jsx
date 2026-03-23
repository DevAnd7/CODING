import Boton from "./Components/Boton";
import Contador from "./Components/Contador";

const App = () => {
  return (
    <div>
      <h1>
        Practicando React
      </h1>

      <div className="d-flex flex-column gap-3">
        <Boton letra='A' mensaje='Oprimiste el Boton A' />
        <Boton letra='B' mensaje='Oprimiste el Boton B' />
        <Contador valorInicial={0} />
        <Contador valorInicial={5} />
        <Contador valorInicial={10} />
      </div>
    </div>
  );
};

export default App;