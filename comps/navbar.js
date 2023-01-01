import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
        <Image width={90} height={55} alt='bear' src='/bear.png' />
        </div>
        <Link legacyBehavior href="/"><a>Home</a></Link>
        <Link legacyBehavior href="/about"><a>About</a></Link>
        <Link legacyBehavior href="/users"><a>users lising</a></Link>
    </nav>
  )
}

export default Navbar