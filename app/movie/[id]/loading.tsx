import React from 'react'

const LoadingPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center min-h-screen'>

     <p className='flex gap-2'>Cargando datos.. <span className='animate-spin w-5 h-5 border-t-2 border-l-2  border-blue-600 rounded-full'></span></p> 
    </div>
  )
}

export default LoadingPage
