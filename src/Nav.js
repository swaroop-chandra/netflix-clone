import React , {useState ,useEffect} from 'react'
import './Nav.css'

function Nav() {

  const [show , handleShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 100){
        handleShow(true)
      }else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src = {window.location.origin + '/netflix(name).png'}
            alt= "Netflix Logo"
            />
            <img className="nav_avatar"
            src = {window.location.origin + '/Netflix-avatar.png'}
            alt= "Netflix Avatar"
            />
        </div>
    )
}

export default Nav
