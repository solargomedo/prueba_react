import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';

export default function Nosotros() {
  return (
    
    <div className="container my-4" style={{ minHeight: '80vh' }}>
      <div className="row" style={{ height: '100%' }}>
        {/* Columna de texto */}
        <div className="col-md-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet minus quas eius repellendus
            ex iste voluptates ratione voluptate perferendis facere incidunt aliquid molestias ad modi commodi omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet minus quas eius repellendus
            ex iste voluptates ratione voluptate perferendis facere incidunt aliquid molestias ad modi commodi omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, amet minus quas eius repellendus
            ex iste voluptates ratione voluptate perferendis facere incidunt aliquid molestias ad modi commodi omnis.
          </p>
        </div>

        {/* Columna del carousel */}
        <div className="col-md-8" style={{ height: '100%' }}>
          <div id="carouselExampleCaptions" className="carousel slide h-100">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img src={img1} className="d-block w-100 h-100" alt="perro" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item h-100">
                <img src={img2} className="d-block w-100 h-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item h-100">
                <img src={img3} className="d-block w-100 h-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
