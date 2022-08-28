import content from '../lang/content.json'

const Footer = ({lang}) => {
    return (
      <footer>
        <span style={{'float': 'left'}}>{content.content.pages.footer.span1[lang]} </span>
        <span style={{'float': 'right'}}>{new Date().toDateString()}</span>
        <br style={{'height': '4px'}}/>
        <p>{content.content.pages.footer.p1[lang]}</p>
      </footer>
    );
  }
   
  export default Footer;