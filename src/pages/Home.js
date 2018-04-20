import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../Components/particle_config';
import style from '../Components/styles';


//Material ui
import {Card} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';


// Colors
import { blue600, indigo500, red600 } from 'material-ui/styles/colors';

// Icons
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionEvent from 'material-ui/svg-icons/action/event';
import ImageExposurePlus from 'material-ui/svg-icons/image/exposure-plus-1';
import SocialSentimentNeutral from 'material-ui/svg-icons/social/sentiment-neutral';
import MapsLocalLibrary from 'material-ui/svg-icons/maps/local-library';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';


const profileUrl = process.env.PUBLIC_URL + "/images/profile.jpg";
const meDivierteUrl = process.env.PUBLIC_URL + "/images/me_divierte.png";
const meEntristeceUrl = process.env.PUBLIC_URL + "/images/me_entristece.png";




export default class Home extends React.Component{

  render(){
    return(

      <div>
        <Avatar
          src={meDivierteUrl}
          size={100}
          style={style.fortalezas}
        />

        <Avatar
          src={meEntristeceUrl}
          size={100}
          style={style.devilidades}
        />
        <div style={{backgroundColor: "white", zIndex: 999}}>
          <Particles
            params={particleConfig}
            style={style.particle}
          />
          <div className="row center-xs" >
            <Avatar
              src={profileUrl}
              size={100}
              style={style.avatar}
            />

            <div className="col-xs-7 top-space">
              <Card style={style.card} className="padding big-top-space">
                <h1 style={style.name}>Santiago Lopez</h1>
                <h3 style={style.descriptionCard}>Desarrollador Web, Movil, Desktop</h3>
                <Divider/>
                <div className="row center-xs">
                  <div className="col-xs-8">
                    <p style={style.text}>
                      Hola a todos!!! Mi nombre es Santiago López, soy programador originario de
                      Ecuador :D! empezé a programar a los 17 años (un poco tarde lo sé),
                      soy amante de la programación podría pasar 24/7 programando(pero a veces hay que tener vida social jaja!),
                      he participado en proyectos de todo tipo desde páginas Web como en la que te encuentras ahora, hasta software
                      bancario.
                    </p>
                  </div>

                  <div className="col-xs-8">
                    <Divider/>
                    <p style={style.text} >
                      El objetivo de esta página es presentarte un poco mi trabajo, mis proyectos y
                      mi formación, así que por que no le hechas un vistaso!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="row center-xs">
            <div className="col-xs-7">
              <h1 style={{paddingTop: '1em', color: blue600}}>
                <ActionAccountCircle style={{marginRight: '19px', color: blue600}}/>
                Datos personales
              </h1>
              <Card>
                <div className="row center-xs">
                  <div className="col-xs-12 col-md-6">
                    <List>
                      <ListItem
                        leftIcon={<CommunicationCall color={red600} />}
                        rightIcon={<CommunicationChatBubble color={blue600}/>}
                        primaryText="(593) 0988848884"
                        secondaryText="Mobile"
                      />
                      <ListItem
                        insetChildren={true}
                        leftIcon={<ActionHome color={red600}/>}
                        rightIcon={<CommunicationChatBubble color={blue600}/>}
                        primaryText="Redondel Ajavi"
                        secondaryText="Ibarra, Imbabura - Ecuador"
                      />
                    </List>
                    <Divider inset={true} />
                    <List>
                      <ListItem
                        leftIcon={<CommunicationEmail color={red600} />}
                        primaryText="santy_lopez@live.com.ar"
                        secondaryText="Personal"
                      />
                      <ListItem
                        insetChildren={true}
                        primaryText="sjlopezc@utn.edu.ec"
                        secondaryText="Estudiantil"
                      />
                    </List>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <List>
                      <ListItem
                        leftIcon={<ActionAccountCircle color={red600} />}
                        primaryText="Santiago Javier López Carranco"
                        secondaryText="Nombres"
                      />
                      <ListItem
                        insetChildren={true}
                        leftIcon={<ActionEvent color={red600} />}
                        primaryText="Martes 10 de Agosto de 1993 20h21"
                        secondaryText="Fecha de Nacimiento"
                      />
                    </List>
                    <Divider inset={true} />
                    <List>
                      <ListItem
                        leftIcon={<SocialSentimentNeutral color={red600} />}
                        primaryText="Soltero!"
                        secondaryText="Estado civil"
                      />
                      <ListItem
                        insetChildren={true}
                        leftIcon={<ImageExposurePlus color={red600} />}
                        primaryText="24 años"
                        secondaryText="Edad"
                      />
                    </List>
                  </div>
                </div>
              </Card>
            </div>
          </div>




          <div className="row center-xs">
            <div className="col-xs-11 col-md-5 bottom-space">
              <h2 style={{paddingTop: '1em', color: red600}}>
                <MapsLocalLibrary style={{marginRight: '19px', color: red600}}/>
                Mis Fortalezas
              </h2>
              <Card>
                <List>
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}
                    primaryText="Autodidacta"

                  />
                  <ListItem
                    insetChildren={true}
                    leftIcon={<NavigationChevronRight color={red600}/>}
                    primaryText="Perfeccionista"

                  />
                </List>
                <List>
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}
                    primaryText="Trabajo en Equipo"

                  />
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}

                    primaryText="Amante de los nuevos retos"

                  />
                </List>
              </Card>
            </div>
            <div className="col-xs-11 col-md-5 big-bottom-space">
              <h2 style={{paddingTop: '1em', color: red600}}>
                <MapsLocalLibrary style={{marginRight: '19px', color: red600}}/>
                Mis Debilidades
              </h2>
              <Card>
                <List>
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}
                    primaryText="Impaciente"
                  />
                  <ListItem
                    insetChildren={true}
                    leftIcon={<NavigationChevronRight color={red600}/>}
                    primaryText="Soy un poco obstinado"

                  />
                </List>
                <List>
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}
                    primaryText="Despistado"

                  />
                  <ListItem
                    leftIcon={<NavigationChevronRight color={red600} />}

                    primaryText="A veces soy impuntual jaja!"

                  />
                </List>
              </Card>
            </div>

          </div>

        </div>

      </div>

    );
  }
}