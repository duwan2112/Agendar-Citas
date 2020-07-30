import React from "react";
import Cita from "./Cita";
export default function Citas(props) {
  
  return (
    
    <div>
      {props.citas.length > 0 ? (
        <>
          <h2>CITAS PENDIENTES</h2>
          {props.citas.map((citas) => (
            <Cita handleDelete={props.handleDelete} key={citas.id} cita={citas} />
          ))}
        </>
      ) : (
        <h2>NO HAY CITAS</h2>
      )}
    </div>
  );
}
