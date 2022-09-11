import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import projImg1 from "../../assets/img/celeparPremio.png";
import projImg2 from "../../assets/img/advbPremio.png";
import projImg3 from "../../assets/img/galaxyPremio.png";
import projImg4 from "../../assets/img/castroPremio.png";
import projImg5 from "../../assets/img/doppelPremio.png";
import projImg6 from "../../assets/img/beePremio.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import logoChalice from '../../assets/img/chalice.png';
import 'animate.css';
import './project.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CELEPAR",
      description: "Em breve!",
      imgUrl: projImg1,
    },
    {
      title: "ADVB",
      description: "Em breve!",
      imgUrl: projImg2,
    },
    {
      title: "Galaxy Nerd",
      description: "Em breve!",
      imgUrl: projImg3,
    },
    {
      title: "Castro Cutelaria",
      description: "Em breve!",
      imgUrl: projImg4,
    },
    {
      title: "Doppel Store",
      description: "Em breve!",
      imgUrl: projImg5,
    },
    {
      title: "Beetools",
      description: "Em breve!",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Informações gerais</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sobre Nós</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Prêmios</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cronograma</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="divFirstContent">
                        <img alt="LogoChalice" src={logoChalice} className="logoChaliceTAB" />
                        <p className="textoAcompanhaLogo">Somos uma startup formada por pessoas jovens, que se conheceram em maratonas de inovação e projetos sociais, e decidiram que juntos poderiam mudar o mundo, um passo de cada vez. Nosso objetivo é a utilização de tecnologias de maneira disruptiva e peculiar, especialmente aquelas que já são acessíveis, como softwares open source, plataformas Arduino, Raspberry Pi, Dialog Flow e Open AI.<br/><br/> Os nossos principais produtos são redes de monitoramento de condições atmosféricas e indicadores ambientais, como incidência de fumaça ou gases estranhos, em tempo real, de maneira perene e constante, integrados através de ferramentas de inteligência artificial, utilizando redes neurais, registro e análise de dados, geolocalização, geoprocessamento e georreferenciamento.<br/><br/> O Chalice Well, também conhecido como Red Spring por suas águas avermelhadas devido à alta concentração de óxidos de ferro, é um poço situado próximo ao cume do Chalice Hill, uma pequena colina próxima a Glastonbury Tor em Glastonbury, Somerset, Inglaterra. O poço, que tem fornecido agua ininterruptamente por pelo menos dois mil anos, mesmo em períodos de seca, é cercado de lendas, e muitos buscam beber de suas águas às quais são atribuídas propriedades medicinais e a capacidade de “inspirar” artistas. Seu nome, “Poço do Cálice”, remonta às lendas arturianas, dentre as quais conta-se que José de José de Arimateia teria escondido dentro do poço o “Santo Graal”, e daí viriam as propriedades curativas da água, bem como sua cor avermelhada.</p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p className="paragrafoCronograma"><h2>NOSSO CRONOGRAMA</h2><br/>
                        <h5>30 de Setembro, Sexta-feira.</h5><br/>
                          - 18:00 ESQUENTA! ( pre-event )<br/>
                            Cerimônia de abertura do evento e tiragem de dúvidas!<br/>
                        
                        <br/>
                        <br/>
                        <h5>01 de Outubro, Sábado.</h5><br/>
                          - 6:00 Início das atividades: composição de equipes (online)<br/>
                          - 9:00 Início das atividades presenciais nos campus do IFPR<br/>
                          - 8:00 Mentorias no período da manhã (presencial e online)<br/>
                          - 12:00 Pausa para o almoço<br/>
                          - 13:00 Início das mentorias do período vespertino<br/>
                          - 21:00 Fim das atividades presenciais do dia 1<br/>
                        <br/>
                        <br/>
                        <h5>02 de Outubro, Domingo.</h5><br/>
                        - 6:00 Mentorias finais (online)<br/>
                        - 12:00 Início do prazo para submissão dos projetos na plataforma Space Apps<br/>
                        - 23:59 Fim do prazo para submissão dos projetos (online)<br/>
                        <br/>
                        <br/>
                        <h5>08 de Outubro, Sábado.</h5><br/>
                          - 15:00 Premiação local e anúncio das equipes classificadas para a ETAPA MUNDIAL
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
