import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { BD } from "./firebase/config";

const AltaSuperForm = () =>{
    const InitialForm = '';
    const [nombreReal, setNombreReal] = useState('');
    const [nombreSuper, setNombreSuper] = useState('');
    const [edad, setEdad] = useState(0);
    const [sexo, setSexo] = useState('');
    const [origen, setOrigen] = useState('');

    const heroesCollection = collection(BD, 'heroes')
    const AgregaHeroes = async(e)=>{
        e.preventDefault()
        await addDoc(heroesCollection, {nombreReal: nombreReal, nombreSuper: nombreSuper, edad: edad, sexo: sexo, origen: origen})
    }

    const SexoChange = (e)=>{
        setSexo(e.target.value);
    }

    const OrigenChange = (e)=>{
        setOrigen(e.target.value)
    }

    console.log(sexo, origen)
    return(
            <form onSubmit={AgregaHeroes}>
                <input type='text' name="nombreReal" placeholder="Nombre real" value={nombreReal} onChange={(e)=>setNombreReal(e.target.value)}/>
                <input type='text' name="nombreSuper" placeholder="Nombre de Super Heroe" value={nombreSuper} onChange={(e)=>setNombreSuper(e.target.value)}/>
                <input type='number' name="edad" placeholder="Edad" value={edad} onChange={(e)=>setEdad(e.target.value)}/>
                <label>Sexo</label>
                Masculino   <input type='radio' name="sexo" value='Masculino' checked={sexo==='Masculino'} onChange={SexoChange}/> <br></br>
                Femenino   <input type='radio' name="sexo" value='Femenino' checked={sexo==='Femenino'} onChange={SexoChange}/><br></br>
                No especificado   <input type='radio' name="sexo" value='No especificado' checked={sexo==='No especificado'} onChange={SexoChange}/><br></br>

                <label>Origen</label>
                Humano   <input type='radio' name="origen" value='Humano' checked={origen==='Humano'} onChange={OrigenChange}/> <br></br>
                Extraterrestre   <input type='radio' name="origen" value='Extraterrestre' checked={origen==='Extraterrestre'} onChange={OrigenChange}/> <br></br>
                Experimento   <input type='radio' name="origen" value='Experimento' checked={origen==='Experimento'} onChange={OrigenChange}/><br></br>
                Mutante   <input type='radio' name="origen" value='Mutante' checked={origen==='Mutante'} onChange={OrigenChange}/> <br></br>

                <label>Características</label>
                Volador   <input type='checkbox' name="poderes"/>&nbsp;
                Velocidad   <input type='checkbox' name="poderes"/>&nbsp;
                Fuerza   <input type='checkbox' name="poderes"/>&nbsp;
                Mutante   <input type='checkbox' name="poderes"/>&nbsp;
                Visión   <input type='checkbox' name="poderes"/>&nbsp;
                Oído   <input type='checkbox' name="poderes"/>&nbsp;
                Invulneravilidad   <input type='checkbox' name="poderes"/>&nbsp;
                Telepatia   <input type='checkbox' name="poderes"/>&nbsp;
                Telequinesis   <input type='checkbox' name="poderes"/>&nbsp;
                Lanza Rayos   <input type='checkbox' name="poderes"/><br></br>
                Artes Marciales   <input type='checkbox' name="poderes"/>&nbsp;
                Inteligencia   <input type='checkbox' name="poderes"/>&nbsp;
                Acrobacia   <input type='checkbox' name="poderes"/>&nbsp;
                Armadura   <input type='checkbox' name="poderes"/>&nbsp;
                Tecnologia   <input type='checkbox' name="poderes"/><br></br><br></br>

                <button>Enviar</button>
                <button>Limpiar</button>
            </form>
    )
}

export default AltaSuperForm;