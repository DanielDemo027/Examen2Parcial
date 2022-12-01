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
    const [SuperHabilidades, setSuperHabilidades] = useState({
        habilidades: [],
        response: [],
    })

    const heroesCollection = collection(BD, 'heroes')
    const AgregaHeroes = async(e)=>{
        e.preventDefault()
        await addDoc(heroesCollection, {nombreReal: nombreReal, nombreSuper: nombreSuper, edad: edad, sexo: sexo, origen: origen, habilidades: SuperHabilidades.habilidades})
        limpiar()
    }

    const uncheckAll = () =>{
        document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement){
            checkElement.checked = false;
        })
        document.querySelectorAll('#formElement input[type=radio]').forEach(function(checkElement){
            checkElement.checked = false;
        })
    }
    
    const limpiar = () =>{
        setNombreReal(InitialForm)
        setNombreSuper(InitialForm)
        setEdad(0)
        uncheckAll()
    }

    const SexoChange = (e)=>{
        setSexo(e.target.value);
    }

    const OrigenChange = (e)=>{
        setOrigen(e.target.value)
    }

    const handleChange = (e)=>{
        const {value, checked} = e.target
        const {habilidades} = SuperHabilidades;

        if(checked){
            setSuperHabilidades({
                habilidades: [...habilidades, value],
                response: [...habilidades, value]
            })
        }
        else{
            setSuperHabilidades({
                habilidades: habilidades.filter((e)=>e!==value),
                response: habilidades.filter((e)=>e!==value),
            })
        }
    }
    return(
        <>
            <form onSubmit={AgregaHeroes} id='formElement'>
                <input type='text' name="nombreReal" placeholder="Nombre real" value={nombreReal} onChange={(e)=>setNombreReal(e.target.value)} required/>
                <input type='text' name="nombreSuper" placeholder="Nombre de Super Heroe" value={nombreSuper} onChange={(e)=>setNombreSuper(e.target.value)} required/>
                <input type='number' name="edad" placeholder="Edad" value={edad} onChange={(e)=>setEdad(e.target.value)} required/>
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
                Volador   <input type='checkbox' name="habilidades" value='Volador' onChange={handleChange}/>&nbsp;
                Velocidad   <input type='checkbox' name="habilidades" value='Velocidad' onChange={handleChange}/>&nbsp;
                Fuerza   <input type='checkbox' name="habilidades" value='Fuerza' onChange={handleChange}/>&nbsp;
                Mutante   <input type='checkbox' name="habilidades" value='Mutante' onChange={handleChange}/>&nbsp;
                Visión   <input type='checkbox' name="habilidades" value='Visión' onChange={handleChange}/>&nbsp;
                Oído   <input type='checkbox' name="habilidades" value='Oído' onChange={handleChange}/>&nbsp;
                Invulneravilidad   <input type='checkbox' name="habilidades" value='Invulneravilidad' onChange={handleChange}/>&nbsp;
                Telepatia   <input type='checkbox' name="habilidades" value='Telepatia' onChange={handleChange}/>&nbsp;
                Telequinesis   <input type='checkbox' name="habilidades" value='Lanza Rayos' onChange={handleChange}/>&nbsp;
                Lanza Rayos   <input type='checkbox' name="habilidades" value='Oído' onChange={handleChange}/><br></br>
                Artes Marciales   <input type='checkbox' name="habilidades" value='Artes Marciales' onChange={handleChange}/>&nbsp;
                Inteligencia   <input type='checkbox' name="habilidades" value='Inteligencia' onChange={handleChange}/>&nbsp;
                Acrobacia   <input type='checkbox' name="habilidades" value='Acrobacia' onChange={handleChange}/>&nbsp;
                Armadura   <input type='checkbox' name="habilidades" value='Armadura' onChange={handleChange}/>&nbsp;
                Tecnologia   <input type='checkbox' name="habilidades" value='Tecnologia' onChange={handleChange}/>
                <br></br><br></br>

                <button>Enviar</button>
            </form>
            <button onClick={limpiar}>Limpiar</button>
            </>
    )
}

export default AltaSuperForm;