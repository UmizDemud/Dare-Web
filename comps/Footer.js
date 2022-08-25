const Footer = () => {
    return (
      <footer>
        <span style={{'float': 'left'}}>Copyright Dare Consulting</span>
        <span style={{'float': 'right'}}>{new Date().toDateString()}</span>
      </footer>
    );
  }
   
  export default Footer;