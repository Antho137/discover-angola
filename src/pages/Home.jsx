import { Link } from "react-router-dom";
import CarouselFade from "../components/Carousel";

const Home = () => {

  return (
    <div className='relative mt-5 px-5'>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-5 py-5 p-sm-5 text-center'>
        <div className='col-12 col-md-6' id="intro">
          <h1 className="text-primary fw-light">You are Welcome!</h1>
          <p className="fs-5">Angola offers you an authentic and unique experience. With its different climates, a cultural diversity and an highest biodiversity, It is a true destination for discovery.</p>
          <Link to='/discovery'><button type="button" className="btn btn-primary pt-1 pb-2">Discover Angola</button></Link>
        </div>
        <div className='col-12 col-md-6'>
          <CarouselFade />
        </div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-between gap-3 mt-3 mb-3 mx-auto px-lg-5 section'>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/miradouro-da-lua.jpg' alt='Miradouro da Lua' className='bg-secondary bg-opacity-10 p-4 mx-auto rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Mirradouro da Lua</figcaption>
          </figure>
          <p className='px-2 pt-0'>Miradouro da Lua is the best location to see the full splendor of the moon-like landscape in Luanda.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/fenda-da-tundavala.jpg' alt='Fenda da Tundavala' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>Fenda da Tundavala</figcaption>
          </figure>
          <p className='px-2 pt-0'>Tundavala Gap is a canyon on the escarpment of the Serra da Leba near Lubango province.</p>
        </div>
        <div className='col-md-4 text-center'>
          <figure className='pb-0 mb-0'>
            <img src='./images/TotalEnergies02.jpg' alt='Sonda Total Energies' className='bg-secondary bg-opacity-10 p-4 rounded-3' />
            <figcaption className='text-primary pt-2 fw-semibold'>TotalEnergies em offshore</figcaption>
          </figure>
          <p className='px-2 pt-0'>TotalEnergies produces aproximately 50% of Angola's total production. Still more blocks available.</p>
        </div>
      </div>  
    </div>
  )
}

export default Home;