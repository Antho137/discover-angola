import Carousel from 'react-bootstrap/Carousel';

const CarouselFade = () => {
  return (
    <Carousel fade nextIcon={false} prevIcon={false}>
      <Carousel.Item>
        <img src="./images/Palacio-de-Ferro.jpg" className="rounded-3" alt="Palacio de Ferro" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Palacio de Ferro</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Quedas-de-Kalandula.jpg" className="rounded-3" alt="Kalandula Falls" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Quedas de Kalandula</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Fortaleza-de-Sao-Miguel.jpg" className="rounded-3" alt="Fortaleza de Sao Miguel" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Fortaleza de São Miguel</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Praia-em-Angola.jpg" className="rounded-3" alt="Praia em Angola" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Praia na ilha do Mussulo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Serra-da-Leba.jpg" className="rounded-3" alt="Serra da Leba" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Serra da Leba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Palanca-Negra.jpg" className="rounded-3" alt="Palanca Negra" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Palanca Negra</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./images/Kulumbimbi.jpg" className="rounded-3" alt="Kulumbimbi em Mbanza Kongo" />
        <Carousel.Caption>
          <h3 className='bg-white fs-5 text-primary mb-0 pt-1 pb-2 px-2 rounded-3'>Kulumbimbi</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;