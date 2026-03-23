import Boton from "./Components/Boton";

const App = () => {
  return (
    <div>
      <h1>
        Practicando React
      </h1>

      <div className="d-flex gap-2">
      <Boton letra= 'A' mensaje='Oprimiste el Boton A'/>
      <Boton letra= 'B' mensaje='Oprimiste el Boton B'/>
      </div>
    </div>
  );
};

export default App;