import React from 'react'
import ReactDOM from 'react-dom/client'
import Boton from './assets/Boton.jsx'
import Card from './assets/Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
    <Boton numero = {1} nombre= "Boton1"/>
    <Boton numero = {2} nombre= "Boton2"/>

    <Card apellido = "Messi"
          nacimiento= {1987}
          clubes={["Newwell","Barcelona","PSP","Inter"]}
          mundial = {true}
          late={false}
          />
    <Card apellido = "Ronaldo"
          nacimiento= {1984}
          clubes={["Lisbo","Mancheste","Real Madrid","Nasar"]}
          mundial = {false}
          late={true}
          />
 
</>
 

)
