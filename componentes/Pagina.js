import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagina = (props) => {

console.log(props)

 return (
    <>
       
        <Cabecalho/>

        <div className='bg-secondary text-white p-5 text-center mb-3'>
         <h1 style={{display: "inline-block", marginRight:"53%"}}>
          {props.titulo}
         </h1>
        </div>

        <Container style={{maxWidth: '60%'}} className='mb-5'>    
        {props.children}
        </Container>

        <Rodape/>
           
    </>
    )
}

export default Pagina