import React from 'react'

const Discovery = () => {
  return (
    <div className='relative text-center mt-5 px-5'>
      <div className="col-sm-10 mx-auto pt-5 pb-3">
        <h1 className='text-primary fw-light'>Discover Angola</h1>
        <p className='fs-5'>Visiting Angola is a fantastic experience which lasts for longer. Angola has a vast natural resources, including amazing landscapes, an abundant fauna and flora, secular buildings, and splendid tropical beaches along a large littoral in the south-west of África.</p>
      </div>
      <h3 className='text-primary fw-light'>Angola Resources</h3>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-2 mt-3 mb-5 discover'>
        <img src='./images/pedra.jpg' alt='Pedra' className='col-md-3 text-center' />
        <img src='./images/girafa.jpg' alt='Girafa' className='col-md-3 text-center' />
        <img src='./images/museu01.jpg' alt='Museu' className='col-md-3 text-center' />
        <img src='./images/praia03.jpg' alt='Praia' className='col-md-3 text-center' />
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-2 mt-3 mb-5 discover'>
        <img src='./images/praia02.jpg' alt='Praia' className='col-md-3 text-center' />
        <img src='./images/museu02.jpg' alt='Museu' className='col-md-3 text-center' />
        <img src='./images/leão.jpg' alt='Leão' className='col-md-3 text-center' />
        <img src='./images/kalandula.jpg' alt='Kalandula' className='col-md-3 text-center' />
      </div>
    </div>
  )
}

export default Discovery;