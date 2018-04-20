import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../Components/particle_config';
import style from '../Components/styles';
import RaisedButton from 'material-ui/RaisedButton';

// Time line
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Material ui
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

// Icons
import {FaCode, FaCodeFork, FaFacebook, FaInstagram, FaGithub} from 'react-icons/lib/fa';

// Colors
import { teal600, indigo600, red600, deepPurple600, blueGrey900 } from 'material-ui/styles/colors';


export default class Proyectos extends React.Component{

  handleLocation = (url) => {
    switch(url) {
      case 'facebook':
        window.location = 'https://www.facebook.com/DJ.santy.lopez.94';
        break;
      case 'instagram':
        window.location = 'https://www.instagram.com/santy_lopez_94/';
        break;
      default:
        window.location = 'https://github.com/githubpopckorn';
    }
  }

  render(){
    return(
      <div style={{height: '100%'}}>

        <Particles
          params={particleConfig}
          style={style.particle}
        />

        <div className="row center-xs">
          <div className="col-xs-12 big-top-space bottom-space">
            <h2 style={style.spanText}>
              <span>PROYECTOS</span>
            </h2>
          </div>

          <div className="col-xs-12 col-md-7">
            <Card style={{backgroundColor: '#fff'}} className="big-padding">
              <CardMedia>
                <img src={process.env.PUBLIC_URL + "/images/code.svg"} alt=""/>
              </CardMedia>
              <div className="row center-xs">
                <div className="col-xs-8">
                  <p style={style.text}>
                    He participado en un sin número de proyectos personales, empresariales y de universidad, de los cuales algunos los tengo disponible
                    para la comunidad en mi cuenta de Github, pasate un momento por ahí dejaré los enlaces más abajo.
                  </p>

                  <Divider />
                  <p style={style.text}>
                    ¿Eres de alguna fundación o beneficiencia de ayuda social y necesitas una solución tecnológica?
                    Escribeme a mis correos podría ayudarte de manera gratuita!
                  </p>

                  <Divider />
                  <p style={style.text}>
                    Está página también la dejo gratuita al público en mi cuenta de github, descargatela, llenala con tus
                    datos y tendrás una hoja de vida online de manera sencilla. Yo soy 100% autor del código de está página!
                  </p>
                </div>


              </div>
            </Card>
          </div>
        </div>

        <div style={{background: "#e3e3e3", height: '100%'}}>
          <VerticalTimeline animate={true}>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018"
              iconStyle={{ background: indigo600, color: '#fff' }}
              icon={<FaCode style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Proyecto Cacmu</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Web</h4>
                <p>
                  Es un proyecto para el control y manejo de procesos judiciales, con reportes estadístico
                  de desempeño social, agencias, créditos para mejorar la eficiencia de eficacia de la cooperativa.

                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2018"
              iconStyle={{ background: red600, color: '#fff' }}
              icon={<FaCodeFork style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">TaxiApp</h3>
                <h4 className="vertical-timeline-element-subtitle">Movil Application</h4>
                <p>
                  Aplicación móvil para pedir un taxi en la ciudad de Ibarra, dividia en dos módulos:
                  Aplicación del Usuario, Aplicación del Taxista.

                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--trabajo"
              date="2018"
              iconStyle={{ background: deepPurple600, color: '#fff' }}
              icon={<FaCodeFork style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Evaluación de emprendedores</h3>
                <h4 className="vertical-timeline-element-subtitle">Web Application</h4>
                <p>
                  Aplicación web para gestionar encuestas y calificaciones a los proyectos que se ingresen,
                  tiene la posibilidad de ingresar una matriz de evaluación y dividir los proyectos en categorías.
                  El sistema ayuda a Jueces a calificar los proyectos via web, y los administradores podrán ver
                  resultados estadístico, gráficas y procesos de avance de las evaluaciones.
                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--expo"
              date="2018"
              iconStyle={{ background: teal600, color: '#fff' }}
              icon={<FaCodeFork style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Popckorn Cloud</h3>
                <h4 className="vertical-timeline-element-subtitle">Web Application</h4>
                <p>
                  Proyecto personal en el que estoy trabajando actualmente que sirve como red social de documentos, y proyectos
                  maneja solicitudes de amistad, followers, likes a tus documentos, notificaciones. Mira documentos de tu interés
                  compartelos con la comunidad todo en un mismo lugar, buscas un libro, un paper o una guía de alguna herramienta?
                  Esta será la plataforma en donde enconstrarás todo eso.
                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018"
              iconStyle={{ background: indigo600, color: '#fff' }}
              icon={<FaCodeFork style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Y mas</h3>
                <h4 className="vertical-timeline-element-subtitle">....</h4>
                <p>
                  Tengo en mente algunos otros proyectos que conforme vaya teniendo tiempo los iré subiendo y
                  actualizaré estas secciones.
                </p>
              </div>

            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>



        <div style={{background: "#e3e3e3", height: '100%'}}>
          <VerticalTimeline animate={true}>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018"
              iconStyle={{ background: indigo600, color: '#fff' }}
              icon={<FaFacebook style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Facebook</h3>
                <RaisedButton label="Sigueme en Facebook" onClick={() => this.handleLocation('facebook')}/>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2018"
              iconStyle={{ background: red600, color: '#fff' }}
              icon={<FaInstagram style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Instagram</h3>
                <RaisedButton label="Sigueme en Instagram" onClick={() => this.handleLocation('instagram')}/>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--github"
              date="2018"
              iconStyle={{ background: blueGrey900, color: '#fff' }}
              icon={<FaGithub style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Github</h3>
                <RaisedButton label="Mira mis proyectos" onClick={() => this.handleLocation('github')}/>
              </div>

            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>





        <div className="row center-xs big-bottom-space">
          <div className="col-xs-12 big-top-space bottom-space">
            <h2 style={style.spanText}>
              <span>Empresas en las que trabajo</span>
            </h2>
          </div>
          <div className="row center-xs middle-xs">
            <div className="col-xs-11 col-md-5">
              <Card style={{backgroundColor: "#fff"}}>
                <CardMedia>
                  <img src={process.env.PUBLIC_URL + "/images/freenet.png"} alt=""/>
                </CardMedia>
              </Card>
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-xs-11 col-md-5">
              <Card>
                <CardMedia>
                  <img src={process.env.PUBLIC_URL + "/images/cacmu.png"} alt=""/>
                </CardMedia>
              </Card>
            </div>
          </div>

        </div>
      </div>
    );
  }
}