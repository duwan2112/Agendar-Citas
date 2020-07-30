import React,{useState} from 'react'

export default function Form(props) {

const [cita,setCita] = useState({

    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
})

const [error, seterror]= useState(false)

   const  handleInformation = e => {
    
      setCita({
          ...cita,
        [e.target.name] : e.target.value}) 
     
   }

   const {mascota, dueño,fecha,hora,sintomas} = cita

  const submitCita = (e) => {
      e.preventDefault();
      
      if(mascota.trim() && dueño.trim() && fecha.trim() && hora.trim() && sintomas.trim()){
          seterror(false)
          const id= props.citas.length+1
           props.setCitas([...props.citas,{mascota,dueño,fecha,hora,sintomas,id}]) 
          setCita({   mascota: '',
          dueño: '',
          fecha: '',
          hora: '',
          sintomas: ''})


          return;
         
      }
      seterror(true)
     

  }

    return (
        <>
        {error ? <p className="alerta-error"> TODOS LOS CAMPOS SON OBLIGATORIOS </p>  : null }
            <form onSubmit={submitCita}>
                <label htmlFor="">Nombre Mascota</label>
                <input value={mascota} onChange={handleInformation} placeholder="Nombre Mascota" className="u-full-width" type="text" name="mascota"/>
                <label htmlFor="">Nombre Dueño</label>
                <input value={dueño} onChange={handleInformation} placeholder="Nombre Dueño" className="u-full-width" type="text" name="dueño"/>
                <label htmlFor="">Fecha</label>
                <input value={fecha} onChange={handleInformation} className="u-full-width" type="date" name="fecha"/>
                <label htmlFor="">Hora</label>
                <input value={hora} onChange={handleInformation} className="u-full-width" type="time" name="hora"/>
                <label htmlFor="">Sintoma</label>
                <textarea onChange={handleInformation} value={sintomas} className="u-full-width" name="sintomas">  </textarea> 
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                 </form>   

         </> 
    )
}
