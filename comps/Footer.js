const Footer = () => {
    return (
      <footer>
        <span style={{'float': 'left'}}>DARE Danışmanlık© </span>
        <span style={{'float': 'right'}}>{new Date().toDateString()}</span>
        <br style={{'height': '4px'}}/>
        <p>Tüm hakları saklıdır.</p>
      </footer>
    );
  }
   
  export default Footer;