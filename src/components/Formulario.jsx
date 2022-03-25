import {useState, useEffect} from 'react';
import { Error } from './Error';



export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

useEffect( () => {

if(Object.keys(paciente).length > 0 ){
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
  setEmail(paciente.email)
  setFecha(paciente.fecha)
  setSintomas(paciente.sintomas)
}
}, [paciente] )



  const generarId = () => {
    const azar = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return azar+fecha
  }

  const handleSubmit = (e) =>{
      e.preventDefault();

      //validacion del formulario
      if([nombre,propietario,email,fecha,sintomas].includes("")){
        
        setError(true);
        return;
      }
      setError(false)
      //objeto de pasiente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }

      if(paciente.id){
        //editando el registro
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
        
        setPacientes(pacientesActualizados)
        setPaciente({});
        

      }else{
        //nuevo registro
        objetoPaciente.id =  generarId()
        setPacientes([...pacientes, objetoPaciente])


      }



      //reicinar en el fot
      setNombre("");
      setPropietario("")
      setEmail("");
      setFecha("");
      setSintomas("");
      }

  return (
      <div className="md:w-1/2 lg:w-2/5 mx-5 mb-5">
       <h2 className="font-black text-3xl text-center">Segimiento paciente</h2>
       <p className="text-center  text-lg mt-5 mb-10">
         Añadir Paciente y {" "}
         <span className="text-indigo-600 font-bold">Administralo</span>
       </p>
       <form
       onSubmit ={handleSubmit}
       action=""
       className="bg-white shadow-md rounded-xl py-10 px-5">
         {error && <Error> <p>Todos los campos son Obligarorios </p></Error> }
         <div className="mb-5">
           <label htmlFor="nombre"
           className="block text-gray-700 uppercase font-bold">
             Nombre de la Mascota
             </label>
             <input id="nombre"
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
             type="name"
             placeholder="Nombre de la Mascota"
             value={nombre}
             onChange = {(e)=>setNombre(e.target.value)}
              />
         </div>
         <div className="mb-5">
           <label htmlFor="Propietario"
           className="block text-gray-700 uppercase font-bold">
             Nombre de la Propietario
           </label>
             <input 
             id="Propietario" 
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"  
             type="text" 
             placeholder="Nombre de la Propietario"
             value={propietario}
             onChange = {(e)=>setPropietario(e.target.value)} />
         </div>
         <div className="mb-5">
           <label htmlFor="email"
           className="block text-gray-700 uppercase font-bold">
             Email de Contacto
           </label>
             <input 
             id="email" 
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"  
             type="email" 
             placeholder="Email de Contacto"
             value={email}
             onChange = {(e)=>setEmail(e.target.value)}
              />
         </div>
         <div className="mb-5">
           <label htmlFor="alta"
           className="block text-gray-700 uppercase font-bold">
             Alta
           </label>
             <input 
             id="alta"
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
             type="date"
             value={fecha}
             onChange = {(e)=>setFecha(e.target.value)}
             />
         </div>
         <div className="mb-5">
           <label htmlFor="sintomas"
           className="block text-gray-700 uppercase font-bold">
             Síntomas
           </label>
             <textarea 
             id="sintomas"
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
             placeholder="Describe los Sintomas"
             value={sintomas}
             onChange = {(e)=>setSintomas(e.target.value)}
             />
         </div>
          <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-colors mb-10"
          value ={paciente.id?'Editar Paciente':'Agregar Paciente'}
          />
       </form>
      </div>
  )
}

