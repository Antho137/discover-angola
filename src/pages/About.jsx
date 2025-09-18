import React from 'react'

const About = () => {
  return (
    <div className='relative text-center mt-5 px-5 min-h-dvh'>
      <div className="col-sm-10 mx-auto pt-5 pb-3">
        <h1 className='text-primary fw-light'>About Angola</h1>
        <p className='fs-5 text-secondary'>Situated in the south-west of África, Angola is a fascinating destination for those who like discoveries. With its diversity in many aspects, such as cultural, climatic, and natural resources, the country offers an unique and authentic experience.</p>
      </div>
      <div className="col-sm-10 mx-auto pb-3 d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-4">
        <p className='col-md-6 text-primary'>Among many entry points in the country, Luanda remains the main ones. Also, as the capital of the Angola, it is there where are located most of the cultural and historic patrimonies of the country. Luanda is Angola administrative center.</p>
        <img src='./images/Luanda.jpg' alt='Luanda' className='col-md-6 luanda' />
      </div>
      <div className='col-sm-10 d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 my-5 mx-auto'>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/agricultura01.jpg' alt='Agricultura' className='rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Agricultural Irrigation</figcaption>
          </figure>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/ilha-do-mussulo.jpg' alt='Ilha do Mussulo' className='rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Ilha do Mussulo</figcaption>
          </figure>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/Museu-de-Antropologia.jpg' alt='Museu Nacional de Antropologia' className='rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Museu Nacional de Antropologia</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default About;