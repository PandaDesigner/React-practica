import Paciente from "./Paciente"


const ListadoPasiente = ({pacientes, setPaciente, eliminarPaciente}) => {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ?(
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente
          </h2>
          <p className="text-xl mt-2 mb-2 text-center">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas 
            </span>
          </p>
          <p className="text-red-400 font-bold text-center mb-10 uppercase text-md">
            pacientes en espera:{` ${pacientes.length}`}
          </p>
          {pacientes.map(paciente =>(
              <Paciente
              key={paciente.id}
              paciente ={paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
              />
              ))}
        </> 
      ):(
          <>
      <h2 className="font-black text-3xl text-center">
        No Hay Pacientes
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Agrega tus pacientes y {" "}
        <span className="text-indigo-600 font-bold">
          Aparecerán en este lugar
        </span>
      </p>
          </>
      )}
    </div>
  )
}

export default ListadoPasiente
