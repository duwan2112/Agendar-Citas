import React,{useState,useEffect} from 'react';

import Formulario from './components/Formulario'
import Citas from './components/Citas'



function App() {


let citasIniciales = JSON.parse(localStorage.getItem('citas'))
if(!citasIniciales) {
  citasIniciales= []
}



const [citas,setCitas] = useState(citasIniciales)
useEffect(()=>{
  
if(citasIniciales){
  localStorage.setItem('citas',JSON.stringify(citas))
}else{
  localStorage.setItem('citas',JSON.stringify([]))
}

},[citas,citasIniciales])
  const handleDelete = id => {
    
    const newCitas = citas.filter((cita) =>  cita.id !== id  )

    setCitas(newCitas)


  }


  return (
    <div className="App">
        <h1> ADMINISTRADOR DE PACIENTES</h1>
         <div className="container">
            <div className="one-half column"> <Formulario setCitas={setCitas} citas={citas}></Formulario> </div>
            <div className="one-half column"> <Citas handleDelete={handleDelete} citas={citas} setCitas={setCitas}> </Citas></div>
            </div>
    </div>
  );
}




export default App;
