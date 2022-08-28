import { useState, useEffect } from "react";
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // Lista actualizada tras eliminar paciente
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  } 

  //Evita perder la info guardada previamente en el localStorage cuando se carga el componente. Importante: Este useEffect debe colocarse entre el useState([]) que inicia el valor de pacientes a un arreglo vacío y el siguiente useEffect que guarda el valor de pacientes en el localStorage 
  useEffect( () => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; // El operador ?? indica que se ejecute la parte de su derecha si la parte de su izquierda es null. En este caso, si la parte de la izq evalua a null, no se asigna null a pacientesLS sino un arreglo vacío
      //JSON.parse convierte el elemento, en este caso procedente de localStorage que recordemos que es guardado como string, en un objeto, en este caso en un arreglo (recordemos que un arreglo es data del tipo objeto)

      setPacientes(pacientesLS); 
    }

    obtenerLS();
  }, []); // un arreglo vacío como dependencia implica que el código se va a ejecutar una sola vez, cuando el componente está listo

  // Inserta la lista de pacientes como un string en localStorage
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes )); // JSON.stringify convierte el elemento que le pasemos en un string, dado que localStorage solo guarda strings
  }, [pacientes])

  return (
    
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;
