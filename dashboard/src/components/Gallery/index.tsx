import './style.css';



const Gallery = () => {
  return (
    <>
      <div className="Container_video">
        <div className="Video">
          <video autoPlay loop muted playsInline className="background-clip">
            <source src={require('../../assets/Video.mp4')} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="Container_img">
          <div className="Foto">
            <div className="IMG">
              <img src={require('../../assets/foto1.jpg')} alt="" />
              <img src={require('../../assets/foto2.jpg')} alt="" />
              <img src={require('../../assets/foto3.jpg')} alt="" />
              <img src={require('../../assets/foto4.jpg')} alt="" />
              <img src={require('../../assets/foto5.jpg')} alt="" />

              <img src={require('../../assets/foto1.jpg')} alt="" />
              <img src={require('../../assets/foto2.jpg')} alt="" />
              <img src={require('../../assets/foto3.jpg')} alt="" />
              <img src={require('../../assets/foto4.jpg')} alt="" />
              <img src={require('../../assets/foto5.jpg')} alt="" />

              <img src={require('../../assets/foto1.jpg')} alt="" />
              <img src={require('../../assets/foto2.jpg')} alt="" />
              <img src={require('../../assets/foto3.jpg')} alt="" />
              <img src={require('../../assets/foto4.jpg')} alt="" />
              <img src={require('../../assets/foto5.jpg')} alt="" />

              <img src={require('../../assets/foto1.jpg')} alt="" />
              <img src={require('../../assets/foto2.jpg')} alt="" />
              <img src={require('../../assets/foto3.jpg')} alt="" />
              <img src={require('../../assets/foto4.jpg')} alt="" />
              <img src={require('../../assets/foto5.jpg')} alt="" />
            </div>
          </div>
      </div>
    </>
  );
};


export default Gallery;
