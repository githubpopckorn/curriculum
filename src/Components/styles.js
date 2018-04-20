const imageUrl = process.env.PUBLIC_URL + "/images/background_home.png";
const style = {
  fondo: {
    backgroundImageUrl: imageUrl,
    backgroundSize: 'cover',
    overflow: 'hidden',
    height: '100%',
  },
  card: {
    backgroundColor: 'white'
  },
  avatar: {
    position: 'absolute',
    top: 79,
  },
  fortalezas: {
    position: 'absolute',
    bottom: 0,
    left: 35,
  },
  devilidades: {
    position: 'absolute',
    bottom: 0,
    right: 35,
  },
  name: {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '45px',
    lineHeight: '52px',
    opacity: '0.7',
    paddingTop: '0.5em'
  },
  descriptionCard: {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '25px',
    lineHeight: '52px',
    opacity: '0.7',
    paddingTop: '0.5em'
  },
  text: {
    margin: 0,
    fontSize: '15px',
    lineHeight: '40px',
    opacity: '0.7',
    paddingTop: '0.5em'
  },
  marginTopCard:{
    marginTop: '70px'
  },
  particle: {
    width: '100%',
    top: 0,
    position: 'fixed',
    height: '100%',
  },
  spanText: {
    margin: 0,
    color: '#ff4081',
    fontSize: '34px',
    textTransform: 'none',
    lineHeight: '38px',
    fontWeight: '300',
  }
};

export default style;
