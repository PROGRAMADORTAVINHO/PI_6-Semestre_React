import './style.css';

const Gallery = () => {
  return (
    <>
      <div className='Container_img'>
        <div className='Foto'>
          <div className='IMG'>
            <img src={require('../../assets/foto1.jpg')} alt='' />
            <img src={require('../../assets/foto2.jpg')} alt='' />
            <img src={require('../../assets/foto3.jpg')} alt='' />
            <img src={require('../../assets/foto4.jpg')} alt='' />
            <img src={require('../../assets/foto5.jpg')} alt='' />
            <img src={require('../../assets/foto6.jpg')} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
