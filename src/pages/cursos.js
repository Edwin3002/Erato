import React, { useState } from 'react'
import CardCursos from '../components/CardCursos'
import cursosData from '../data/cursosData.json'

const cursos = () => {

  const [data, setData] = useState(cursosData)

  return (
    <div className='flex flex-wrap justify-around'>
      {
        data.map(curso=>(
          <CardCursos info={curso} key={curso.id}/>
        ))
      }
    </div>
  )
}

export default cursos