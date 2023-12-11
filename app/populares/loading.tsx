import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center min-h-screen'>
      <p className='text-3xl font-bebas'>Cargando lista</p> <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default loading
