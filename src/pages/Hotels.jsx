import React from 'react';
import { IoIosStar } from 'react-icons/io';

const Hotels = () => {

  return (
    <div className='relative text-center mt-5 px-5'>
      <div className="col-sm-10 mx-auto pt-5">
        <h1 className='text-primary fw-light'>Hotels in Luanda</h1>
        <p className='fs-5'>There are lots of city hotels in Luanda. Many of these hotels are so close to the centre of the city, and not too far from the new Luanda International Airport. By booking seriously from agencies that provide these services, you will find a hotel that will exceed your expectations, offering the best rates according your possibilities.</p>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 my-5 text-center mx-auto'>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>Inter Continental</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/inter.jpg' alt='Hotel Intercontinental' className='' />
        </div>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>EPIC SANA</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/epic-sana.jpg' alt='Hotel Epic-Sana'  className='' />
        </div>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>Hotel Presidente</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/presidente.jpg' alt='Hotel Presidente' className='' />
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 mb-5 text-center mx-auto'>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>Hotel Alvalade</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/Alvalade.jpg' alt='Hotel Alvalade' className='' />
        </div>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>Skyna Hotel</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/skyna.jpg' alt='Hotel Skyna' className='' />
        </div>
        <div className='col-md-4'>
          <h3 className='text-primary fs-4 fw-light mb-0'>Hotel Trópico</h3>
          <div className='text-warning mb-2'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
          </div>
          <img src='./images/Tropico.jpg' alt='Hotel Tropico' className='' />
        </div>
      </div>
    </div>
  )
}

export default Hotels;