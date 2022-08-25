import Link from 'next/link'
import Logo from './Logo';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <Link href="/"><a>Home</a></Link>|
      <Link href="/about"><a>About</a></Link>|
      <Link href="/processes/"><a>Projects</a></Link>|
      <Link href="/processes/"><a>Contact</a></Link>
    </nav>
  );
}
 
export default Navbar;