import Paciente from "./Paciente";



const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    

    return (


        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">

            {pacientes && pacientes.length ?
            
                (<>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 text-center mb-10">
                            Administra tus {" "}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                        key={paciente.id} // Cuando iteramos para mostrar diferentes componentes repetidamente en base a un arreglo, necesitamos pasar un id único, es decir, un props key, que puede ser generado de esta forma o de otras formas 
                        paciente={paciente} // este paciente no procede del prop, sino que hace referencia a la variable iterativa de este .map, comparte el mismo nombre con la variable paciente del useState pero son dos variables distintas 
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                        />
                        ))
                    }
                </>
                ): (
                    <>
                        <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                        <p className="text-xl mt-5 text-center mb-10">
                                Comienza agregrando pacientes {" "}
                            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
                        </p>
                    </>
                )
            }
            

        </div>    
        
    );
}

export default ListadoPacientes;
