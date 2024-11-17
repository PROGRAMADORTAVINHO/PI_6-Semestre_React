import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './AboutUs.css';
import {
  Container_carousel,
  Container_slide,
  Content,
  Foto,
  Img,
  Slide,
} from './style';

const SlideAboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <>
      <div className='title_teams'>
        {' '}
        <h3> Equipe Scrum </h3>{' '}
      </div>
      <Container_carousel>
        <Container_slide>
          <Slider {...settings}>
            {data.map((d) => (
              <Slide>
                <Foto>
                  <Img src={d.img} />
                </Foto>
                <Content>
                  <h2 className='profession'>{d.profession}</h2>
                  <p className='name'>{d.name}</p>
                  <ul className='ul_slide'>
                    <li className='li_slide'>
                      <a href={d.LinkedIn} target='_blank'>
                        <span className='icon'>
                          <i className='fa fa-linkedin'></i>
                        </span>
                        <span className='titulo'>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </Content>
              </Slide>
            ))}
          </Slider>
        </Container_slide>
      </Container_carousel>
    </>
  );
};

const data = [
  {
    name: 'Anderson Akira Mekaru',
    img: 'students/anderson.jpg',
    profession: 'Web Design',
    LinkedIn: 'https://www.linkedin.com/in/akira-mekaru/',
  },
  {
    name: 'Daniel Tsuyoshi Izumi',
    img: 'students/daniel.jpg',
    profession: 'Technical Writer',
    LinkedIn: 'https://www.linkedin.com/in/daniel-tsuyoshi-izumi-5ab817311/',
  },
  {
    name: 'Felipe Gouvea da Silva',
    img: 'students/felipe.jpg',
    profession: 'Mobile Developer',
    LinkedIn:
      'https://www.linkedin.com/in/felipe-gouvea-da-silva-712385309/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'João Otavio Duarte de Souza',
    img: 'students/joao.jpg',
    profession: 'Web Developer',
    LinkedIn: 'https://www.linkedin.com/in/joaootavioduartedesouza/',
  },
  {
    name: 'Marcelo Alfonso de Souza',
    img: 'students/marcelo.jpg',
    profession: 'Back-end Developer',
    LinkedIn: 'https://www.linkedin.com/in/marcelo-alfonso/',
  },
  {
    name: 'Rafael Eduardo Rodrigues Navarro',
    img: 'students/rafael.jpg',
    profession: 'SolidWorks',
    LinkedIn: 'https://www.linkedin.com/in/rafael-navarro-041b111b4/',
  },
  {
    name: 'Victor Oliveira da Nóbrega Santana',
    img: 'students/victor.jpg',
    profession: 'Scrum Master',
    LinkedIn:
      'https://www.linkedin.com/in/victor-oliveira-da-nóbrega-santana-b50b4224a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export default SlideAboutUs;
