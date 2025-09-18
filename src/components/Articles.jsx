import React from 'react'

const Articles = () => {
  return (
    <div id='articles'>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 mt-5 mb-3 mx-auto'>        
        <div className="col-sm-10 mx-auto text-center">
          <h2 className="text-primary fw-light">Get to know Angola</h2>
          <p className="fs-4">Angola is one of African country which provides many opportunities at different aspects, such as tourism, business and exploration.</p>
        </div>
        <div className='col-12 col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/miradouro-da-lua.jpg' alt='Miradouro da Lua' className='bg-secondary bg-opacity-10 p-4 mx-auto rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Mirradouro da Lua</figcaption>
          </figure>
          <p className='px-4 pt-0'>Miradouro da Lua is the best location to see the full splendor of the moon-like landscape.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/ilha-do-mussulo.jpg' alt='Ilha do Mussulo' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Ilha do Mussulo</figcaption>
          </figure>
          <p className='px-4 pt-0'>Mussulo is a peninsula located in south of Luanda. An outer beach to the Atlantic Ocean.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/fenda-da-tundavala.jpg' alt='Fenda da Tundavala' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Fenda da Tundavala</figcaption>
          </figure>
          <p className='px-4 pt-0'>Tundavala Gap is a canyon on the escarpment of the Serra da Leba near Lubango.</p>
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 mb-5 mx-auto'>
        <div className='col-12 col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/agricultura01.jpg' alt='Agricultura' className='bg-secondary bg-opacity-10 p-4 mx-auto rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Agricultural Irrigation</figcaption>
          </figure>
          <p className='px-4 pt-0'>The quality of water used in irrigation have significant impacts on agricultural productivity and the environment.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/TotalEnergies02.jpg' alt='Sonda Total Energies' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>TotalEnergies em offshore</figcaption>
          </figure>
          <p className='px-4 pt-0'>TotalEnergies produces aproximately 50% of Angola's total production. Still more blocks available for investment.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/Museu-de-Antropologia.jpg' alt='Museu Nacional de Antropologia' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Museu Nacional de Antropologia</figcaption>
          </figure>
          <p className='px-4 pt-0'>Located in the heart of the city of Luanda. It is an anthropological museum and a cultural and scientific institution.</p>
        </div>
      </div>
    </div>
  )
}

export default Articles;