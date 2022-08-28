
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {nombre, propietario, email, fecha, sintomas, id} = paciente;

    const handleDelete = () => {
        // confirm es una funcion nativa de JavaScript, podríamos hacer uso de alguna librería para mejorar su apariencia
        const respuesta = confirm('¿Confirma que desea eliminar este paciente?')

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
    
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {" "}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {" "}
                <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="flex justify-between mt-10">
                <button type="button" 
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={() => setPaciente(paciente)} //de nuevo, la variable paciente que le hemos pasado como argumento proviene de cada uno de los objetos que se asignan a la variable iterativa
                        //Nota importante: Utilizamos un arrow function como función callback porque es la única manera de hacer esperar a la función setPaciente sin ser ejecutada puesto que toma un argumento. Veamoslo de la siguiente forma, podríamos optar por colocar la función setPaciente como onClick={setPaciente}? Esta sería una alternativa solo en caso de que la función callback, es decir, aquello que se ejecuta en un futuro tras la ocurrencia de un evento, en este caso tras un click, si no esperase un parametro a ser pasado. Cuando el workflow alcanzase el eventlistener Onclick, la función setPaciente sería registrada, pero no llamada y ejecutada puesto que no le sigue ningún parentesis. El problema es que toma un parametro y por tanto necesita parentesis. Estos parentesis harían que la función fuese llamada inmediatamente cuando el flujo la recorriese. Por ello, necesitamos un arrow function como funcion callback dentro del eventlistener, dado que la función que se registra es la parte izquierda de la flecha, es decir, el parentesis, quedando la parte derecha, nuestra función setPaciente, sin ser recorrida hasta que la funcion callback es ejecutada. En otras palabras, la función setPaciente está dentro, en el cuerpo, de la función callback (), que es la cual es registrada cuando el flujo entra en la función asyncrona onClick o eventlistener 
                >
                    Editar
                </button>
                
                <button type="button" 
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleDelete}
                        >
                    Eliminar
                </button>
            </div>
        </div>
        
    );
}

export default Paciente;
