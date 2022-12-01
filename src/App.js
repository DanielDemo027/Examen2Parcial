import { useState } from "react";
import AltaSuperForm from "./AltaSuperForm";
import EditSuperForm from "./EditSuperForm";
import TablaSuper from "./TablaSuper";

function App() {
  const [editar, setEditar]=useState(false)
  
  const InitialForm = {id: '', nombreReal: '', nombreSuper: '', edad: 0, sexo: '', origen: '', habilidades: []}

  const [currentHero, setCurrentHero] = useState(InitialForm);
  
  const editRow=(heroe)=>{
    setEditar(true)
    setCurrentHero({id: heroe.id, nombreReal: heroe.nombreReal, nombreSuper: heroe.nombreSuper, edad: heroe.edad, sexo: heroe.sexo, origen: heroe.origen, habilidades: heroe.habilidades})
  }
  
  return(
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editar ? (
            <div>
              <h1>Editar Heroes</h1>
              <EditSuperForm setEditar={setEditar} currentHero={currentHero}/>
            </div>
          ) : (
            <div>
              <h1>Creación de super</h1>
              <AltaSuperForm/>
            </div>
          )}
        </div>

        <div className="flex-large">
          <h1>Tabla de super heroes</h1>
          <TablaSuper editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default App;
