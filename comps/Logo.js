import styles from './Logo.module.css'

const defaults = {
    colorFrom: '#dd0606',
    colorTo: '#dd0404',
    outerCircleBorder: 'white',
    innerCircleBorder: 'white',
    innerCircleFill: '#8787C6',
    textColor: 'white',
    linesColor: '#fff',
    text: 'DARE'

}


const Logo = () => {

  const generateLines = () => {
    var res = []
    var rend = 0
    var randomColor = "";

    for (let i = 0; i < 50; i++) {
      rend = Math.random()*6;
      randomColor = Math.floor(Math.random()*16777215).toString(16);
      if(rend < 1) {
        res.push(
          <line mask="url(#mask)" x1="0" y1={`${Math.floor(Math.random()*100)}%`} x2={`${Math.floor(Math.random()*100)}%`} y2="0" stroke={`#${randomColor}`}></line>
        )
      } else if (rend < 2) {
        res.push(
          <line mask="url(#mask)" x1="0" y1={`${Math.floor(Math.random()*100)}%`} x2="100%" y2={`${Math.floor(Math.random()*100)}%`} stroke={`#${randomColor}`}></line>
        )  
      } else if (rend < 3) {
        res.push(
          <line mask="url(#mask)" x1="0" y1={`${Math.floor(Math.random()*100)}%`} x2={`${Math.floor(Math.random()*100)}%`} y2="100%" stroke={`#${randomColor}`}></line>
        )  
      } else if (rend < 4) {
        res.push(
          <line mask="url(#mask)" x1={`${Math.floor(Math.random()*100)}%`} y1="0" x2="100%" y2={`${Math.floor(Math.random()*100)}%`} stroke={`#${randomColor}`}></line>
        )  
      } else if (rend < 5) {
        res.push(
          <line mask="url(#mask)" x1={`${Math.floor(Math.random()*100)}%`} y1="0" x2={`${Math.floor(Math.random()*100)}%`} y2="100%" stroke={`#${randomColor}`}></line>
        )
      } else {
        res.push(
          <line mask="url(#mask)" x1="100%" y1={`${Math.floor(Math.random()*100)}%`} x2={`${Math.floor(Math.random()*100)}%`} y2="100%" stroke={`#${randomColor}`}></line>
        )
      }
    }
    return res
  }

    return ( 
        <svg className={styles.demut} xmlns="http://www.w3.org/2000/svg" width="70" height="70">     
            <defs>
            <mask id="mask">
              <rect width="100%" height="100%" fill="black"/>
              <ellipse cx="50%" cy="50%" ry="35%" rx="49.5%" fill="white"  />
              </mask>
            </defs>
            <ellipse cx="50%" cy="50%" ry="38%" rx="49.5%" fill="none" stroke={defaults.outerCircleBorder}>
              <animate 
                attributeName="fill" 
                values={`${defaults.colorFrom}; ${defaults.colorTo}; ${defaults.colorFrom}` }
                dur="15s" repeatCount="indefinite" />
            </ellipse>
            <g mask="url(#mask)">
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke={defaults.linesColor}></line>
              { /*generateLines()*/ }
            </g>
            <ellipse cx="50%" cy="50%" rx="37%" ry="30%" fill={defaults.innerCircleFill} stroke={defaults.innerCircleBorder}>
            </ellipse>
            <text fill={defaults.textColor} x="25.3%" y="54.06%">{defaults.text}</text>
        </svg>   
     );
}
 
export default Logo;