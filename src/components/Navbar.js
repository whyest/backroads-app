import Logo from './Logo'
import PageLInks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <Logo />
          <PageLInks parentClass='nav-links' itemClass='nav-link' />
          <SocialLinks parentClass='nav-icons' itemClass='nav-icon' />
        </div>
      </nav>
    </>
  )
}
export default Navbar
