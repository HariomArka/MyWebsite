import Link from 'next/link';
import Logo from '@/public/Logo.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 navbar flex justify-around items-center px-6 w-[100%]">
      <div className="navbar-brand  w-[35%]">
        <Link href="/">
          <img className='w-[100px]' src={Logo} alt=""/>
          <h1 className=''>ThereWasArka</h1>
        </Link>
      </div>
      <div className="flex justify-around text-2xl text-white w-[65%] mx-auto">
        <div className="nav-hover">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-hover">
          <Link href="/About">About</Link>
        </div>
        <div className="nav-hover">
          <Link href="/Funde">Funde</Link>
        </div>
        <div className="nav-hover">
          <Link href="/Acads">Acads</Link>
        </div>
        <div className="nav-hover">
          <a href="/Contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
