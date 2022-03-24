import {useState, useEffect} from 'react';



export const Formulario = () => {

  const [nombre, setNombre] = useState('Hook');

console.log(nombre) 

  return (
      <div className="md:w-1/2 lg:w-2/5">
       <h2 className="font-black text-3xl text-center">Segimiento pasiente</h2>
       <p className="text-center  text-lg mt-5 mb-10">
         Añadir Paciente y {" "}
         <span className="text-indigo-600 font-bold">Administralo</span>
       </p>
       <form action="" className="bg-white shadow-md rounded-xl py-10 px-5">
         <div className="mb-5">
           <label htmlFor="nombre"
           className="block text-gray-700 uppercase font-bold">
             Nombre de la Mascota
             </label>
             <input id="nombre"
             className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
             type="name"
             placeholder="Nombre de la Mascota" />
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
             placeholder="Nombre de la Propietario" />
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
             placeholder="Email de Contacto" />
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
             />
         </div>
          <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-colors mb-10"
          value ="Agregar Paciente"
          />
       </form>
      </div>
  )
}

