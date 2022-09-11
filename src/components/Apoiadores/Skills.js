import ifpr from "../../assets/img/ifpr.png";
import celepar from "../../assets/img/celepar.png";
import beetools from "../../assets/img/beetools.png";
import aeb from "../../assets/img/aeb.png";
import castro from '../../assets/img/castro.png';
import odonto from '../../assets/img/odontomax.png';
import taverna from '../../assets/img/taverna.png';
import agCuritiba from '../../assets/img/agCuritiba.png';
import galaxy from '../../assets/img/galaxy.png';
import advb from '../../assets/img/advb.png';
import doppel from '../../assets/img/doppel.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/img/arrow1.svg";
import arrow2 from "../../assets/img/arrow2.svg";
import colorSharp from "../../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="apoio">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Apoiadores</h2>
                        <p>Esse é nosso time de astronautas.<br></br>Vocês são parte desse evento e tornaram isso tudo possivel!. Muito Obrigado!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={ifpr} alt="Image" />
                                <h5>Instituto Federal do Paraná</h5>
                            </div>
                            <div className="item">
                                <img src={celepar} alt="Image" />
                                <h5>Celepar</h5>
                            </div>
                            <div className="item">
                                <img src={beetools} alt="Image" />
                                <h5>BeeTools Curitiba</h5>
                            </div>
                            <div className="item">
                                <img src={aeb} alt="Image" />
                                <h5>Agência Espacial Brasileira</h5>
                            </div>
                            <div className="item">
                                <img src={castro} alt="Image" />
                                <h5>Castro Cutelaria</h5>
                            </div>
                            <div className="item">
                                <img src={odonto} alt="Image" />
                                <h5>Odonto Max</h5>
                            </div>
                            <div className="item">
                                <img src={taverna} alt="Image" />
                                <h5>Taverna do Dragão</h5>
                            </div>
                            <div className="item">
                                <img src={agCuritiba} alt="Image" />
                                <h5>Agência de Inovação de Curitiba</h5>
                            </div>
                            <div className="item">
                                <img src={galaxy} alt="Image" />
                                <h5>Galaxy Nerd</h5>
                            </div>
                            <div className="item">
                                <img src={doppel} alt="Image" />
                                <h5>Doppel Store</h5>
                            </div>
                            <div className="item">
                                <img src={advb} alt="Image" />
                                <h5>ADVB</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
