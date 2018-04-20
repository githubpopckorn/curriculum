import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../Components/particle_config';
import style from '../Components/styles';

// Time line
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



// Icons
import SocialSchool from 'material-ui/svg-icons/social/school';
import {FaStar, FaTrophy, FaCertificate, FaBriefcase, FaComments} from 'react-icons/lib/fa';

// Colors
import { teal600, indigo600, red600, deepPurple600 } from 'material-ui/styles/colors';

export default class Formacion extends React.Component{

  render(){
    return(
      <div style={{background: "#e3e3e3", height: '100%'}}>

        <Particles
          params={particleConfig}
          style={style.particle}
        />

        <div>
          <div className="row center-xs big-padding">
            <div className="col-xs-12">
              <h2 style={style.spanText}>
                <span>Experiencia de Trabajo & Educacion</span>
              </h2>

            </div>
          </div>
          <VerticalTimeline animate={true}>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Inicio -2005"
              iconStyle={{ background: indigo600, color: '#fff' }}
              icon={<SocialSchool style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Saint Louis School</h3>
                <h4 className="vertical-timeline-element-subtitle">Ambato, Ecuador</h4>
                <p>
                  Educación primaria, especializada en la enseñanza de otros idiomas. Permanencia hasta 7mo grado.
                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2005"
              iconStyle={{ background: indigo600, color: '#fff' }}
              icon={<FaStar style={{color: "#fff"}}/>}
            >
              <div >
                <h3 className="vertical-timeline-element-title">Saint Louis School</h3>
                <h4 className="vertical-timeline-element-subtitle">Ambato, Ecuador</h4>
                <p>
                  Premio al mejor aprovechamiento de la escuela.
                </p>
              </div>

            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2005 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<SocialSchool style={{color: "#fff"}} />}
            >
              <h3 className="vertical-timeline-element-title">Unidad Educatica Saleciana Sanchez y Cifuentes</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Estudios secundarios
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2012 - Actualmente cursando"
              iconStyle={{ background: red600, color: '#fff' }}
              icon={<SocialSchool style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Universidad Técnica del Norte</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Facultad de Ingeniería en Ciencias Aplicadas, Carrera de ingeniería en Sistemas Computacionales
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2016"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaCertificate style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Universidad Técnica del Norte</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Certificados de todos los niveles ic3: ic3 1, ic3 2, ic3 3.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2016"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaCertificate style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Universidad Técnica del Norte</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Certificado curso de redes Cisco. CCNA1
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--trabajo"
              date="2016 - 2017"
              iconStyle={{ background: deepPurple600, color: '#fff' }}
              icon={<FaBriefcase style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Freenet Technology</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Empresa dedicada a entregar soluciones tecnológicas en el ámbito de movilidad
                e internet. Cargo opcupado en la empresa: Desarrollador.
              </p>
            </VerticalTimelineElement>



            <VerticalTimelineElement
              className="vertical-timeline-element--university"
              date="2017"
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaTrophy style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Universidad Técnica del Norte</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Premio al primer lugar en el concurso nacional interuniversitario de programación FIS 2017 en la
                especialidad de desarrollo Web.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--expo"
              date="2017"
              iconStyle={{ background: teal600, color: '#fff' }}
              icon={<FaComments style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Universidad Técnica del Norte</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Ponente internacional realizada en la ciudad de Popayan - Colombia. Tema de la ponencia: Visión
                artificial aplicada a la detección automática de líneas de cultivo.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--trabajo"
              date="2017 - 2018"
              iconStyle={{ background: deepPurple600, color: '#fff' }}
              icon={<FaBriefcase style={{color: "#fff"}}/>}
            >
              <h3 className="vertical-timeline-element-title">Cooperativa de Ahorro y Crédito Cacmu</h3>
              <h4 className="vertical-timeline-element-subtitle">Ibarra, Ecuador</h4>
              <p>
                Institución dedicada al sector de la economía popular y solidaria. Cargo ocupado: Desarrllador
              </p>
            </VerticalTimelineElement>


          </VerticalTimeline>
        </div>


      </div>
    );
  }
}