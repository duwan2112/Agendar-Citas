import React from 'react'
import Form from './Form'
export default function Formulario(props) {

    return (
        <div>
            
             <h2>Crear Cita</h2>
            <Form setCitas = {props.setCitas} citas = {props.citas} />

        </div>
    )
}
