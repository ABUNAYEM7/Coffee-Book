import React from 'react'

const Info = ({title,subtitle}) => {
  return (
    <div className='my-6 space-y-3'>
      <h3 className='text-2xl font-semibold md:text-4xl md:font-bold text-center'>{title}</h3>
      <p className='text-xl font-medium text-center w-full md:w-3/4 mx-auto'>{subtitle}</p>
    </div>
  )
}

export default Info
