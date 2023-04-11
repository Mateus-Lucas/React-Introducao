import React from 'react'
import Pagina from '../../componentes/Pagina'
import { useState } from 'react'
import { useEffect } from 'react'
import apiDeputados from '../../services/apiDeputados'

const hooks = () => {

  const [deputados, setDeputados] = useState([])

    useEffect(()=>{
        apiDeputados.get('/deputados').then(resultado=>{
           setDeputados(resultado.data.dados)
        })
    }, [])

    return (
        <Pagina titulo="Deputados">
            <h1>Nome dos pilantras</h1><br></br>
            {deputados.map(item => (
                <p>{item.nome}</p>
            ))}
        </Pagina>
  )
}

export default hooks