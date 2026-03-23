import Boton from "./Components/Boton";

const App = () => {
  return (
    <div>
      <h1>
        Practicando React
      </h1>
      <Boton letra= 'A' mensaje='Oprimiste el Boton A'/>
      <Boton letra= 'B' mensaje='Oprimiste el Boton B'/>
    </div>
  );
};

export default App;