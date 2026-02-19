import './Nav.css'


function Nav() {
  return (
    <nav id="nav-buttons">
        <a href='#educacion'>
            <div className='nav-circle'>
                <div className="circle-wrapper">
                <img src="https://raw.githubusercontent.com/LuigiMonti/CV/bedd38b99db2a2e81ad3423de84d9b4658ed2317/CV-react/src/Components/Imgs/Escudo.webp" alt="Educación"/>
                </div>
                <span>Educación</span>
            </div>
        </a>
        <a href='#experiencia'>
            <div className='nav-circle'>
                <div className='circle-wrapper'>
                <img src="https://raw.githubusercontent.com/LuigiMonti/CV/bedd38b99db2a2e81ad3423de84d9b4658ed2317/CV-react/src/Components/Imgs/OIP.webp" alt="Experiencia"/>
                </div>
                <span>Experiencia</span>
            </div>
        </a>
        <a href='#skills'>
            <div className='nav-circle'>
                <div className='circle-wrapper'>
                <img src="https://raw.githubusercontent.com/LuigiMonti/CV/Entregable7/CV-react/src/Components/Imgs/arco.avif" alt="Skills" />
                </div>
                <span>skills</span>
            </div>
        </a>
    </nav>
  )
}

export default Nav