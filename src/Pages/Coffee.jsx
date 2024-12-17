import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/Card'

const Coffee = () => {
    const data = useLoaderData()
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-6'>
        {data.map(coffee=><Card key={coffee.id} coffee={coffee}></Card>)}
      </div>
    </div>
  )
}

export default Coffee
