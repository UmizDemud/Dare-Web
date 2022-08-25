import styles from './Logo.module.css'

const defaults = {
    colorFrom: '#450606',
    colorTo: '#660404',
    outerCircleBorder: 'rgb(33, 33, 33)',
    innerCircleBorder: 'white',
    innerCircleFill: '#7087C6',
    textColor: 'white',
    text: 'DARE'

}


const Logo = () => {
    return ( 
        <svg className={styles.demut} xmlns="http://www.w3.org/2000/svg" width="70" height="70">     
            <circle cx="50%" cy="50%" r="49.5%" fill="none" stroke={defaults.outerCircleBorder}>
              <animate 
                attributeName="fill" 
                values={`${defaults.colorFrom}; ${defaults.colorTo}; ${defaults.colorFrom}` }
                dur="15s" repeatCount="indefinite" />
            </circle>
            <g>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
              <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white"></line>
            </g>
            <circle cx="50%" cy="50%" r="33%" fill={defaults.innerCircleFill} stroke={defaults.innerCircleBorder}>
            </circle>
            <text fill={defaults.textColor} x="25.3%" y="53.9%">{defaults.text}</text>
        </svg>   
     );
}
 
export default Logo;