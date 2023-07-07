import logo from '../images/logo.svg'

const Logo = () => {
  return (
    <div className='nav-header'>
      <img src={logo} className='nav-logo' alt='backroads' />
      <button type='button' className='nav-toggle' id='nav-toggle'>
        <i className='fas fa-bars'></i>
      </button>
    </div>
  )
}
export default Logo
