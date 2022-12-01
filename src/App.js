import AltaSuperForm from "./AltaSuperForm";
import TablaSuper from "./TablaSuper";

function App() {
  return(
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          <h1>Creación de Super Héroes</h1>
          <AltaSuperForm/>
        </div>

        <div className="flex-large">
          <h1>Tabla de super heroes</h1>
          <TablaSuper/>
        </div>
      </div>
    </div>
  )
}

export default App;
