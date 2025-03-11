import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-[5%] relative bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Title */}
          <div className="text-xl font-semibold mb-4 md:mb-0">
            <Link href="/"><h1 className='navbar-brand'>ThereWasArka</h1></Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col ">
            <Link href="/" className="hover:text-sky-400">
              Home
            </Link>
            <Link href="/About" className="hover:text-sky-400">
              About
            </Link>
            <Link href="/Funde" className="hover:text-sky-400">
              Funde
            </Link>
            <Link href="/Acads" className="hover:text-sky-400">
              Acads
            </Link>
            <Link href="/Contact" className="hover:text-sky-400">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 ">
            <a href="https://www.facebook.com/share/1XD8rW7ikE/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-1 hover:bg-sky-500">
             <img src="/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/arkaghosh10007/profilecard/?igsh=cnhvOGd2N2Vpazln" target="_blank" rel="noopener noreferrer" className="rounded-lg p-1 hover:bg-sky-500">
              <img src="/instagram.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/arka-ghosh-2729b529a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="rounded-lg p-1 hover:bg-sky-500">
              <img src="/social-linkedin.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} ThereWasArka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
