import React from 'react'


export default function Cita(props) {
    const {mascota,dueño,fecha,hora,sintomas,id}= props.cita

  

    return (
        <div className="cita">
           
    <p>Cita numero: <span>{id}</span>  </p>
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño:  <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas:<span>{sintomas}</span> </p>
    <button className="button eliminar u-full-width" onClick={() => (props.handleDelete(id)) }> Eliminar &times;</button>
        </div>
    )
}
