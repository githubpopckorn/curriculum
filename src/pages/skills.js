import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../Components/particle_config';
import style from '../Components/styles';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';


// Material ui
import {Card, CardMedia} from 'material-ui/Card';

export default class Skills extends React.Component{

  render(){
    return(
      <div style={{height: '100%'}}>

        <Particles
          params={particleConfig}
          style={style.particle}
        />

        <div className="row center-xs top-space bottom-space">
          <div className="col-xs-12">
            <h2 style={style.spanText}>
              <span>Tengo conocimientos en ...</span>
            </h2>
          </div>
          <div className="col-xs-12 col-md-3 spacing-right top-space" >
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/react.png"} alt="" />
              </CardMedia>
            </Card>
          </div>
          <div className="col-xs-12 col-md-3 spacing-right top-space" >
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/rails.png"} alt="" />
              </CardMedia>
            </Card>
          </div>
          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img   src={process.env.PUBLIC_URL + "/images/node.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/android.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  style={{height: '383px'}} src={process.env.PUBLIC_URL + "/images/golang.png"} alt="" />
              </CardMedia>
            </Card>
          </div>


          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/wordpress.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/java.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/angular.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/php.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/haml.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/react_native.png"} alt="" />
              </CardMedia>
            </Card>
          </div>

          <div className="col-xs-12 col-md-3 spacing-right top-space">
            <Card>
              <CardMedia>
                <img  src={process.env.PUBLIC_URL + "/images/html5.png"} alt="" />
              </CardMedia>
            </Card>
          </div>
        </div>

        <div className="row center-xs big-bottom-space">
          <div className="col-xs-12">
            <h2 style={style.spanText}>
              <span>Porcentaje de conocmimientos en las herramientas</span>
            </h2>
          </div>
          <div className="col-xs-7">
            <Card style={{backgroundColor: "#fff"}}>
              <div className="row center-xs">


                <div className="col-xs-12 col-md-6">
                  <h3>React</h3>
                  <Slider min={0} max={100} value={90} style={{zIndex: -99}}/>
                  <Divider/>
                  <h3>Ruby on Rails</h3>
                  <Slider min={0} max={100} value={99}/>
                  <Divider/>
                  <h3>Node Js</h3>
                  <Slider min={0} max={100} value={70}/>
                  <Divider/>
                  <h3>Angular</h3>
                  <Slider min={0} max={100} value={60}/>
                </div>

                <div className="col-xs-12 col-md-6">
                  <h3>Java</h3>
                  <Slider min={0} max={100} value={100}/>
                  <Divider/>
                  <h3>Php</h3>
                  <Slider min={0} max={100} value={80}/>
                  <Divider/>
                  <h3>React Native</h3>
                  <Slider min={0} max={100} value={70}/>
                  <Divider/>
                  <h3>Android</h3>
                  <Slider min={0} max={100} value={50}/>
                </div>
              </div>


            </Card>
          </div>
        </div>

      </div>
    );
  }
}
